"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function InventoryManagement() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Paracetamol", quantity: 1000, expiryDate: "2024-12-31" },
    { id: 2, name: "Amoxicillin", quantity: 500, expiryDate: "2024-06-30" },
    { id: 3, name: "Ibuprofen", quantity: 750, expiryDate: "2025-03-31" },
  ]);

  const [newItem, setNewItem] = useState({ name: "", quantity: "", expiryDate: "" });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    setInventory([...inventory, { id: inventory.length + 1, ...newItem, quantity: Number.parseInt(newItem.quantity) }]);
    setNewItem({ name: "", quantity: "", expiryDate: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Inventory Management</h1>
      <form onSubmit={handleAddItem} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Medicine Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            required
          />
          <Input
            type="date"
            placeholder="Expiry Date"
            value={newItem.expiryDate}
            onChange={(e) => setNewItem({ ...newItem, expiryDate: e.target.value })}
            required
          />
          <Button type="submit">Add Item</Button>
        </div>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.expiryDate}</TableCell>
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
