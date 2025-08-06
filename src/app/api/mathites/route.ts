import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET Mathites (GET)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch a single student by ID
      const student = await db.students.findUnique({
        where: { id },
        include: {
          charges: {
            select: {
              date: true,
              instrument: true,
              id: true,
            }
          },
        },
      });

      if (!student) {
        return NextResponse.json(
          { error: "Student not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(student, { status: 200 });
    }

    // Fetch all students
    const students = await db.students.findMany({
      orderBy: { lastName: "asc" },
    });

    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}

// CREATE Mathites (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, residence, address, phoneNumber, hasUniform } =
      body;

    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "firstName and lastName are required" },
        { status: 400 }
      );
    }

    const student = await db.students.create({
      data: {
        firstName,
        lastName,
        address: residence || address,
        phoneNumber,
        hasUniform,
      },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}

// UPDATE Mathites (PUT)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      firstName,
      lastName,
      residence,
      address,
      phoneNumber,
      hasUniform,
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "id is required for update" },
        { status: 400 }
      );
    }

    const student = await db.students.update({
      where: { id },
      data: {
        firstName,
        lastName,
        address: residence || address,
        phoneNumber,
        hasUniform,
      },
    });

    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update student" },
      { status: 500 }
    );
  }
}

// DELETE Mathites (DELETE)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "id is required for delete" },
        { status: 400 }
      );
    }

    await db.students.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: `Student ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete student" },
      { status: 500 }
    );
  }
}
