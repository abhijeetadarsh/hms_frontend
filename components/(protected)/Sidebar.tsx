"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Calendar,
  UserSquare2,
  Building2,
  Receipt,
  FlaskRoundIcon as Flask,
  Microscope,
  FileBarChart,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/" },
  { icon: Users, name: "Patients", href: "/patients" },
  { icon: Calendar, name: "Appointments", href: "/appointments" },
  { icon: UserSquare2, name: "Doctors", href: "/doctors" },
  { icon: Building2, name: "Departments", href: "/departments" },
  { icon: Receipt, name: "Billing", href: "/billing" },
  { icon: Flask, name: "Pharmacy", href: "/pharmacy" },
  { icon: Microscope, name: "Laboratory", href: "/laboratory" },
  { icon: FileBarChart, name: "Reports", href: "/reports" },
  { icon: Settings, name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`${isOpen ? "w-64" : "w-20"} bg-white dark:bg-gray-800 h-screen transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4">
          <h1 className={`text-xl font-bold text-gray-800 dark:text-white ${isOpen ? "block" : "hidden"}`}>HMS</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md bg-gray-100 dark:bg-gray-700">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-2 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg ${pathname === item.href ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <item.icon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  <span className={`ml-3 text-gray-700 dark:text-gray-200 ${isOpen ? "block" : "hidden"}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
