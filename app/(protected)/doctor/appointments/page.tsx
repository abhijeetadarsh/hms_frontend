"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", date: "2023-06-01", time: "10:00 AM", reason: "Check-up" },
    { id: 2, patientName: "Jane Smith", date: "2023-06-01", time: "11:30 AM", reason: "Follow-up" },
    { id: 3, patientName: "Mike Johnson", date: "2023-06-02", time: "09:15 AM", reason: "Consultation" },
  ]);

  const handleCompleteAppointment = (id: number) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.reason}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleCompleteAppointment(appointment.id)}>
                  Complete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
