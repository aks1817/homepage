import { Users, Award, Globe, Cpu } from 'lucide-react'

const facts = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Award, value: '50+', label: 'Industry Awards' },
  { icon: Globe, value: '30+', label: 'Countries' },
  { icon: Cpu, value: '1000+', label: 'AI Models Deployed' }
]

export default function Facts() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 p-8 text-center"
            >
              <fact.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{fact.value}</div>
              <div className="text-gray-400">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

