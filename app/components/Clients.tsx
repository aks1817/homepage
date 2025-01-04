export default function Clients() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-gray-400 mb-4">Trusted by the world's most innovative teams</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 flex items-center justify-center">
              <div className="w-24 h-8 bg-gradient-to-r from-white/10 to-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

