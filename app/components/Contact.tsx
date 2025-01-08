import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-purple-400">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            Ready to transform your business with AI? Contact us today for a free consultation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400">vegapro.ai@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400">+91 9398635802</p>
                <p className="text-gray-400">+91 7337059915</p>
              </div>
            </div>
            {/* <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-400">123 AI Street, Tech City, TC 12345</p>
              </div>
            </div> */}
          </div>
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/40"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/40"
              />
            </div>
            <div>
              <textarea 
                rows={4} 
                placeholder="Your Message"
                className="w-full bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/40"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

