"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PatientProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    dateOfBirth: "1980-01-01",
    gender: "male",
    address: "123 Main St, Anytown, USA",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    emergencyContact: "Jane Doe: 987-654-3210",
    medicalHistory: "No significant medical history",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
    // Here you would typically send the updated profile to your backend
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Patient Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input id="name" name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={profile.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <Select
            name="gender"
            onValueChange={(value) => handleSelectChange("gender", value)}
            defaultValue={profile.gender}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <Input id="address" name="address" value={profile.address} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
            Emergency Contact
          </label>
          <Input
            id="emergencyContact"
            name="emergencyContact"
            value={profile.emergencyContact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">
            Medical History
          </label>
          <Textarea
            id="medicalHistory"
            name="medicalHistory"
            value={profile.medicalHistory}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  );
}
