import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/charges -> list all charges
export async function GET() {
  try {
    const charges = await db.charges.findMany({
      include: {
        student: true,
        instrument: true,
      },
      orderBy: {
        date: "desc",
      },
    });
    return NextResponse.json(charges);
  } catch (error) {
    console.error("Failed to fetch charges:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// POST /api/charges -> create a new charge
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { studentId, instrumentId } = body;

    if (!studentId || !instrumentId) {
      return NextResponse.json(
        { error: "studentId and instrumentId are required" },
        { status: 400 }
      );
    }

    const userIsAlreadyCharged = await db.students.findFirst({
      where: {
        id: studentId,
        charges: {
          some: {
            instrumentId: instrumentId,
          },
        },
      },
    });

    if (userIsAlreadyCharged) {
      return NextResponse.json(
        { error: "This student is already charged for this instrument" },
        { status: 400 }
      );
    }

    const charge = await db.charges.create({
      data: {
        studentId,
        instrumentId,
        amount: 0, // Default to 0 if not provided
      },
    });

    return NextResponse.json(charge);
  } catch (error) {
    console.error("Failed to create charge:", error);
    return NextResponse.json(
      { error: "Failed to create charge" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { chargeId } = body;

    if (!chargeId) {
      return NextResponse.json(
        { error: "studentId and instrumentId are required" },
        { status: 400 }
      );
    }

    const charge = await db.charges.delete({
      where: {
        id: chargeId,
      },
    });
    return NextResponse.json(charge);
  } catch (error) {
    console.error("Failed to create charge:", error);
    return NextResponse.json(
      { error: "Failed to create charge" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { studentId, instrumentId } = body;

    if (!studentId || !instrumentId) {
      return NextResponse.json(
        { error: "studentId and instrumentId are required" },
        { status: 400 }
      );
    }

    const charge = await db.charges.deleteMany({
      where: {
        studentId,
        instrumentId,
      },
    });

    return NextResponse.json(charge);
  } catch (error) {
    console.error("Failed to delete charge:", error);
    return NextResponse.json(
      { error: "Failed to delete charge" },
      { status: 500 }
    );
  }
}