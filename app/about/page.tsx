import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Experience</h2>
            <div className="space-y-6">              
              <div className="border-l-4 border-slate-300 pl-6">
                <h3 className="text-xl font-bold text-slate-900">Previous Experience</h3>
                <p className="text-slate-600">8+ years in various companies</p>
                <p className="text-slate-700 mt-2">
                  Extensive experience in building scalable web applications, design systems, and team leadership.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Frontend</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Performance Optimization</li>
                  <li>• State Management</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Architecture</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>• Scalable Systems</li>
                  <li>• Design Systems</li>
                  <li>• Code Quality</li>
                  <li>• Testing</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Leadership</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>• Team Management</li>
                  <li>• Code Reviews</li>
                  <li>• Mentoring</li>
                  <li>• Architecture</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Modern Tech</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>• Vite & Next.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• CI/CD</li>
                  <li>• Cloud Deploy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
