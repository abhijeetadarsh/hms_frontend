import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PatientDashboard() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Profile Management" link="/dashboard/patient/profile">
          Update your personal information and medical history
        </DashboardCard>
        <DashboardCard title="Appointment Management" link="/dashboard/patient/appointments">
          Book and manage your appointments
        </DashboardCard>
        <DashboardCard title="Medical Records" link="/dashboard/patient/records">
          View your medical records and test results
        </DashboardCard>
        <DashboardCard title="Prescriptions" link="/dashboard/patient/prescriptions">
          Access your current and past prescriptions
        </DashboardCard>
        <DashboardCard title="Billing" link="/dashboard/patient/billing">
          View and manage your medical bills
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
