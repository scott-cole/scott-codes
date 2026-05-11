'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Reveal from '@/components/Reveal'
import { X, ExternalLink } from 'lucide-react'

interface CaseStudy {
  title: string
  description: string
  technologies: string[]
  link: string
  caseStudy: {
    overview: string
    problem: string
    approach: string
    impact: string[]
  }
}

const projects: CaseStudy[] = [
  {
    title: 'React Architecture Starter',
    description: 'Production-ready frontend architecture with scalable structure, API layer, auth, testing, and CI/CD',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/scott-cole/react-architecture-starter',
    caseStudy: {
      overview: 'A production-ready React starter kit that eliminates setup overhead and enforces best practices from day one.',
      problem: 'Every new React project starts with the same boilerplate — folder structure, API layer, authentication, testing config, and CI/CD. Teams waste days or weeks reinventing the wheel instead of building features. Inconsistent project setup also leads to maintenance headaches down the line.',
      approach: 'I built a comprehensive starter that bakes in years of best practices. The architecture uses a feature-based folder structure that scales with your team. The API layer handles errors, loading states, and caching out of the box. Auth is pre-configured with refresh token rotation. Testing setup includes Vitest with React Testing Library, plus Storybook for component development. GitHub Actions CI/CD runs linting, type checking, and tests on every PR.',
      impact: [
        'Reduces new project setup time from days to hours',
        'Enforces consistent architecture across teams',
        'Built-in best practices for API handling, auth, and testing',
        'Feature-based structure scales from startup to enterprise',
      ],
    },
  },
  {
    title: 'React PT',
    description: 'A React performance tester — mini SaaS service for measuring and optimizing React application performance',
    technologies: ['React', 'TypeScript', 'Next.js'],
    link: 'https://github.com/scott-cole/react-pt',
    caseStudy: {
      overview: 'A lightweight SaaS tool that helps developers measure, track, and improve React application performance.',
      problem: 'React performance issues are hard to diagnose and easy to ignore until they impact users. Most teams lack a dedicated tool for continuously measuring render times, re-render frequencies, and component-level performance. Existing tools are either too complex or don\'t provide actionable recommendations.',
      approach: 'Built a focused SaaS service that runs performance audits against React applications and produces clear, actionable reports. The tool tracks key metrics like render times, re-render counts, and component mount durations. Results are presented with prioritized recommendations so teams know exactly what to fix first. The service is designed to integrate into existing development workflows with minimal friction.',
      impact: [
        'Provides clear, actionable performance insights',
        'Tracks performance over time to catch regressions early',
        'Prioritizes fixes by impact so teams focus on what matters',
        'Lightweight integration that doesn\'t slow down development',
      ],
    },
  },
  {
    title: 'TL Roofing',
    description: 'Small business roofing website built with modern web technologies and a focus on clean UX',
    technologies: ['React', 'TypeScript', 'Next.js'],
    link: 'https://github.com/scott-cole/tl-roofing',
    caseStudy: {
      overview: 'A modern, performant website for a local roofing business, designed to generate leads and showcase their work.',
      problem: 'The business relied on word-of-mouth and had no real online presence. Their potential customers couldn\'t find them online, and when they did, there was no professional site to build trust or showcase their services. They needed a fast, mobile-friendly website that would rank well locally and convert visitors into leads.',
      approach: 'Built a focused, content-driven website that puts services and trust signals front and centre. The design is clean and professional with an emphasis on fast load times and mobile usability. Contact forms are streamlined to convert visitors with minimal friction. SEO best practices were baked in from the start — proper semantic HTML, meta tags, structured data, and performance optimisation to help with local search rankings.',
      impact: [
        'Established a professional online presence for the business',
        'Fast load times and mobile-first design improve user experience',
        'SEO-optimised structure helps with local search visibility',
        'Clean contact flow makes it easy for customers to get in touch',
      ],
    },
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<CaseStudy | null>(null)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">Portfolio</span>
            <h1 className="section-title">Projects</h1>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="card p-6 flex flex-col">
              <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-caribbean transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">{tech}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  onClick={() => setSelected(project)}
                  className="text-caribbean hover:text-blue-400 font-medium transition-colors text-sm"
                >
                  Read Case Study &rarr;
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-charcoal border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="section-label">Case Study</span>
            <h2 className="text-3xl font-display font-bold text-white mt-2 mb-6">{selected.title}</h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">{selected.caseStudy.overview}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-3">The Problem</h3>
                <p className="text-slate-400 leading-relaxed">{selected.caseStudy.problem}</p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-3">The Approach</h3>
                <p className="text-slate-400 leading-relaxed">{selected.caseStudy.approach}</p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-3">Impact</h3>
                <ul className="space-y-3">
                  {selected.caseStudy.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-caribbean mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.technologies.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary shine-effect inline-flex items-center gap-2"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
