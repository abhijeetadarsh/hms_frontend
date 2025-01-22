"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patientName: "John Doe", medication: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { id: 2, patientName: "Jane Smith", medication: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { id: 3, patientName: "Mike Johnson", medication: "Albuterol", dosage: "2 puffs", frequency: "As needed" },
  ]);

  const [newPrescription, setNewPrescription] = useState({
    patientName: "",
    medication: "",
    dosage: "",
    frequency: "",
  });

  const handleAddPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    setPrescriptions([...prescriptions, { id: prescriptions.length + 1, ...newPrescription }]);
    setNewPrescription({ patientName: "", medication: "", dosage: "", frequency: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Prescriptions</h1>
      <form onSubmit={handleAddPrescription} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Patient Name"
            value={newPrescription.patientName}
            onChange={(e) => setNewPrescription({ ...newPrescription, patientName: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Medication"
            value={newPrescription.medication}
            onChange={(e) => setNewPrescription({ ...newPrescription, medication: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Dosage"
            value={newPrescription.dosage}
            onChange={(e) => setNewPrescription({ ...newPrescription, dosage: e.target.value })}
            required
          />
          <Select onValueChange={(value) => setNewPrescription({ ...newPrescription, frequency: value })} required>
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="once_daily">Once Daily</SelectItem>
              <SelectItem value="twice_daily">Twice Daily</SelectItem>
              <SelectItem value="thrice_daily">Thrice Daily</SelectItem>
              <SelectItem value="as_needed">As Needed</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="col-span-2">
            Add Prescription
          </Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Medication</TableHead>
            <TableHead>Dosage</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prescriptions.map((prescription) => (
            <TableRow key={prescription.id}>
              <TableCell>{prescription.patientName}</TableCell>
              <TableCell>{prescription.medication}</TableCell>
              <TableCell>{prescription.dosage}</TableCell>
              <TableCell>{prescription.frequency}</TableCell>
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
