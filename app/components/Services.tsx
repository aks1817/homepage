import { Brain, Cpu, BarChart, Shield, Globe, Code } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'Develop comprehensive AI strategies aligned with your business objectives.'
  },
  {
    icon: Cpu,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models to extract valuable insights from your data.'
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business intelligence.'
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Implement robust security measures for AI systems.'
  },
  {
    icon: Globe,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions.'
  },
  {
    icon: Code,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into existing systems and workflows.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-purple-400">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive AI Solutions for Your Business
          </h2>
          <p className="text-gray-400">
            We offer a wide range of AI consulting services to help businesses harness 
            the power of artificial intelligence and stay ahead of the competition.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-colors"
            >
              <service.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

