"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Boost your
          <br />
          Business with AI
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          We believe in driving innovation at the speed of thought
        </p>

        <Button
          onClick={() => handleScroll("contact-us")}
          variant="secondary"
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 h-auto"
        >
          Claim Your Free Consult
        </Button>
      </div>
    </section>
  );
}
