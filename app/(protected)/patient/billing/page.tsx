"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PatientBilling() {
  const [bills, setBills] = useState([
    { id: 1, date: "2023-05-15", description: "Consultation", amount: 150, status: "Paid" },
    { id: 2, date: "2023-04-20", description: "X-Ray", amount: 200, status: "Pending" },
    { id: 3, date: "2023-03-10", description: "Blood Test", amount: 75, status: "Paid" },
  ]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Billing</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.date}</TableCell>
              <TableCell>{bill.description}</TableCell>
              <TableCell>${bill.amount.toFixed(2)}</TableCell>
              <TableCell>{bill.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  {bill.status === "Pending" ? "Pay Now" : "View Receipt"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
