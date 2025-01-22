"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DepartmentManagement() {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Cardiology", head: "Dr. Smith", location: "Building A, Floor 2" },
    { id: 2, name: "Neurology", head: "Dr. Johnson", location: "Building B, Floor 1" },
    { id: 3, name: "Pediatrics", head: "Dr. Williams", location: "Building C, Floor 3" },
  ]);

  const [newDepartment, setNewDepartment] = useState({ name: "", head: "", location: "" });

  const handleAddDepartment = (e: React.FormEvent) => {
    e.preventDefault();
    setDepartments([...departments, { id: departments.length + 1, ...newDepartment }]);
    setNewDepartment({ name: "", head: "", location: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Department Management</h1>
      <form onSubmit={handleAddDepartment} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Department Name"
            value={newDepartment.name}
            onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Department Head"
            value={newDepartment.head}
            onChange={(e) => setNewDepartment({ ...newDepartment, head: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Location"
            value={newDepartment.location}
            onChange={(e) => setNewDepartment({ ...newDepartment, location: e.target.value })}
            required
          />
          <Button type="submit">Add Department</Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Head</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((department) => (
            <TableRow key={department.id}>
              <TableCell>{department.name}</TableCell>
              <TableCell>{department.head}</TableCell>
              <TableCell>{department.location}</TableCell>
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
