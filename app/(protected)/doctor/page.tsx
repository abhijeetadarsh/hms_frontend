import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DoctorDashboard() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Doctor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Schedule Management" link="/dashboard/doctor/schedule">
          Set weekly schedules and manage availability
        </DashboardCard>
        <DashboardCard title="Appointment Management" link="/dashboard/doctor/appointments">
          View and manage upcoming appointments
        </DashboardCard>
        <DashboardCard title="Patient Records" link="/dashboard/doctor/patients">
          Access and update patient medical records
        </DashboardCard>
        <DashboardCard title="Prescriptions" link="/dashboard/doctor/prescriptions">
          Write and manage patient prescriptions
        </DashboardCard>
        <DashboardCard title="Laboratory Tests" link="/dashboard/doctor/lab-tests">
          Order and view laboratory test results
        </DashboardCard>
      </div>
    </div>
  );
}

function DashboardCard({ title, children, link }: { title: string; children: React.ReactNode; link: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{children}</p>
      <Button asChild>
        <Link href={link}>Manage</Link>
      </Button>
    </div>
  );
}
