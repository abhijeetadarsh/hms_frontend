"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PatientManagement() {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", dateOfBirth: "1980-01-01", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", dateOfBirth: "1985-05-15", contact: "987-654-3210" },
    { id: 3, name: "Mike Johnson", dateOfBirth: "1990-12-31", contact: "456-789-0123" },
  ]);

  const [newPatient, setNewPatient] = useState({ name: "", dateOfBirth: "", contact: "" });

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
    setNewPatient({ name: "", dateOfBirth: "", contact: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Patient Management</h1>
      <form onSubmit={handleAddPatient} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Name"
            value={newPatient.name}
            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
            required
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={newPatient.dateOfBirth}
            onChange={(e) => setNewPatient({ ...newPatient, dateOfBirth: e.target.value })}
            required
          />
          <Input
            type="tel"
            placeholder="Contact"
            value={newPatient.contact}
            onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
            required
          />
          <Button type="submit">Add Patient</Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.dateOfBirth}</TableCell>
              <TableCell>{patient.contact}</TableCell>
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
