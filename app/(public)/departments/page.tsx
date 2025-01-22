import Link from "next/link";
import { Button } from "@/components/ui/button";

const departments = [
  { id: 1, name: "Cardiology", description: "Heart and cardiovascular system care" },
  { id: 2, name: "Neurology", description: "Diagnosis and treatment of nervous system disorders" },
  { id: 3, name: "Pediatrics", description: "Medical care for infants, children, and adolescents" },
  // Add more departments as needed
];

export default function Departments() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{dept.name}</h2>
            <p className="text-gray-600 mb-4">{dept.description}</p>
            <Button asChild variant="outline">
              <Link href={`/departments/${dept.id}`}>Learn More</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
