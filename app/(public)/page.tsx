"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Building2, DollarSign } from "lucide-react";
import Departments from "@/components/(public)/departments/Departments";
import DoctorsDirectory from "@/components/(public)/doctors/DoctorsDirectory";
import { useState } from "react";
import { Ambulance, UserRound, Heart, FlaskConical } from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const stats = [
  { value: "24/7", label: "Emergency Care" },
  { value: "100+", label: "Specialists" },
  { value: "50k+", label: "Happy Patients" },
  { value: "15+", label: "Years Experience" },
];

const services = [
  {
    icon: <Ambulance className="w-8 h-8" />,
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response teams and state-of-the-art equipment.",
  },
  {
    icon: <UserRound className="w-8 h-8" />,
    title: "Primary Care",
    description: "Comprehensive primary healthcare services for all age groups with personalized attention.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Specialized Treatment",
    description: "Advanced specialized treatments across multiple medical disciplines.",
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "Laboratory Services",
    description: "Modern diagnostic laboratory with quick and accurate test results.",
  },
];

export default function Abcd() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="py-16 flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Quality Healthcare for a Better Life</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Providing exceptional medical care with state-of-the-art facilities and experienced professionals.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="w-full">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive healthcare solutions tailored to your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16">
        <h2 className="text-3xl font-bold mb-4">Find a Doctor</h2>
        <div className="bg-slate-50 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">Search our directory of experienced medical professionals.</p>
          <div className="mt-6 border-t pt-6">
            <DoctorsDirectory />
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-16">
        <Departments />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/20 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative hidden h-[300px] md:block bg-muted">
            <img
              src="/assets/hms_bw.jpg"
              alt="Hospital"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Our Hospital</h2>
            <p className="text-muted-foreground mb-6">
              With over 15 years of excellence in healthcare, we've been committed to providing exceptional medical
              services to our community. Our state-of-the-art facilities and dedicated team of professionals ensure the
              highest quality of patient care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-primary">✔</span> Expert Doctors
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✔</span> Modern Equipment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✔</span> 24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✔</span> Emergency Care
              </div>
            </div>
            <Button size="lg" asChild>
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-muted-foreground mb-8">
          Get in touch with our medical professionals for appointments and inquiries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">123 Medical Center Dr, Healthcare City</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contact@medicalhospital.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Textarea placeholder="Message" />
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="p-6">
  <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Dashboard Overview</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">1,482</div>
        <p className="text-xs text-muted-foreground">+2.5% from last month</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Appointments</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">248</div>
        <p className="text-xs text-muted-foreground">-1.2% from last week</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Departments</CardTitle>
        <Building2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">12</div>
        <p className="text-xs text-muted-foreground">+1 new this month</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$52,489</div>
        <p className="text-xs text-muted-foreground">+8.1% from last month</p>
      </CardContent>
    </Card>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Recent Appointments</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Department Overview</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  </div>
</div>; */
}
