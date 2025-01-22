"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function StaffManagement() {
  const [staff, setStaff] = useState([
    { id: 1, name: "John Doe", role: "Doctor", department: "Cardiology", contact: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Nurse", department: "Pediatrics", contact: "jane@example.com" },
    { id: 3, name: "Mike Johnson", role: "Receptionist", department: "Administration", contact: "mike@example.com" },
  ]);

  const [newStaff, setNewStaff] = useState({ name: "", role: "", department: "", contact: "" });

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    setStaff([...staff, { id: staff.length + 1, ...newStaff }]);
    setNewStaff({ name: "", role: "", department: "", contact: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Staff Management</h1>
      <form onSubmit={handleAddStaff} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Name"
            value={newStaff.name}
            onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            required
          />
          <Select onValueChange={(value) => setNewStaff({ ...newStaff, role: value })} required>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="nurse">Nurse</SelectItem>
              <SelectItem value="receptionist">Receptionist</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Department"
            value={newStaff.department}
            onChange={(e) => setNewStaff({ ...newStaff, department: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Contact Email"
            value={newStaff.contact}
            onChange={(e) => setNewStaff({ ...newStaff, contact: e.target.value })}
            required
          />
          <Button type="submit" className="col-span-2">
            Add Staff
          </Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staff.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{member.department}</TableCell>
              <TableCell>{member.contact}</TableCell>
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
