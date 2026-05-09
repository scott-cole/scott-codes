'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-display font-bold text-white hover:text-caribbean transition-colors">
            SC
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-300 hover:text-caribbean transition-colors font-medium">
              Home
            </Link>
            <Link href="/projects" className="text-slate-300 hover:text-caribbean transition-colors font-medium">
              Work
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-caribbean transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-caribbean transition-colors font-medium">
              Contact
            </Link>
            
            <a
              href="mailto:mcscott01@hotmail.com"
              className="button button-primary shine-effect flex items-center gap-2"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-slate-300 hover:text-caribbean transition-colors font-medium">
              Home
            </Link>
            <Link href="/projects" className="block text-slate-300 hover:text-caribbean transition-colors font-medium">
              Work
            </Link>
            <Link href="/about" className="block text-slate-300 hover:text-caribbean transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-slate-300 hover:text-caribbean transition-colors font-medium">
              Contact
            </Link>
            <a
              href="mailto:mcscott01@hotmail.com"
              className="button button-primary shine-effect inline-flex items-center gap-2"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
