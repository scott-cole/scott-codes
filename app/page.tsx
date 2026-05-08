import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold text-white mb-6">
            Senior Frontend Developer
          </h1>
          <p className="text-2xl text-slate-300 mb-8">
            10+ years of experience • 2 years at Rockstar Games
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Projects
            </button>
            <button className="border-2 border-slate-300 text-slate-300 hover:bg-slate-700 px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
