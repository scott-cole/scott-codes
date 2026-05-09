'use client'

import { useState } from 'react'
import Navigation from "@/components/Navigation"
import { ArrowUpRight, Zap, Code, Layers, Palette, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimizations",
      description: "I identify and resolve performance bottlenecks, optimize rendering, and improve Core Web Vitals for faster, more responsive applications."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "React Codebase Cleanup",
      description: "I refactor and modernize React codebases, eliminating technical debt, improving code quality, and implementing best practices."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Architecture Fixes",
      description: "I analyze and improve application architecture, implement better patterns, and ensure scalable, maintainable code structure."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design System Cleanup",
      description: "I help organize and optimize design systems, create reusable components, and ensure consistency across your UI library."
    }
  ]

  const projects = [
    {
      title: "E-commerce Platform Optimization",
      description: "Reduced load times by 60% through performance optimization and code splitting.",
      tags: ["Performance", "React", "Next.js"]
    },
    {
      title: "Legacy Codebase Refactor",
      description: "Modernized a 5-year-old React application with improved architecture and testability.",
      tags: ["Refactor", "Architecture", "TypeScript"]
    },
    {
      title: "Design System Implementation",
      description: "Built a comprehensive design system with 50+ reusable components.",
      tags: ["Design System", "Component Library", "Storybook"]
    },
    {
      title: "Cloud Migration",
      description: "Successfully migrated on-premise application to cloud infrastructure.",
      tags: ["Cloud", "DevOps", "AWS"]
    }
  ]

  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "I specialize in React-based web applications, performance optimization, codebase refactoring, and architecture improvements. I work with startups and established companies looking to improve their technical foundation."
    },
    {
      question: "How do you approach performance optimization?",
      answer: "I start with a comprehensive audit using tools like Lighthouse and WebPageTest. Then I implement targeted improvements including code splitting, lazy loading, caching strategies, and optimizing critical rendering paths."
    },
    {
      question: "Can you help with legacy codebases?",
      answer: "Absolutely. I have extensive experience working with and modernizing legacy codebases. I take a careful, incremental approach to ensure stability while improving code quality and performance."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Performance audits typically take 1-2 weeks, while major refactors can range from 4-12 weeks. I provide detailed estimates after an initial consultation."
    },
    {
      question: "Do you work with existing teams?",
      answer: "Yes, I often collaborate with in-house teams. I can provide guidance, code reviews, pair programming, and help establish best practices while working alongside your developers."
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                Software Engineer
              </h1>
              <p className="text-xl text-slate-300 max-w-xl">
                I help companies improve their React applications through performance optimization, codebase cleanup, and architecture improvements. 10+ years of building scalable software.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:mcscott01@hotmail.com"
                  className="button button-primary shine-effect"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/projects"
                  className="button button-outline"
                >
                  View work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                <img
                  src="/images/avatar.png"
                  alt="Scott Cole"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover border-4 border-slate-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-caribbean font-mono uppercase tracking-wider text-sm">Services</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4">What I Do</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-charcoal border border-slate-800 rounded-2xl p-6 hover:border-caribbean/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-midnight rounded-xl mb-6 group-hover:bg-caribbean/10 transition-colors">
                  <div className="text-caribbean group-hover:text-cyan-400 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-caribbean font-mono uppercase tracking-wider text-sm">Recent Work</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-charcoal border border-slate-800 rounded-2xl p-8 hover:border-caribbean/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-display font-semibold text-white group-hover:text-caribbean transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-caribbean group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-midnight text-caribbean text-sm font-mono rounded-full border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="button button-outline shine-effect inline-flex items-center gap-2"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-caribbean font-mono uppercase tracking-wider text-sm">About</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
                A Results-Driven Engineer
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I&apos;m a senior software engineer with over a decade of experience building web applications. I&apos;ve worked with everyone from early-stage startups to enterprise companies, helping them improve their codebases and deliver better products.
                </p>
                <p>
                  My passion lies in solving complex technical challenges—whether it&apos;s optimizing performance, refactoring legacy code, or architecting scalable systems. I believe great software isn&apos;t just about features; it&apos;s about maintainability, performance, and developer experience.
                </p>
                <p>
                  I pride myself on writing clean, well-tested code and helping teams establish best practices that scale. When I&apos;m not coding, I&apos;m mentoring developers and sharing knowledge with the community.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/avatar.png"
                alt="Scott Cole"
                className="w-64 h-64 rounded-2xl object-cover border-4 border-slate-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-caribbean font-mono uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-charcoal border border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-display font-medium text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-caribbean flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Improve Your Codebase?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help you optimize performance, clean up your code, and build better software.
          </p>
          <a
            href="mailto:mcscott01@hotmail.com"
            className="button button-primary shine-effect inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Scott Cole. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/scott-cole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-caribbean transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-caribbean transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:mcscott01@hotmail.com"
                className="text-slate-400 hover:text-caribbean transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
