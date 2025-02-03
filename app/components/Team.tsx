"use client";

import React from "react";
import Slider from "react-slick";
import { Linkedin, Twitter, Github } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Siddharth Shukla",
    experience: "6+ yoe (ex-PayPal)",
    education: "BITS Pilani, IIM K",
    role: "Data Science Engineer",
    image: "/sid.jpg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Navneet Kumar",
    experience: "6+ yoe (ex-Amazon)",
    education: "BITS Pilani",
    role: "Machine Learning Engineer",
    image: "/navneet.jpg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sandeep Sharma",
    experience: "6+ yoe",
    education: "",
    role: "Lead Engineer at Cisco",
    image: "/sandeep.jpg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ashish Parmar",
    experience: "3+ yoe (ex-Microsoft)",
    education: "",
    role: "AI Researcher at xAI(an X company)",
    image: "/Ashish.jpg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Anurag Shukla",
    experience: "2+ yoe",
    education: "Founding engineer at Spilz",
    role: "Mobile App Developer",
    image: "/anurag.jpg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Saurabh Singh",
    experience: "2+ yoe (ex- ZS Associates)",
    education: "",
    role: "Product Development Engineer",
    image: "/saurabh.jpg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function TeamCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="core-team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xl font-medium text-purple-400">
              Core Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who we are</h2>
          <p className="text-gray-400">
            Our team of experienced professionals is dedicated to delivering
            cutting-edge AI solutions.
          </p>
        </div>
        <div>
          <Slider {...settings} className="team-carousel">
            {team.map((member, index) => (
              <div key={index} className="px-2">
                <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-2xl border border-purple-500/20 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="text-white hover:text-purple-400"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-white hover:text-purple-400"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.github}
                          className="text-white hover:text-purple-400"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-400">{member.role}</p>
                    <p className="text-purple-400">{member.experience}</p>
                    <p className="text-purple-400">{member.education}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
