//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const filter = searchParams.get("filter");

  const workbook = new ExcelJS.Workbook();
  let worksheet: ExcelJS.Worksheet;

  if (type === "charges") {
    const charges = await db.charges.findMany({
      include:
        filter === "join_charges"
          ? { student: true, instrument: true }
          : undefined,
    });

    worksheet = workbook.addWorksheet("Χρεώσεις");

    worksheet.columns = [
      { header: "Ημερομηνία", key: "date", width: 20 },
      ...(filter === "join_charges"
        ? [
            { header: "Μαθητής", key: "studentName", width: 30 },
            { header: "Τηλέφωνο", key: "phone", width: 20 },
            { header: "Όργανο", key: "instrument", width: 30 },
            { header: "Barcode", key: "barcode", width: 20 },
          ]
        : []),
      { header: "Ποσό", key: "amount", width: 10 },
    ];
    charges.forEach((charge) => {
      worksheet.addRow({
        date: charge.date.toISOString().split("T")[0],
        studentName: charge.student
          ? `${charge.student.firstName} ${charge.student.lastName}`
          : "",
        phone: charge.student?.phoneNumber ?? "",
        instrument: charge.instrument?.instrumentType ?? "",
        barcode: charge.instrument?.barcode ?? "",
        amount: charge.amount ?? "—",
      });
    });
  } else if (type === "users") {
    const students = await db.students.findMany({
      include: filter === "join_charges" ? { charges: true } : undefined,
    });

    worksheet = workbook.addWorksheet("Μαθητές");

    worksheet.columns = [
      { header: "Όνομα", key: "firstName", width: 20 },
      { header: "Επώνυμο", key: "lastName", width: 20 },
      { header: "Διεύθυνση", key: "address", width: 30 },
      { header: "Τηλέφωνο", key: "phone", width: 20 },
      { header: "Στολή", key: "uniform", width: 10 },
      ...(filter === "join_charges"
        ? [{ header: "Αριθμός Χρεώσεων", key: "charges", width: 20 }]
        : []),
    ];

    students.forEach((student) => {
      worksheet.addRow({
        firstName: student.firstName,
        lastName: student.lastName,
        address: student.address,
        phone: student.phoneNumber,
        uniform: student.hasUniform ? "Ναι" : "Όχι",
        charges: filter === "join_charges" ? student.charges.length : undefined,
      });
    });
  } else if (type === "instruments") {
    const instruments = await db.instruments.findMany({
      include: filter === "join_charges" ? { charges: true } : undefined,
    });

    worksheet = workbook.addWorksheet("Όργανα");

    worksheet.columns = [
      { header: "Τύπος", key: "type", width: 20 },
      { header: "Μάρκα", key: "brand", width: 20 },
      { header: "Κατάσταση", key: "status", width: 15 },
      { header: "Barcode", key: "barcode", width: 20 },
      { header: "Σχόλια", key: "comments", width: 30 },
      ...(filter === "join_charges"
        ? [{ header: "Αριθμός Χρεώσεων", key: "charges", width: 20 }]
        : []),
    ];

    instruments.forEach((i) => {
      worksheet.addRow({
        type: i.instrumentType,
        brand: i.brand,
        status: i.status,
        barcode: i.barcode,
        comments: i.comments ?? "",
        charges: filter === "join_charges" ? i.charges.length : undefined,
      });
    });
  } else {
    return NextResponse.json(
      { error: "Invalid or missing type parameter" },
      { status: 400 }
    );
  }

  const buffer = await workbook.xlsx.writeBuffer();

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition":
        "attachment; filename=report.xlsx; filename*=UTF-8''report.xlsx",
    },
  });
}
