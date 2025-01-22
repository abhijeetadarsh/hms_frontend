"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ScheduleManagement() {
  const [schedule, setSchedule] = useState([
    { id: 1, day: "Monday", startTime: "09:00", endTime: "17:00" },
    { id: 2, day: "Tuesday", startTime: "09:00", endTime: "17:00" },
    { id: 3, day: "Wednesday", startTime: "09:00", endTime: "17:00" },
  ]);

  const [newSlot, setNewSlot] = useState({ day: "", startTime: "", endTime: "" });

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    setSchedule([...schedule, { id: schedule.length + 1, ...newSlot }]);
    setNewSlot({ day: "", startTime: "", endTime: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Schedule Management</h1>
      <form onSubmit={handleAddSlot} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Day"
            value={newSlot.day}
            onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
            required
          />
          <Input
            type="time"
            value={newSlot.startTime} //Here's the continuation of the text stream from the cut-off point: required
          />
          <Input
            type="time"
            value={newSlot.startTime}
            onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
            required
          />
          <Input
            type="time"
            value={newSlot.endTime}
            onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
            required
          />
          <Button type="submit">Add Slot</Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((slot) => (
            <TableRow key={slot.id}>
              <TableCell>{slot.day}</TableCell>
              <TableCell>{slot.startTime}</TableCell>
              <TableCell>{slot.endTime}</TableCell>
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
