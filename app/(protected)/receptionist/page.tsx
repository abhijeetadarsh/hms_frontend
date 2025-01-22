import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReceptionistDashboard() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Receptionist Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Appointment Management" link="/dashboard/receptionist/appointments">
          Schedule and manage patient appointments
        </DashboardCard>
        <DashboardCard title="Patient Management" link="/dashboard/receptionist/patients">
          Register new patients and update information
        </DashboardCard>
        <DashboardCard title="Billing Operations" link="/dashboard/receptionist/billing">
          Generate bills and manage payments
        </DashboardCard>
        <DashboardCard title="Doctor Schedules" link="/dashboard/receptionist/doctor-schedules">
          View and manage doctor availability
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
