"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Church, Facebook, Twitter, Ghost, Instagram, Mail, ChevronRight, ArrowUp, Pointer } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "Google Plus", icon: Ghost, href: "#", color: "hover:bg-red-500" },
    { name: "Pinterest", icon: Pointer, href: "#", color: "hover:bg-red-700" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:bg-pink-600" },
  ]

  const latestNews = [
    {
      title: "Lord of our life & our salvation",
      date: "12 May 2022",
      image: "/footer/footer_news1.webp"
    },
    {
      title: "Lord of our life & our salvation",
      date: "12 May 2022",
      image: "/footer/footer_news2.webp"
    }
  ]

  const usefulLinks = [
    { name: "Who we are?", href: "/about" },
    { name: "Support and FAQ's", href: "#" },
    { name: "Payments", href: "#" },
    { name: "Donations Terms", href: "#" },
    { name: "Volunteer", href: "#" },
  ]

  const instagramImages = [
    "/footer/footer_insta_img1.webp",
    "/footer/footer_insta_img2.webp",
    "/footer/footer_insta_img3.webp",
    "/footer/footer_insta_img4.webp",
    "/footer/footer_insta_img5.webp",
    "/footer/footer_insta_img6.webp",
  ]

  return (
    <footer className="relative bg-[#0f0f0f] text-white pt-16 pb-8 overflow-hidden">
      {/* Top Background Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/beautiful-church-interior-with-stained-glass-windo.jpg')] bg-cover bg-center grayscale brightness-0 invert"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-3 border-2 border-[#D4A843] rounded-sm transform group-hover:rotate-45 transition-transform duration-500">
              <Church className="h-10 w-10 text-white transform group-hover:-rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent italic">
                ParishFlow
              </span>
              <div className="h-px w-full bg-[#D4A843] mt-1 shadow-[0_0_8px_rgba(212,168,67,0.5)]"></div>
            </div>
          </Link>
        </div>

        {/* Social Media Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 rounded-sm overflow-hidden mb-20">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`flex items-center justify-center gap-3 py-4 md:py-6 bg-white/5 backdrop-blur-sm transition-all duration-300 ${social.color} hover:text-white group text-white/70`}
            >
              <social.icon className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Newsletter Column */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-bold font-serif mb-2">Newsletter</h3>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4A843]"></div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed italic">
              Nam nec tellus a odio tincidunt a auctor a nare odio sed. This is ParishFlow's version Offer.
            </p>
            <div className="space-y-4">
              <h4 className="text-[#D4A843] font-bold text-xs uppercase tracking-[0.2em]">Get Our Newsletter</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-black/40 border border-white/10 rounded-sm py-4 px-5 text-sm focus:outline-none focus:border-[#D4A843] transition-colors placeholder:text-white/30"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-[#D4A843] transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Latest News Column */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-bold font-serif mb-2">Latest News</h3>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4A843]"></div>
            </div>
            <div className="space-y-6">
              {latestNews.map((news, idx) => (
                <Link key={idx} href="#" className="flex gap-4 group">
                  <div className="h-16 w-20 shrink-0 overflow-hidden rounded-sm border border-white/10">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0" 
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-white/80 group-hover:text-[#D4A843] transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h4>
                    <span className="text-[10px] font-bold text-[#D4A843] uppercase tracking-wider mt-1">
                      {news.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links Column */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-bold font-serif mb-2">Useful Links</h3>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4A843]"></div>
            </div>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-3 text-white/60 hover:text-[#D4A843] transition-colors group">
                    <span className="text-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity">
                      👉
                    </span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Column */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-bold font-serif mb-2">Instagram</h3>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4A843]"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((img, idx) => (
                <div key={idx} className="aspect-square bg-white/5 rounded-sm overflow-hidden group cursor-pointer border border-white/5">
                  <img src={img} alt={`instagram-${idx}`} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
            © {currentYear} ParishFlow. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-[#D4A843] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#D4A843] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#D4A843] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[60] p-4 bg-primary text-white rounded-sm shadow-2xl hover:bg-[#D4A843] transition-all duration-300 group shadow-black/50 border border-white/10"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  )
}
