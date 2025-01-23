import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const doctors = [
  { id: 1, name: "Dr. John Doe", specialization: "Cardiology", department: "Cardiology" },
  { id: 2, name: "Dr. Jane Smith", specialization: "Neurosurgery", department: "Neurology" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
  { id: 3, name: "Dr. Mike Johnson", specialization: "Pediatrics", department: "Pediatrics" },
];

export default function DoctorsDirectory() {
  return (
    <div className="mt-6 space-y-6">
      {/* Search Bar */}
      <div className="flex gap-4">
        <Input type="text" placeholder="Search doctors..." className="max-w-sm" />
        <Button>Search</Button>
      </div>

      {/* Doctors List */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-96 overflow-y-auto"
        style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,0,0,0.5) transparent" }}
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-gray-600">Specialization: {doctor.specialization}</p>
            <p className="text-gray-600">Department: {doctor.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
