import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/scott-cole" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-slate-300 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-slate-300 hover:text-white transition-colors" />
              </a>
              <a href="mailto:mcscott01@hotmail.com">
                <Mail className="w-6 h-6 text-slate-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
