import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Scott Cole | Software Engineer',
  description: 'Senior Software Engineer specializing in performance enhancements, React codebase cleanup, architecture fixes, and design system improvements.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
