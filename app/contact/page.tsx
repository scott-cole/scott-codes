import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Let's Work Together</h2>
            <p className="text-slate-600 mb-8">
              I'm available for freelance projects, consulting, and contract work. 
              With 10+ years of experience, I can help you build 
              scalable, performant web applications.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                <a href="mailto:mcscott01@hotmail.com" className="text-blue-600 hover:text-blue-700">
                  mcscott01@hotmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">GitHub</h3>
                <a
                  href="https://github.com/scott-cole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  github.com/scott-cole
                </a>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
