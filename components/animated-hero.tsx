"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface HeroSlide {
  title: string
  subtitle: string
  image: string
  tag: string
}

const heroSlides: HeroSlide[] = [
  {
    title: "Connect with Your Parish",
    subtitle: "Discover activities and events in your spiritual community",
    image: "/beautiful-church-interior-with-stained-glass-windo.jpg",
    tag: "Community",
  },
  {
    title: "Stay Updated on Events",
    subtitle: "Never miss important announcements and activities",
    image: "/church-congregation-gathering-for-prayer-and-celeb.jpg",
    tag: "Events",
  },
  {
    title: "Build Stronger Bonds",
    subtitle: "Join your parish community and grow together",
    image: "/diverse-religious-community-celebrating-together-i.jpg",
    tag: "Fellowship",
  },
  {
    title: "Explore Local Parishes",
    subtitle: "Find parishes near you and explore their ministries",
    image: "/peaceful-church-exterior-with-architecture-and-nat.jpg",
    tag: "Explore",
  },
]

export function AnimatedHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section id="home" className="relative h-[800px] md:h-[900px] overflow-hidden bg-primary">
      {/* Image background with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          {/* Animated tag */}
          <motion.div
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-block mb-6 px-4 py-2 bg-accent text-primary rounded-full font-heading font-semibold text-sm"
          >
            {slide.tag}
          </motion.div>

          {/* Animated title */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {slide.title}
          </motion.h1>

          {/* Animated subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            {slide.subtitle}
          </motion.p>

          {/* Call-to-action button with animation */}
          <motion.div
            key={`button-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Link href="/search">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-primary font-heading font-bold text-lg rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Explore Parishes
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 group">
        {/* Small Left Arrow */}
        <button
          onClick={() => {
            const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length
            handleDotClick(prev)
          }}
          className="text-white/50 hover:text-accent transition-colors p-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Vertical Bars */}
        <div className="flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-1 rounded-full transition-colors ${
                idx === currentSlide ? "bg-accent" : "bg-white/30 hover:bg-white/50"
              }`}
              animate={{
                height: idx === currentSlide ? 40 : 24,
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Small Right Arrow */}
        <button
          onClick={() => {
            const next = (currentSlide + 1) % heroSlides.length
            handleDotClick(next)
          }}
          className="text-white/50 hover:text-accent transition-colors p-2"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
