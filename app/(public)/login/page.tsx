"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { loginUser } from "@/lib/api";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginUser(formData);
    } catch (error) {
      console.error("Login error:", error);
      alert(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-auto px-4 py-6">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardContent className="grid p-6 md:grid-cols-2 md:gap-4">
          <form className="p-4 my-auto md:p-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-sm text-muted-foreground">Login to your account</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Email or Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs underline-offset-2 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <Button type="submit" className="w-full py-3" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
          <div className="relative hidden md:flex items-center justify-center bg-muted">
            <img
              src="/assets/logo.svg"
              alt="Image"
              className="h-48 w-auto object-cover dark:brightness-[0.2] dark:grayscale rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
