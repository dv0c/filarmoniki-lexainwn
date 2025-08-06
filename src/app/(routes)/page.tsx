"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface Login1Props {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const AUTH_KEY = "FilLexainwn@!";

const Page = ({
  heading = "Login",
  buttonText = "Login",
}: Login1Props) => {
  const [key, setKey] = useState("");
  const [isMount, setMount] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  // Check if already logged in
  useEffect(() => {
    const storedKey = localStorage.getItem("authKey");
    if (storedKey === AUTH_KEY) {
      router.push("/dashboard/students");
    }
  }, [router]);

  // Handle login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key === AUTH_KEY) {
      localStorage.setItem("authKey", key);
      router.push("/dashboard/students");
    } else {
      alert("Invalid key");
    }
  };

  return (
    <section className="bg-muted h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <a href="/dashboard">
            <Logo />
          </a>
          {isMount && (

            <form
              onSubmit={handleSubmit}
              className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
            >
              {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
              <Input
                type="password"
                placeholder="Key"
                className="text-sm"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                {buttonText}
              </Button>
            </form>
          )}
          {!isMount && (
            <div className="flex items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
