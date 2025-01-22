import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const doctors = [
  { id: 1, name: "Dr. John Doe", specialization: "Cardiology", department: "Cardiology" },
  { id: 2, name: "Dr. Jane Smith", specialization: "Neurosurgery", department: "Neurology" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  // Add more doctors as needed
];

export default function Doctors() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Doctor Directory</h1>
      <div className="mb-8 flex gap-4">
        <Input type="text" placeholder="Search doctors..." className="max-w-sm" />
        <Button>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
            <p className="text-gray-600">Specialization: {doctor.specialization}</p>
            <p className="text-gray-600">Department: {doctor.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
