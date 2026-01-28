"use client"

import { Church, Globe, Heart, Shield, Users, Zap, Calendar, MapPin, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/about_Hero.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-[#D4A843] font-serif italic text-xl block mb-4">Our Journey</span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-8">
            Digitalizing Faith, <br />Preserving Community
          </h1>
          <div className="h-1 w-24 bg-[#D4A843] mx-auto mb-12"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-primary p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <Globe className="h-12 w-12 text-accent mb-6" />
                <h2 className="text-3xl font-bold font-serif mb-6 italic">Our Mission</h2>
                <p className="text-white/80 leading-relaxed text-lg italic">
                  "To empower spiritual communities with cutting-edge technology that simplifies administration 
                  and focuses on what truly matters: growing in faith and connecting with one another."
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors"></div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary font-serif mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                We envision a world where every parish, regardless of size or location, has access to the 
                digital tools necessary to thrive in the 21st century. ParishFlow is built to be the 
                heart of this transformation, ensuring no community is left behind in the digital age.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-4xl font-bold text-[#D4A843] mb-1 italic">500+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Planned Parishes</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-1 italic">100k+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Faith Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary font-serif tracking-tight">Our Core Values</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto italic text-lg">
              The principles that guide every feature we build and every community we support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Transparency", 
                desc: "Every transaction and record is handled with absolute clarity and security." 
              },
              { 
                icon: Users, 
                title: "Accessibility", 
                desc: "Designing tools that are easy to use for everyone in the congregation." 
              },
              { 
                icon: Church, 
                title: "Traditionalism", 
                desc: "Respecting the deep-rooted traditions of the parish while embracing the future." 
              },
              { 
                icon: Heart, 
                title: "Growth", 
                desc: "Providing insights that help parishes grow spiritually and communally." 
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-black/2 border border-gray-100 hover:border-[#D4A843]/30 transition-all text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4A843]/10 transition-colors">
                  {idx === 3 ? <Heart className="h-8 w-8 text-[#D4A843]" /> : <value.icon className="h-8 w-8 text-[#D4A843]" />}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:order-2 lg:w-1/2">
              <span className="text-[#D4A843] font-serif italic text-xl block mb-2">The Narrative</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-tight mb-8">
                The Story Behind <br />ParishFlow
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed italic">
                <p>
                  ParishFlow began as a project to help one local church manage their weekly calendars. 
                  However, we quickly realized that the challenges were universal: data silos, 
                  manual record-keeping, and disconnected community members.
                </p>
                <p>
                  Today, we are building a platform that goes beyond software. We are building 
                  a bridge that connects the physical doors of the parish to the digital world of the 
                  community members. 
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-primary rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <img 
                  src="/about.jpeg" 
                  alt="Our Story Illustration" 
                  className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A843] rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary font-serif mb-8 italic">Interested in joining our journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/search" 
              className="px-10 py-4 bg-primary text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-[#D4A843] transition-all"
            >
              Explore Parishes
            </Link>
            <Link 
              href="mailto:info@parishflow.com" 
              className="px-10 py-4 border-2 border-primary text-primary rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
