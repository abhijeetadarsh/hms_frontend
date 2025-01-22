"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function MedicalRecords() {
  const [records, setRecords] = useState([
    { id: 1, date: "2023-05-15", doctor: "Dr. Smith", diagnosis: "Common Cold", treatment: "Rest and fluids" },
    {
      id: 2,
      date: "2023-04-20",
      doctor: "Dr. Johnson",
      diagnosis: "Sprained Ankle",
      treatment: "RICE method, pain medication",
    },
    {
      id: 3,
      date: "2023-03-10",
      doctor: "Dr. Williams",
      diagnosis: "Annual Check-up",
      treatment: "No treatment required",
    },
  ]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Medical Records</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Diagnosis</TableHead>
            <TableHead>Treatment</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.doctor}</TableCell>
              <TableCell>{record.diagnosis}</TableCell>
              <TableCell>{record.treatment}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
