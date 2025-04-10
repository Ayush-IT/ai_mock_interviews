

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const typingText = "Powered by Ayush Kumar";

const Loader = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(typingText.slice(0, i));
      i++;
      if (i > typingText.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-[#E0EAFC] to-[#CFDEF3] px-4">
      {/* Ripple Animation */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        <div className="absolute inset-0 animate-ping bg-white opacity-30 rounded-full"></div>
        <div className="absolute inset-2 animate-ping bg-white opacity-20 rounded-full"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-white shadow-xl">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
        </div>
      </div>

      {/* Slogan */}
      <p className="mt-5 text-center text-base sm:text-lg font-semibold text-gray-700">
        Empowering your interview prep 🚀
      </p>

      {/* Typing text */}
      <motion.p
        className="mt-3 text-sm sm:text-base text-gray-800 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {displayedText}
      </motion.p>
    </div>
  );
};

export default Loader;

