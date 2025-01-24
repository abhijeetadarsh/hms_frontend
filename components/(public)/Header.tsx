"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
    { href: "/#departments", label: "Departments" },
    { href: "/#doctors", label: "Doctors" },
    { href: "/#services", label: "Services" },
  ];

  return (
    <header className="bg-white border-b relative">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left section with logo and desktop navigation */}
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <img src="/assets/logo.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button className="lg:hidden" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 fill-current" /> : <Menu className="h-6 w-6 fill-current" />}
          </Button>

          {/* Right section with auth buttons and mobile menu toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="text-sm font-medium">
              <Link href="/register">Register</Link>
            </Button>
            <Button variant="outline" asChild className="text-sm font-medium">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Vertical Dropdown */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} pt-4 pb-3 border-t mt-3`}>
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="text-sm font-medium">
              <Link href="/register" onClick={toggleMenu}>Register</Link>
            </Button>
            <Button variant="outline" asChild className="text-sm font-medium">
              <Link href="/login" onClick={toggleMenu}>Login</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
