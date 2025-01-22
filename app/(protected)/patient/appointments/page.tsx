"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2023-06-01", time: "10:00", doctor: "Dr. Smith", department: "Cardiology" },
    { id: 2, date: "2023-06-05", time: "14:30", doctor: "Dr. Johnson", department: "Neurology" },
  ]);

  const [newAppointment, setNewAppointment] = useState({ date: "", time: "", doctor: "", department: "" });

  const handleAddAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointments([...appointments, { id: appointments.length + 1, ...newAppointment }]);
    setNewAppointment({ date: "", time: "", doctor: "", department: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Appointment Management</h1>
      <form onSubmit={handleAddAppointment} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="date"
            value={newAppointment.date}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
            required
          />
          <Input
            type="time"
            value={newAppointment.time}
            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
            required
          />
          <Input
            type="text"
            placeholder="Doctor"
            value={newAppointment.doctor}
            onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
            required
          />
          <Select onValueChange={(value) => setNewAppointment({ ...newAppointment, department: value })} required>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="col-span-2">
            Book Appointment
          </Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.department}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
