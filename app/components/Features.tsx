export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
          </h2>
          <p className="text-gray-400">
            Our AI-powered platform simplifies SEO while delivering professional-grade results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 p-8">
            <div className="w-16 h-16 bg-purple-500/20 rounded-lg mb-6" />
            <h3 className="text-xl font-semibold mb-2">SEO goal setting</h3>
            <p className="text-gray-400">
              Set and track your SEO goals with our intuitive dashboard. Our AI helps you establish realistic targets and monitors your progress.
            </p>
          </div>
          <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 p-8">
            <div className="w-16 h-16 bg-purple-500/20 rounded-lg mb-6" />
            <h3 className="text-xl font-semibold mb-2">User-friendly dashboard</h3>
            <p className="text-gray-400">
              Access all your SEO metrics in one place with our clean, intuitive dashboard designed for both beginners and experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

