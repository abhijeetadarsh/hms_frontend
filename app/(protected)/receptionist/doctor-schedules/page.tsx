"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DoctorSchedules() {
  const [schedules, setSchedules] = useState([
    { id: 1, doctor: "Dr. Smith", department: "Cardiology", day: "Monday", startTime: "09:00", endTime: "17:00" },
    { id: 2, doctor: "Dr. Johnson", department: "Neurology", day: "Tuesday", startTime: "10:00", endTime: "18:00" },
    { id: 3, doctor: "Dr. Williams", department: "Pediatrics", day: "Wednesday", startTime: "08:00", endTime: "16:00" },
  ]);

  const [selectedDay, setSelectedDay] = useState("all");

  const filteredSchedules =
    selectedDay === "all" ? schedules : schedules.filter((schedule) => schedule.day.toLowerCase() === selectedDay);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Doctor Schedules</h1>
      <div className="mb-4">
        <Select onValueChange={setSelectedDay} defaultValue={selectedDay}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by day" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Days</SelectItem>
            <SelectItem value="monday">Monday</SelectItem>
            <SelectItem value="tuesday">Tuesday</SelectItem>
            <SelectItem value="wednesday">Wednesday</SelectItem>
            <SelectItem value="thursday">Thursday</SelectItem>
            <SelectItem value="friday">Friday</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Doctor</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Day</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSchedules.map((schedule) => (
            <TableRow key={schedule.id}>
              <TableCell>{schedule.doctor}</TableCell>
              <TableCell>{schedule.department}</TableCell>
              <TableCell>{schedule.day}</TableCell>
              <TableCell>{schedule.startTime}</TableCell>
              <TableCell>{schedule.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
