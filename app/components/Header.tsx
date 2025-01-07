'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg border-b border-white/10' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            VegaPro
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm text-gray-300 hover:text-white transition-colors">
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Developers
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Company
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Changelog
            </Link>
          </nav>
          <Button variant="secondary" className="bg-purple-600 hover:bg-purple-700 text-white border-0">
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  )
}

