"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  { tabName: "About Us", link: "about-us" },
  { tabName: "Services", link: "services" },
  { tabName: "Our Expertise", link: "our-expertise" },
  { tabName: "Core Team", link: "core-team" },
  { tabName: "Contact Us", link: "contact-us" },
];

export default function Header() {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-lg border-b border-white/10"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          >
            VegaPro.AI
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleScroll(tab.link)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {tab.tabName}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
