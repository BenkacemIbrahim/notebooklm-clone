"use client"

import { useEffect, useRef, useState } from "react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "It's possible that QUORRA podcast episode generation is touching on a whole new territory of really compelling LLM product formats. Feels reminiscent of ChatGPT. Maybe I'm overreacting.",
      author: "Andrej Karpathy on X",
      avatar: "/diverse-group.png",
    },
    {
      quote: "QUORRA Blew Our Mind",
      author: "HardFork",
      avatar: "/podcast-setup.png",
    },
    {
      quote: "This could be the next killer app in generative AI",
      author: "CNBC",
      avatar: "/news-collage.png",
    },
    {
      quote: "QUORRA is a powerful tool that can help you work more efficiently",
      author: "Harvard Business Review",
      avatar: "/business-meeting-diversity.png",
    },
    {
      quote: "The audio overview feature is revolutionary for understanding complex documents",
      author: "TechCrunch",
      avatar: "/diverse-group.png",
    },
    {
      quote: "Finally, an AI tool that actually understands context and nuance",
      author: "The Verge",
      avatar: "/podcast-setup.png",
    },
    {
      quote: "QUORRA has transformed how we approach research and analysis",
      author: "MIT Technology Review",
      avatar: "/news-collage.png",
    },
    {
      quote: "The most intuitive AI research assistant I've ever used",
      author: "Wired Magazine",
      avatar: "/business-meeting-diversity.png",
    },
    {
      quote: "Game-changing technology for students and researchers alike",
      author: "Nature Journal",
      avatar: "/diverse-group.png",
    },
    {
      quote: "QUORRA makes complex information accessible to everyone",
      author: "Scientific American",
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
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
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
    <section className="px-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-center mb-20">What people are saying</h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden pb-4"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-16 shadow-sm w-[600px] h-[360px] flex-shrink-0 flex flex-col justify-between"
            >
              <p className="text-gray-700 text-2xl leading-relaxed flex-1 overflow-hidden">"{testimonial.quote}"</p>
              <div className="flex items-center gap-6 mt-10">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full"
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
