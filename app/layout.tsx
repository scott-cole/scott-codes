import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const baseUrl = 'https://scott.codes'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Scott Cole | Senior Software Engineer - Scott.Codes',
    template: '%s | Scott.Codes',
  },
  description: 'Senior Software Engineer specializing in React performance optimization, codebase cleanup, architecture fixes, and design system improvements for modern web applications.',
  keywords: ['software engineer', 'react developer', 'performance optimization', 'codebase cleanup', 'typescript', 'next.js', 'freelance react developer', 'scott codes'],
  authors: [{ name: 'Scott Cole' }],
  creator: 'Scott Cole',
  publisher: 'Scott.Codes',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Scott.Codes',
    title: 'Scott Cole | Senior Software Engineer',
    description: 'I help companies improve their React applications through performance optimization, codebase cleanup, and architecture improvements.',
    images: [
      {
        url: '/images/avatar.webp',
        width: 1536,
        height: 1024,
        alt: 'Scott Cole - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Cole | Senior Software Engineer',
    description: 'I help companies improve their React applications through performance optimization, codebase cleanup, and architecture improvements.',
    images: ['/images/avatar.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: baseUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Scott Cole',
  url: baseUrl,
  image: `${baseUrl}/images/avatar.webp`,
  email: 'scott.codes.dev@gmail.com',
  telephone: '+447552831815',
  jobTitle: 'Senior Software Engineer',
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'Performance Optimization', 'Software Architecture'],
  worksFor: {
    '@type': 'Organization',
    name: 'Scott.Codes',
    url: baseUrl,
  },
  sameAs: [
    'https://github.com/scott-cole',
    'https://www.linkedin.com/in/scott-cole-1a051a3b5/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
          {children}
          <WhatsAppButton />
        </body>
    </html>
  )
}
