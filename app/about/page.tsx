import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'About',
  description: 'Senior Software Engineer with 10+ years of experience in React, TypeScript, and web performance optimization.',
}

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label">About</span>
            <h1 className="section-title mb-8">About Me</h1>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I&apos;m a senior software engineer with over a decade of experience building web applications for startups and enterprise companies alike. I specialize in React, TypeScript, and performance optimization.
              </p>
              <p>
                I believe great code is clean, maintainable, and performant. Whether I&apos;m optimizing a critical user journey, refactoring a legacy codebase, or architecting a new system, I focus on delivering measurable improvements without compromising quality.
              </p>
              <p>
                When I&apos;m not writing code, I mentor developers, contribute to open source, and share knowledge with the engineering community through talks and blog posts.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/avatar.webp"
              alt="Scott Cole - Senior Software Engineer"
              width={320}
              height={320}
              className="w-72 h-72 rounded-2xl object-cover border-4 border-slate-700 shadow-2xl"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAACp0lEQVQoFSVSS0wTURSd9958a4dCC2mtLROMhaaCLoSFho1xpXFjjCujiXFj4t4FC1342Wnc6MaVBkiMiXEh0cjG30IJQUnQIqHUShumP9pCpzPTad/zPrjJzJu599x3zv2gbreLEBIYE8AQhk8Krk4bXFiUMRF5gDIB8TiYCGgG/wJDmHj2bt3Mtra3uo5FJFnRfLI/5I8cljWdUQo5AEaUUsYYQtiqFsrZZc9qhDRRZZ1qpb5LfIFgL/AEjDFfKMYYBTwGFnjbjVIls+TZraBbDWmCTxHCAWkn/89xPZBY3fjZqhUR5mARHtr1arkVUE47beLu2BXapgy7NnFrdmNb1g55Ha+aW1F7goSIUCWya6bTrGNCCMILP35XCoW19JrXdjWvqbfrXAbGrtWwakUuBhjcRhlcBGOoO97f22zYg+EQg1t3LCU8qIhYxoggBDAuCSpmXksmGE5RVVdyZjn7dzRplJots2IVtOV4IjFsRHCXMs+BBM4AQ4BWQeNVRVaGRoN9unBAf/klfSIZFRrFqcev86WaqsAAACnwGrCkYYHKErGs1tul3Oxy4cHM/IXJ5FA8HDSGVze2ns7Ob2yWJMUHo+AMcmAACshslm/enY7o4sVzJ6+dTk2mYl5P9I9pOY499zl9/fb0etnjkkC61ndQ8vfmS9trmcyp5MBA1EievSKMnWeRxNynxXbbhm4mR0ZGUikuiSeJsh47+ur9t2x2cz1fiRqJWGpcDgTffVz4uviLiEQS0dStG7rfx2DB9muWevovXb6aSh0ZHoqrekhVFaeDHr744DRtwzCePbk/MX4MlgjAMGa+nWCgrVwsmunv5uoirebezDw/PnHmzr1H+cIWhPYxkMOXD5Ttby90jBNyD91tthQgUuQ9CXvLz+8X/gMZxV0WVvxAnwAAAABJRU5ErkJggg=="
              sizes="(max-width: 1024px) 288px, 320px"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Experience</span>
            <h2 className="section-title">Where I&apos;ve Worked</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-caribbean"></div>
                <h3 className="text-xl font-display font-semibold text-white">Senior Software Engineer</h3>
              </div>
              <p className="text-caribbean font-mono text-sm mb-3">Scott.Codes &mdash; Present</p>
              <p className="text-slate-400 leading-relaxed">
                Helping companies optimize React applications, clean up codebases, and improve architecture. Delivering performance improvements, design system overhauls, and team mentoring.
              </p>
            </div>
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                <h3 className="text-xl font-display font-semibold text-white">Senior Frontend Engineer</h3>
              </div>
              <p className="text-slate-400 font-mono text-sm mb-3">Various Companies &mdash; 8+ Years</p>
              <p className="text-slate-400 leading-relaxed">
                Extensive experience building scalable web applications, leading frontend teams, and establishing engineering best practices across multiple organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Skills</span>
            <h2 className="section-title">Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Frontend</h3>
              <ul className="space-y-3">
                {['React & Next.js', 'TypeScript', 'Performance Optimization', 'State Management'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-caribbean"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Architecture</h3>
              <ul className="space-y-3">
                {['Scalable Systems', 'Design Systems', 'Code Quality', 'Testing'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-caribbean"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Leadership</h3>
              <ul className="space-y-3">
                {['Team Management', 'Code Reviews', 'Mentoring', 'Technical Strategy'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-caribbean"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Modern Tech</h3>
              <ul className="space-y-3">
                {['Vite & Next.js', 'Tailwind CSS', 'CI/CD', 'Cloud Deploy'].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-caribbean"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
