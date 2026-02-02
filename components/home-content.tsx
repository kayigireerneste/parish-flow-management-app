"use client"

import { useState, useEffect } from "react"

import { SearchBar } from "@/components/search-bar"
import { AnimatedHero } from "@/components/animated-hero"
import { EventsSermonsSection } from "@/components/events-sermons-section"
import { Church, MapPin, Calendar, Users, Heart, Globe, User, ChevronLeft, ChevronRight, PlusCircle, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function HomeContent() {
  const router = useRouter()
  const [currentNews, setCurrentNews] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Merry Jain",
      role: "Church Member",
      avatar: "/avatar/avatar1.jpeg",
      text: (<>Church provides tools, teams, and times to help individuals – and the church family as a whole – <span className="text-[#D4A843]">pray</span>. Prayer is vitally important to your relationship with <span className="text-[#D4A843]">God</span>. We believe that actions fueled and guided by the <span className="text-[#D4A843]">Holy Spirit</span> in accordance to God's.</>),
      church: "Grace Community"
    },
    {
      name: "David Chen",
      role: "Youth Leader",
      avatar: "/avatar/avatar2.jpeg",
      text: (<>Our <span className="text-[#D4A843]">youth programs</span> have flourished since we started using ParishFlow. Connecting with the next generation is essential for the <span className="text-[#D4A843]">Kingdom</span>. The platform makes it so easy to organize <span className="text-[#D4A843]">community events</span> and stay in touch.</>),
      church: "Holy Trinity"
    },
    {
      name: "Sarah Williams",
      role: "Volunteer",
      avatar: "/avatar/avatar3.jpeg",
      text: (<>Being a <span className="text-[#D4A843]">volunteer</span> has never been more rewarding. The <span className="text-[#D4A843]">transparency</span> and ease of communication allows us to serve the <span className="text-[#D4A843]">poor and needy</span> with more focus and love. It's a true blessing.</>),
      church: "St. Michael's"
    }
  ]

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const newsItems = [
    {
      date: "Jan 15, 2026",
      title: "New Parish Portal Features Launched",
      excerpt: "We've added exciting new features to help parishes manage their activities more effectively.",
    },
    {
      date: "Jan 10, 2026",
      title: "Community Reaches 50 Parishes",
      excerpt: "ParishFlow has officially partnered with 50 parishes across the region.",
    },
    {
      date: "Jan 5, 2026",
      title: "Mobile App Coming Soon",
      excerpt: "Get ready to access parishes on the go with our upcoming mobile application.",
    },
  ]

  const nextNews = () => setCurrentNews((prev: number) => (prev + 1) % newsItems.length)
  const prevNews = () => setCurrentNews((prev: number) => (prev - 1 + newsItems.length) % newsItems.length)

  const handleSearch = (parishName: string, location: string) => {
    const params = new URLSearchParams()
    if (parishName) params.append("parish", parishName)
    if (location) params.append("location", location)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <>
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Events & Sermons Section */}
      <EventsSermonsSection />

      {/* Unified Search & Most Viewed Parishes Section */}
      <motion.section 
        id="parishes" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.8 }
          }
        }}
        className="relative py-20 md:py-28 bg-gray-50/20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar Integration */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="shadow-2xl shadow-black/5 rounded-2xl">
              <SearchBar size="large" onSearch={handleSearch} />
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-tight">
              Most Viewed Parishes
            </h2>
            <div className="h-0.5 w-16 bg-[#D4A843] mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: "St. Michael's Parish",
                location: "Downtown District",
                address: "123 Main Street",
                phone: "+1 (555) 123-4567",
                website: "www.stmichaels.com",
                nextService: "Sunday Mass - Tomorrow at 10:00 AM",
                tags: ["Sunday Mass", "Bible Study", "Youth Group"],
                status: "Active"
              },
              {
                name: "Holy Trinity Church",
                location: "Westside",
                address: "456 Oak Avenue",
                phone: "+1 (555) 234-5678",
                website: "www.holytrinity.com",
                nextService: "Community Service - Saturday at 9:00 AM",
                tags: ["Sunday Mass", "Confession", "Community Service"],
                status: "Active"
              }
            ].map((parish, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-xl shadow-black/3 border border-gray-100 flex flex-col relative group hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
              >
                {/* Status Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest">{parish.status}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4 font-serif group-hover:text-[#D4A843] transition-colors leading-tight">
                    {parish.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    {[
                      { icon: MapPin, label: "Location", val: parish.location },
                      { icon: Church, label: "Address", val: parish.address },
                      { icon: Calendar, label: "Phone", val: parish.phone },
                      { icon: Users, label: "Website", val: parish.website },
                    ].map((info, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2.5">
                        <info.icon className="h-3.5 w-3.5 text-[#D4A843] shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                          <p className="text-xs border-b border-gray-50 pb-0.5 truncate">{info.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Next Service Banner */}
                  <div className="bg-primary/5 rounded-xl p-3 mb-5 border-l-2 border-[#D4A843] flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-xs font-medium text-primary italic truncate">
                      {parish.nextService}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {parish.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[9px] font-bold uppercase tracking-widest rounded-md group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/parish/${idx + 1}`}
                  className="w-full bg-primary text-white py-2.5 rounded-xl font-bold text-[11px] tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#D4A843] transition-all"
                >
                  View Portal
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How ParishFlow Works - Redesigned Section */}
      <motion.section 
        id="how-it-works" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-[#0f0f0f] py-0 overflow-hidden text-white border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Column: Image */}
            <motion.div 
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
              }}
              className="lg:w-1/2 relative min-h-[400px] lg:min-h-[550px]"
            >
              <img 
                src="/photo-1438032005730-c779502df39b.avif" 
                alt="Atmospheric Church Architecture" 
                className="absolute inset-0 w-full h-full object-cover grayscale-20 brightness-75"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent lg:from-transparent lg:to-[#0f0f0f]/50"></div>
              {/* Decorative corner */}
              <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-[#D4A843]/30 pointer-events-none"></div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.1 } }
              }}
              className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#0f0f0f]"
            >
              <div className="mb-10">
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="text-[#D4A843] font-serif italic text-xl lg:text-2xl mb-2 block"
                >
                  Connect & Grow
                </motion.span>
                <motion.h2 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-white leading-tight"
                >
                  How ParishFlow <br className="hidden md:block" />Works
                </motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-0.5 bg-[#D4A843] mb-8"
                ></motion.div>
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="text-gray-400 text-base leading-relaxed max-w-xl"
                >
                  Everything you need to connect with your parish community, stay updated on events, 
                  and grow together in faith.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  {
                    icon: Users,
                    title: "Find Parishes",
                    description: "Search for parishes by name and location in your area",
                  },
                  {
                    icon: Calendar,
                    title: "View Activities",
                    description: "Browse weekly activities, events, and announcements",
                  },
                  {
                    icon: Church,
                    title: "Stay Connected",
                    description: "Keep up with parish news and community updates",
                  },
                  {
                    icon: MapPin,
                    title: "Get Directions",
                    description: "Easy access to parish location and contact information",
                  },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[#D4A843] group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#D4A843] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    {/* Double underline decoration */}
                    <div className="relative mb-3">
                      <div className="h-px w-full bg-white/10"></div>
                      <div className="absolute top-0 left-0 h-px w-1/3 bg-[#D4A843] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
        className="py-20 md:py-28 bg-primary text-white overflow-hidden"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-heading text-3xl md:text-4xl font-bold mb-6"
          >
            Are You a Parish?
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } }
            }}
            className="text-lg text-white/90 mb-8"
          >
            Manage your parish activities, connect with your community, and stay organized with our admin dashboard.
          </motion.p>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
            }}
            className="text-sm text-white/70 mb-8"
          >
            Contact us to register your parish and access the admin portal.
          </motion.p>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="mailto:info@parishflow.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-primary font-heading font-semibold rounded-lg hover:bg-opacity-90 transition shadow-lg shadow-black/10"
            >
              Register Your Parish
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/admin/login"
                className="px-8 py-3 border-2 border-white text-white font-heading font-semibold rounded-lg hover:bg-white/10 transition block shadow-lg shadow-black/10"
              >
                Admin Login
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Background Decoration */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"
        ></motion.div>
      </motion.section>

      {/* About Us Preview Section */}
      <motion.section 
        id="about" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="py-24 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: Content */}
            <motion.div 
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="lg:w-1/2"
            >
              <span className="text-[#D4A843] font-serif italic text-xl block mb-2">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-tight mb-8">
                Empowering Faith <br />Communities Digitally
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                ParishFlow was born from a simple yet profound vision: to bridge the gap between traditional 
                parish management and the digital needs of a modern congregation. We provide the tools 
                to connect, grow, and serve together.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Centralized Parish Management",
                  "Simplified Community Engagement",
                  "Secure & Transparent Administration"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: idx * 0.1 } } }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#D4A843]/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A843]"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } } }}
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-[#D4A843] transition-all group shadow-xl shadow-primary/10"
                >
                  Learn More About Us
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual */}
            <motion.div 
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/about.jpeg"
                  alt="Modern Church Community"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D4A843]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 border-2 border-[#D4A843]/20 rounded-2xl rotate-12"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="bg-white border-y border-border"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 py-16">
            {/* Christians */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center justify-center p-8 border-r border-b md:border-b-0 border-border"
            >
              <Heart className="h-8 w-8 text-[#D4A843] mb-4 fill-current" />
              <div className="text-4xl md:text-5xl font-bold text-[#1a5fb4] mb-2">2540 +</div>
              <div className="text-[#D4A843] font-heading font-bold text-xs tracking-widest uppercase text-center">Christians</div>
            </motion.div>
            {/* Religious Churches */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border"
            >
              <Globe className="h-8 w-8 text-[#D4A843] mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-[#1a5fb4] mb-2">7325 +</div>
              <div className="text-[#D4A843] font-heading font-bold text-xs tracking-widest uppercase text-center">Religious Churches</div>
            </motion.div>
            {/* Parishes */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center justify-center p-8 border-r md:border-r border-border"
            >
              <User className="h-8 w-8 text-[#D4A843] mb-4 fill-current" />
              <div className="text-4xl md:text-5xl font-bold text-[#1a5fb4] mb-2">1924 +</div>
              <div className="text-[#D4A843] font-heading font-bold text-xs tracking-widest uppercase text-center">Parishes</div>
            </motion.div>
            {/* Priests */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center justify-center p-8"
            >
              <Users className="h-8 w-8 text-[#D4A843] mb-4 fill-current" />
              <div className="text-4xl md:text-5xl font-bold text-[#1a5fb4] mb-2">4275 +</div>
              <div className="text-[#D4A843] font-heading font-bold text-xs tracking-widest uppercase text-center">Priests</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="py-24 bg-[#F6F7F8] relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Speech Bubble Slider */}
            <motion.div 
              variants={{
                hidden: { scale: 0.95, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "backOut" } }
              }}
              className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-black/3 border border-gray-100 relative mb-12 min-h-[300px] flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic font-serif text-center md:text-left">
                    " <span className="text-[#D4A843] font-bold not-italic">{testimonials[currentTestimonial].church}</span> {testimonials[currentTestimonial].text} "
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Bubble Tail */}
              <div className="absolute -bottom-8 left-12 w-0 h-0 border-l-30 border-l-transparent border-t-35 border-t-white border-r-10 border-r-transparent"></div>
            </motion.div>

            {/* Author & Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-6"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden ring-1 ring-gray-100">
                      <img 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-400 text-sm">- by</span>
                      <h4 className="text-[#D4A843] font-bold text-lg tracking-wide">{testimonials[currentTestimonial].name}</h4>
                      <span className="text-gray-400 text-sm">({testimonials[currentTestimonial].role})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {[
                        { icon: Facebook, color: "hover:text-blue-600" },
                        { icon: Twitter, color: "hover:text-sky-500" },
                        { icon: Share2, color: "hover:text-red-600" }, 
                        { icon: Linkedin, color: "hover:text-blue-700" }
                      ].map((social, sIdx) => (
                        <a 
                          key={sIdx} 
                          href="#" 
                          className={`text-[#1E3A5F] transition-colors ${social.color}`}
                        >
                          <social.icon className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-lg transition-all shadow-sm active:scale-95"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-lg transition-all shadow-sm active:scale-95"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* News/Updates Section - Redesigned Interactive Slider */}
      <motion.section 
        id="news" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
        className="relative min-h-[400px] flex items-center overflow-hidden"
      >
        {/* Background with cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/news-bg.png" 
            alt="Parish News Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Circular Branding */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -15 },
                visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "backOut" } }
              }}
              className="hidden lg:flex shrink-0"
            >
              <div className="w-56 h-56 rounded-full border-2 border-[#D4A843]/60 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-full border border-[#D4A843] flex items-center justify-center bg-black/20">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <Church className="h-16 w-16 text-white" strokeWidth={1} />
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A843] rounded-full flex items-center justify-center"
                      >
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </motion.div>
                    </div>
                    {/* Minimalist Logo Decoration */}
                    <div className="mt-2 flex gap-1">
                      <div className="w-8 h-px bg-[#D4A843]"></div>
                      <div className="w-2 h-px bg-white"></div>
                      <div className="w-8 h-px bg-[#D4A843]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center: Content Slider */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
              }}
              className="flex-1 max-w-2xl text-center md:text-left py-12"
            >
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <span className="text-[#D4A843] font-serif italic text-3xl lg:text-4xl">
                  Latest News
                </span>
                <PlusCircle className="h-6 w-6 text-white/50" strokeWidth={1.5} />
              </div>

              <div className="relative h-64 md:h-56">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNews}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <h3 className="text-[#D4A843] text-xl md:text-2xl font-bold mb-3 italic leading-relaxed">
                      " {newsItems[currentNews].title} "
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed max-w-xl">
                      {newsItems[currentNews].excerpt}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="text-gray-400 text-xs md:text-sm italic flex items-center gap-3">
                        <span>Article Date : </span>
                        <span className="text-white font-bold not-italic">{newsItems[currentNews].date}</span>
                      </div>
                      <Link 
                        href="/news" 
                        className="inline-flex items-center text-[#D4A843] text-sm font-bold uppercase tracking-wider hover:text-white transition-colors group"
                      >
                        Read More
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right: Navigation Controls */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5 } }
              }}
              className="flex items-center gap-6 shrink-0"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-px bg-white/20"></div>
                <div className="flex flex-col gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.2, color: "#D4A843" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevNews}
                    className="text-white/40 transition-colors"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </motion.button>
                  <div className="w-px h-6 bg-[#D4A843] mx-auto"></div>
                  <motion.button 
                    whileHover={{ scale: 1.2, color: "#D4A843" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextNews}
                    className="text-white/40 transition-colors"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </motion.button>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </>
  )
}
