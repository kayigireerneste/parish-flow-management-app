"use client"

import { motion } from "framer-motion"
import { Home, Calendar, Users, Bell, Settings, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { AnimatePresence } from "framer-motion"

interface AdminSidebarProps {
  parishName: string
  onLogout: () => void
  userRole?: "admin" | "parish"
}

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Calendar, label: "Activities", href: "/admin/activities" },
  { icon: Users, label: "Members", href: "/admin/members" },
  { icon: Bell, label: "Announcements", href: "/admin/announcements" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
]

export function AdminSidebar({ parishName, onLogout, userRole = "parish" }: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        exit={{ x: -280 }}
        transition={{ duration: 0.3 }}
        className="fixed md:static md:translate-x-0 left-0 top-0 h-screen w-64 bg-primary text-white z-40 flex flex-col overflow-y-auto md:overflow-y-visible"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/20">
          <h2 className="font-heading text-xl font-bold text-accent mb-1">ParishFlow</h2>
          <p className="text-sm text-white/70">{parishName}</p>
          <p className="text-xs text-white/60 mt-2 capitalize">{userRole} Account</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <item.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/20 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors group text-left">
            <Settings className="h-5 w-5 group-hover:text-accent transition-colors" />
            <span className="font-medium">Preferences</span>
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 hover:bg-red-500/20 transition-colors group text-left"
          >
            <LogOut className="h-5 w-5 group-hover:text-red-300 transition-colors" />
            <span className="font-medium">Logout</span>
          </motion.button>
        </div>
      </motion.aside>
    </>
  )
}
