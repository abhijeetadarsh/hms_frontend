import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Comprehensive care for heart and cardiovascular system conditions.",
  },
  {
    id: 2,
    name: "Neurology",
    description: "Diagnosis and treatment of nervous system disorders.",
  },
  {
    id: 3,
    name: "Pediatrics",
    description: "Medical care for infants, children, and adolescents.",
  },
  {
    id: 4,
    name: "Orthopedics",
    description: "Treatment of bone, joint, and musculoskeletal issues.",
  },
  {
    id: 5,
    name: "Dermatology",
    description: "Skin care and treatment of various skin disorders.",
  },
  {
    id: 6,
    name: "Oncology",
    description: "Comprehensive cancer care and treatment solutions.",
  },
  {
    id: 7,
    name: "Gynecology",
    description: "Healthcare for women, focusing on reproductive health.",
  },
  {
    id: 8,
    name: "Psychiatry",
    description: "Mental health care and treatment of behavioral disorders.",
  },
  {
    id: 9,
    name: "Radiology",
    description: "Imaging and diagnostic services for accurate treatment planning.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Departments() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(departments.length / ITEMS_PER_PAGE);

  const currentDepartments = departments.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDepartments.map((dept) => (
          <div key={dept.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
            <p className="text-gray-600 mb-4">{dept.description}</p>
            <Button asChild variant="outline">
              <Link href={`/departments/${dept.id}`}>Learn More</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            variant={currentPage === index + 1 ? "default" : "outline"}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </>
  );
}
