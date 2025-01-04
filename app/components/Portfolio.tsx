const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    category: 'Machine Learning',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'Predictive Maintenance System',
    category: 'Industrial AI',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'Natural Language Processing Tool',
    category: 'NLP',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'Computer Vision Solution',
    category: 'Computer Vision',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'Automated Decision System',
    category: 'Decision Intelligence',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'AI-Driven Customer Service',
    category: 'Customer Experience',
    image: '/placeholder.svg?height=400&width=600'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-purple-400">Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Showcasing Our Success Stories
          </h2>
          <p className="text-gray-400">
            Explore our portfolio of successful AI implementations across various industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/20"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-purple-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

