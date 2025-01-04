import { LineChart, Line, ResponsiveContainer } from 'recharts'

const data = [
  { value: 8 },
  { value: 12 },
  { value: 10 },
  { value: 15 },
  { value: 9 },
  { value: 11 },
  { value: 13 },
]

const keywords = [
  'online payment processing',
  'secure transactions',
  'online transaction platform',
  'online shopping payments',
  'e-commerce payment gateway',
  'b2b payment processing',
  'safe online payments',
]

export default function Dashboard() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 backdrop-blur-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-sm text-gray-400 mb-1">Site Overview</div>
                <div className="text-xs text-gray-500">www.website.com</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-gray-400">Jun 24</div>
                <div className="text-xs text-gray-500">Today</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Visibility</div>
                  <div className="text-3xl font-bold">10.15%</div>
                  <div className="text-sm text-green-500">+5.6%</div>
                </div>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8b5cf6" 
                        strokeWidth={2} 
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-4">Top Keywords</div>
                <div className="space-y-3">
                  {keywords.map((keyword, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div className="text-sm text-gray-300">{keyword}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

