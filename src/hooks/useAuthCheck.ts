"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AUTH_KEY = "FilLexainwn@!";

export const useAuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const storedKey = localStorage.getItem("authKey");
    if (storedKey !== AUTH_KEY) {
      router.push("/dashboard/students"); // or your login route
    }
  }, [router]);
};
