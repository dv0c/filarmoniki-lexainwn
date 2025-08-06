import { NextResponse } from "next/server"
import { db } from "@/lib/db" // your prisma client (adjust import if needed)

// GET: Fetch all instruments or a single one by id (?id=)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (id) {
      const instrument = await db.instruments.findUnique({
        where: { id },
        include: { charges: {
          include: {
            student: true,
          }
        } },
      })
      if (!instrument) {
        return NextResponse.json({ error: "Instrument not found" }, { status: 404 })
      }
      return NextResponse.json(instrument, { status: 200 })
    }

    const instruments = await db.instruments.findMany({
      orderBy: { brand: "asc" },
      include: { charges: true },
    })
    return NextResponse.json(instruments, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch instruments" }, { status: 500 })
  }
}

// POST: Create a new instrument
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { barcode, instrumentType, brand, status, comments } = body

    if (!barcode || !instrumentType || !brand || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const instrument = await db.instruments.create({
      data: {
        barcode,
        instrumentType,
        brand,
        status,
        comments,
      },
    })

    return NextResponse.json(instrument, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to create instrument" }, { status: 500 })
  }
}

// PUT: Update an instrument
export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id, barcode, instrumentType, brand, status, comments } = body

    if (!id) {
      return NextResponse.json({ error: "id is required for update" }, { status: 400 })
    }

    const instrument = await db.instruments.update({
      where: { id },
      data: {
        barcode,
        instrumentType,
        brand,
        status,
        comments,
      },
    })

    return NextResponse.json(instrument, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to update instrument" }, { status: 500 })
  }
}

// DELETE: Delete an instrument by id (?id=)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "id is required for delete" }, { status: 400 })
    }

    await db.instruments.delete({
      where: { id },
    })

    return NextResponse.json({ message: `Instrument ${id} deleted successfully` }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to delete instrument" }, { status: 500 })
  }
}
