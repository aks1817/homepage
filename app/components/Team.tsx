import { Linkedin, Twitter, Github } from 'lucide-react'

const team = [
  {
    name: "Siddharth Shukla",
    role: "Data Science Engineer",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Navneet Kumar",
    role: "Software Engineer",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Anurag Shukla",
    role: "Mobile App Developer",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "James Wilson",
    role: "AI Solutions Architect",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-purple-400">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our AI Experts
          </h2>
          <p className="text-gray-400">
            Our team of experienced professionals is dedicated to delivering 
            cutting-edge AI solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-purple-400">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-purple-400">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-purple-400">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

