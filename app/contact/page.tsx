import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Scott Cole for React consulting, performance optimization, and software engineering projects.',
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label">Contact</span>
            <h1 className="section-title">Get in Touch</h1>
          </div>
        </Reveal>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Reveal>
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">Let&apos;s Work Together</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I&apos;m available for freelance projects, consulting, and contract work. 
                With 10+ years of experience, I can help you build 
                scalable, performant web applications.
              </p>
              
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:scott.codes.dev@gmail.com" className="text-white hover:text-caribbean transition-colors text-lg font-medium">
                    scott.codes.dev@gmail.com
                  </a>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-1">Phone</h3>
                  <a href="tel:+447552831815" className="text-white hover:text-caribbean transition-colors text-lg font-medium">
                    07552 831815
                  </a>
                </div>

                <div className="card p-6">
                  <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/447552831815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-caribbean transition-colors text-lg font-medium"
                  >
                    Message on WhatsApp
                  </a>
                </div>

                <div className="card p-6">
                  <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-1">GitHub</h3>
                  <a
                    href="https://github.com/scott-cole"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-caribbean transition-colors text-lg font-medium"
                  >
                    github.com/scott-cole
                  </a>
                </div>
                <div className="card p-6">
                  <h3 className="text-sm font-mono text-caribbean uppercase tracking-wider mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/scott-cole-1a051a3b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-caribbean transition-colors text-lg font-medium"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={150}>
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-charcoal border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-caribbean focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-charcoal border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-caribbean focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-charcoal border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-caribbean focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full button button-primary shine-effect justify-center text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
