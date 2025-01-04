const testimonials = [
  {
    content: "The AI solutions provided by this team have revolutionized our business processes. Highly recommended!",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    content: "Their expertise in machine learning helped us unlock insights we never thought possible.",
    author: "Michael Chen",
    role: "CEO, DataDrive",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    content: "Outstanding service and cutting-edge AI solutions that delivered real business value.",
    author: "Emily Rodriguez",
    role: "Director of Innovation, FutureTech",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-purple-400">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 p-8"
            >
              <div className="space-y-6">
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

