import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-8">
          <span className="text-xs font-medium text-purple-400">NEW</span>
          <span className="ml-2 text-xs text-gray-400">Latest integration just arrived</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Boost your<br />Business with AI
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        We believe in driving innovation at the speed of thought
        </p>
        <Button className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 h-auto">
          Start for free
        </Button>
      </div>
    </section>
  )
}

