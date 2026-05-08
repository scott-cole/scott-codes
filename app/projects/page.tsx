import Navigation from '@/components/Navigation'

export default function Projects() {
  const projects = [
    {
      title: 'React Architecture Starter',
      description: 'Production-ready frontend architecture with scalable structure, API layer, auth, testing, and CI/CD',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/scott-cole/react-architecture-starter'
    },
    {
      title: 'Rockstar Games Projects',
      description: 'Contributed to AAA gaming platforms and web applications with focus on performance and user experience',
      technologies: ['React', 'Next.js', 'TypeScript'],
      link: '#'
    },
    {
      title: 'More Coming Soon',
      description: 'Case studies and projects from 10+ years of frontend development experience',
      technologies: ['React', 'Node.js', 'Cloud'],
      link: '#'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
