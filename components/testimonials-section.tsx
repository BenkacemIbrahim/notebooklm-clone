"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "QUORRA helped our team cut research prep time by more than half while keeping references organized.",
      author: "Product Lead, SaaS Startup",
      avatar: "/diverse-group.png",
    },
    {
      quote: "The audio summaries are excellent for quick context before deep reading.",
      author: "Graduate Student",
      avatar: "/podcast-setup.png",
    },
    {
      quote: "A clean, reliable workspace for turning messy inputs into a clear project narrative.",
      author: "Strategy Consultant",
      avatar: "/news-collage.png",
    },
    {
      quote:
        "I can ask questions against all of my source material and validate answers with citations instantly.",
      author: "Research Analyst",
      avatar: "/business-meeting-diversity.png",
    },
    {
      quote: "The UX is straightforward and works well across both desktop and mobile sessions.",
      author: "Operations Manager",
      avatar: "/diverse-group.png",
    },
    {
      quote: "This is the first AI research tool our whole team adopted without training.",
      author: "Customer Success Director",
      avatar: "/podcast-setup.png",
    },
    {
      quote: "The generated outlines are practical, editable, and easy to share with stakeholders.",
      author: "Founder, EdTech Company",
      avatar: "/news-collage.png",
    },
    {
      quote: "QUORRA is now our default workspace when preparing competitive intelligence reports.",
      author: "Business Development Team",
      avatar: "/business-meeting-diversity.png",
    },
    {
      quote: "Strong citation support gives us confidence in what we share externally.",
      author: "Content Marketing Manager",
      avatar: "/diverse-group.png",
    },
    {
      quote: "The product feels polished and intentionally designed, not just another demo.",
      author: "Design Engineer",
      avatar: "/podcast-setup.png",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (!isHovered) {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section id="testimonials" className="bg-gray-50 px-6 py-20 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-center mb-20">
          What people are saying
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden pb-4"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${index}`}
              className="bg-white rounded-lg p-16 shadow-sm w-[600px] h-[360px] flex-shrink-0 flex flex-col justify-between"
            >
              <p className="text-gray-700 text-2xl leading-relaxed flex-1 overflow-hidden">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-6 mt-10">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full"
                />
                <span className="text-2xl font-medium text-gray-900">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
