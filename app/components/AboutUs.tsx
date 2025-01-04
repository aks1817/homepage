import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutUs() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-purple-400">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transforming Businesses Through AI Innovation
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are a leading AI consulting firm specializing in developing cutting-edge solutions 
              that help businesses optimize their operations, enhance decision-making processes, 
              and drive sustainable growth through artificial intelligence.
            </p>
            <div className="space-y-4">
              {['10+ Years of Excellence', 'Global Client Portfolio', 'Industry-Leading Expertise'].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <Button className="group">
              Learn More 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
            <img 
              src="/placeholder.svg?height=400&width=600" 
              alt="About Us" 
              className="relative rounded-2xl border border-purple-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

