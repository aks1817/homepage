"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const tabs = [
  { tabName: "About Us", link: "about-us" },
  { tabName: "Services", link: "services" },
  { tabName: "Our Expertise", link: "our-expertise" },
  { tabName: "Core Team", link: "core-team" },
  { tabName: "Contact Us", link: "contact-us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
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
            vegapro.ai
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
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6 " />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleScroll(tab.link)}
                className="block w-full text-left py-2 text-sm text-gray-300 hover:text-white transition-colors "
              >
                {tab.tabName}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
