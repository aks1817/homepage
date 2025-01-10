import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20">
      <div className="container mx-auto px-6 gap-12 flex flex-row">
        <div className="grid items-center  md:w-1/2">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-purple-500/10 rounded-full py-2">
              <span className="text-xl font-medium text-purple-400">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transforming Businesses Through AI Innovation
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are a premier AI consulting firm dedicated to delivering
              state-of-the-art solutions that empower businesses to excel in
              their core operations. By leveraging the power of artificial
              intelligence, we enable organizations to enhance decision-making,
              optimize processes, and achieve sustainable growth. Our expertise
              helps you stay ahead in a rapidly evolving digital landscape,
              transforming challenges into opportunities for success
            </p>
            <div className="space-y-4">
              {[
                "100+ years of collective expertise",
                "Premium services, competitive rates",
                "Global Client Portfolio",
                "Industry Experts",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            {/* <Button className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>
        </div>
        <div className="relative  items-center w-1/2 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
          <img
            src="/AI-Image.jpg"
            alt="About Us"
            className="relative rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
