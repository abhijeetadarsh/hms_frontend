"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BillingManagement() {
  const [bills, setBills] = useState([
    { id: 1, patient: "John Doe", amount: 150, date: "2023-06-01", status: "Paid" },
    { id: 2, patient: "Jane Smith", amount: 200, date: "2023-06-02", status: "Pending" },
  ]);

  const [newBill, setNewBill] = useState({ patient: "", amount: "", date: "", status: "" });

  const handleAddBill = (e: React.FormEvent) => {
    e.preventDefault();
    setBills([...bills, { id: bills.length + 1, ...newBill, amount: Number.parseFloat(newBill.amount) }]);
    setNewBill({ patient: "", amount: "", date: "", status: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Billing Management</h1>
      <form onSubmit={handleAddBill} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Patient Name"
            value={newBill.patient}
            onChange={(e) => setNewBill({ ...newBill, patient: e.target.value })}
            required
          />
          <Input
            type="number"
            placeholder="Amount"
            value={newBill.amount}
            onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })}
            required
          />
          <Input
            type="date"
            value={newBill.date}
            onChange={(e) => setNewBill({ ...newBill, date: e.target.value })}
            required
          />
          <Select onValueChange={(value) => setNewBill({ ...newBill, status: value })} required>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="col-span-2">
            Add Bill
          </Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.patient}</TableCell>
              <TableCell>${bill.amount.toFixed(2)}</TableCell>
              <TableCell>{bill.date}</TableCell>
              <TableCell>{bill.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
