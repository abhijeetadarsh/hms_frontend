"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ReportsManagement() {
  const [reportType, setReportType] = useState("appointments");

  const appointmentData = [
    { id: 1, date: "2023-06-01", department: "Cardiology", count: 15 },
    { id: 2, date: "2023-06-01", department: "Neurology", count: 10 },
    { id: 3, date: "2023-06-02", department: "Pediatrics", count: 20 },
  ];

  const billingData = [
    { id: 1, date: "2023-06-01", department: "Cardiology", amount: 5000 },
    { id: 2, date: "2023-06-01", department: "Neurology", amount: 3500 },
    { id: 3, date: "2023-06-02", department: "Pediatrics", amount: 4200 },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">System Reports</h1>
      <div className="mb-8">
        <Select onValueChange={setReportType} defaultValue={reportType}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select report type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="appointments">Appointment Statistics</SelectItem>
            <SelectItem value="billing">Billing Summary</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {reportType === "appointments" && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Appointment Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointmentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {reportType === "billing" && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Billing Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billingData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>${row.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
