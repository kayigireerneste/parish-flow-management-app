"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Church, ChevronDown, Menu, X, Search, Calendar, Info, Settings, UserPlus, Newspaper, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  isLoggedIn?: boolean
  userRole?: "admin" | "parish"
  onLogout?: () => void
}

export function Header({ isLoggedIn = false, userRole, onLogout }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Explore", 
      id: "explore",
      subLinks: [
        { name: "Find Parishes", href: "/search", icon: Search },
        { name: "Upcoming Events", href: "/#events", icon: Calendar },
        { name: "Latest News", href: "/#news", icon: Newspaper },
      ]
    },
    { 
      name: "Resources", 
      id: "resources",
      subLinks: [
        { name: "How it Works", href: "/#how-it-works", icon: Settings },
        { name: "About Mission", href: "/about", icon: Info },
        { name: "Member Support", href: "/#news", icon: Heart },
      ]
    },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white py-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-xl bg-primary p-2 group-hover:bg-[#d4a843] transition-colors duration-300">
              <Church className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary leading-none tracking-tight">ParishFlow</span>
              <span className="text-[10px] text-[#d4a843] font-bold uppercase tracking-[0.2em]">Community Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group "
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.id || null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <button className="flex items-center gap-1.5 font-heading font-bold text-primary/70 hover:text-primary transition-colors text-sm uppercase tracking-widest py-2">
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link href={link.href} className="font-heading font-bold text-primary/70 hover:text-primary transition-colors text-sm uppercase tracking-widest py-2">
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <AnimatePresence>
                    {activeDropdown === link.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-4"
                      >
                        <div className="space-y-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/sub"
                            >
                              <div className="p-2 rounded-lg bg-gray-50 group-hover/sub:bg-primary/5 transition-colors">
                                <subLink.icon className="h-4 w-4 text-primary group-hover/sub:text-[#d4a843] transition-colors" />
                              </div>
                              <span className="text-sm font-bold text-gray-700 group-hover/sub:text-primary transition-colors">{subLink.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              {isLoggedIn ? (
                <button
                  onClick={onLogout}
                  className="px-6 py-2.5 font-heading font-bold text-primary hover:text-[#d4a843] transition text-sm uppercase tracking-widest border-2 border-primary/10 rounded-xl"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/admin/register"
                  className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-[#d4a843] transition-all shadow-xl shadow-primary/10 group active:scale-95"
                >
                  <UserPlus className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Register Parish
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-primary focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-4">
                  {link.subLinks ? (
                    <>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">{link.name}</div>
                      <div className="grid grid-cols-1 gap-4 pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 text-lg font-bold text-primary active:text-[#d4a843]"
                          >
                            <subLink.icon className="h-5 w-5 text-[#d4a843]" />
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-2xl font-bold text-primary active:text-[#d4a843]"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <Link
                  href="/admin/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg uppercase tracking-widest"
                >
                  <UserPlus className="h-5 w-5" />
                  Register Parish
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
