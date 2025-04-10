
"use client";

import { useEffect, useState } from "react";
import AuthForm from "@/components/AuthForm";
import Loader from "@/components/Loader";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. 2.5 seconds)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      <AuthForm type="sign-in" />
      <footer className="mt-6 text-sm text-gray-500 text-center">
      &copy; {new Date().getFullYear()} PrepWise. Developed by Ayush Kumar.
      </footer>
    </div>
  );
};

export default Page;

