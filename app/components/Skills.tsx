const skills = [
  { name: "Artificial Intelligence", percentage: 95 },
  { name: "Machine Learning", percentage: 90 },
  { name: "Mobile App Development", percentage: 85 },
  { name: "Natural Language Processing", percentage: 88 },
  { name: "Cloud Engineering", percentage: 92 },
  { name: "Data Analytics", percentage: 94 },
  { name: "Data Science", percentage: 94 },
  { name: "Product Development & Automation", percentage: 94 },
];

export default function Skills() {
  return (
    <section id="our-expertise" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xl font-medium text-purple-400">
              Our Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Expertise That Drives Results
          </h2>
          <p className="text-gray-400">
            Our team possesses deep expertise in the AI & Software domain,
            enabling us to deliver cutting-edge solutions for complex business
            challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-purple-400">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
