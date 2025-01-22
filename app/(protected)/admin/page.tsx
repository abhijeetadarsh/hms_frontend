import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="User Management" link="/dashboard/admin/users">
          Create, modify, and manage user accounts
        </DashboardCard>
        <DashboardCard title="Department Management" link="/dashboard/admin/departments">
          Manage hospital departments and locations
        </DashboardCard>
        <DashboardCard title="Staff Management" link="/dashboard/admin/staff">
          Add and edit staff records
        </DashboardCard>
        <DashboardCard title="Medicine Inventory" link="/dashboard/admin/inventory">
          Track and manage medicine stock
        </DashboardCard>
        <DashboardCard title="System Reports" link="/dashboard/admin/reports">
          View appointment statistics and billing summaries
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
