"use client"

import { Calendar, MapPin, User, Mic2, Video, CloudDownload, FileText, Share2, Play } from "lucide-react"
import { motion } from "framer-motion"

export function EventsSermonsSection() {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <motion.section 
      id="events" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="relative -mt-16 md:-mt-20 z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20 font-sans"
    >
      <div className="flex flex-col lg:flex-row gap-0 lg:items-start">
        {/* Next Upcoming Event - Left Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            transition: { duration: 0.3 }
          }}
          className="flex-1 bg-white p-8 md:p-10 flex relative shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10 transition-shadow"
        >
          {/* Date Badge - Left Edge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#1a5fb4] text-white py-4 px-4 min-w-[65px] z-10 shadow-md"
          >
            <span className="text-3xl font-bold leading-none">14</span>
            <div className="text-[10px] uppercase tracking-wider mt-1 flex gap-1">
              <span>May</span>
            </div>
            <span className="text-[10px] tracking-wider">2022</span>
            {/* Triangle pointer */}
            <div className="absolute -bottom-3 left-0 w-0 h-0 border-t-14 border-t-[#1a5fb4] border-r-65 border-r-transparent"></div>
          </motion.div>

          <div className="flex-1 ml-16 md:ml-20">
            {/* Header Row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Calendar Icon Box */}
                <motion.div 
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                  className="text-[#d4a843]"
                >
                  <Calendar className="h-8 w-8" strokeWidth={1.5} />
                </motion.div>
                <div className="relative">
                  <h3 className="text-xl text-[#1a5fb4] font-bold tracking-tight">
                    Next Upcoming Event
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-[#d4a843]/50"></div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "66.66%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-3 left-0 h-[2px] bg-[#d4a843]"
                  ></motion.div>
                </div>
              </div>

              {/* Time Tag */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center bg-[#d4a843] text-white pl-6 pr-5 py-2 rounded-full font-bold text-xs shadow-sm cursor-default"
              >
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="mr-2 h-1.5 w-1.5 rounded-full bg-white"
                ></motion.span>
                @ 8 to 11 AM
              </motion.div>
            </div>

            {/* Event Title */}
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-5 leading-tight">
              Sharing Our Faith & Love To Children
            </h2>

            {/* Event Details */}
            <div className="space-y-3 mb-8 text-[#666]">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#d4a843]" />
                <span className="italic text-base">
                  - by Pastor : <span className="text-[#1a5fb4] font-bold not-italic underline decoration-1 underline-offset-4">Clinith Luis</span>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#d4a843] mt-1 shrink-0" />
                <span className="italic text-base leading-relaxed">
                  Postal Address : <span className="not-italic">PO Box 16122 Collins Street, Victoria 8007 Australia</span>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#1a5fb4", color: "#ffffff", borderColor: "#1a5fb4" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full px-10 py-3 text-sm font-bold uppercase tracking-widest border-2 border-gray-100 transition-all text-[#333] shadow-sm"
            >
              JOIN US!
            </motion.button>
          </div>
        </motion.div>

        {/* Latest Sermons - Right Card - Shifted down to align with white card's title */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
            }
          }}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            transition: { duration: 0.3 }
          }}
          className="flex-1 bg-[#d4a843] p-8 md:p-10 relative overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(30,30,30,0.1)] lg:mt-[34px] self-stretch transition-shadow"
        >
          {/* Subtle watermark */}
          <motion.div 
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1, 0.95, 1]
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4"
          >
            <Mic2 className="h-72 w-72 text-white" />
          </motion.div>

          <div className="relative z-10 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Mic2 className="h-8 w-8 text-white" strokeWidth={1.5} />
              </motion.div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Latest Sermons
                  <span className="font-normal text-white/80 text-sm ml-2 italic leading-none">- May 10 - 11, 2022</span>
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-px bg-white/30"></div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "33.33%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-3 left-0 h-[2px] bg-white"
                ></motion.div>
              </div>
            </div>

            {/* Sermon Content */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              {/* Photo with L-bracket */}
              <div className="relative shrink-0">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="h-24 w-24 overflow-hidden rounded-sm border-2 border-white/20"
                >
                  <img 
                    src="/photo-1544005313-94ddf0286df2.avif" 
                    alt="Pastor Ryan Moris" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* L-bracket decoration */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-white pointer-events-none"></div>
              </div>

              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  The Law Demands, but Grace Supplies
                </h2>
                <div className="text-white/90 italic text-lg">
                  - by Pastor : <span className="font-bold not-italic">Ryan Moris</span>
                </div>
                
                {/* Action Icons */}
                <div className="flex gap-3 mt-5">
                  {[Video, CloudDownload, FileText, Share2].map((Icon, idx) => (
                    <motion.button 
                      key={idx} 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-transparent text-white transition-all p-2.5 rounded-full border border-white/40"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white rounded-sm p-3 flex items-center gap-4 shadow-lg mt-auto"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#1a5fb4] p-3.5 rounded-full shrink-0 shadow-md transition-shadow"
              >
                <Play className="h-5 w-5 text-white fill-current" />
              </motion.button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold text-[#999] uppercase tracking-tighter">The Bugle</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-[#1a5fb4] font-bold">SOUNDCLOUD</span>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#333] truncate">Bugle 179 - Playas gon...</div>
                {/* Waveform */}
                <div className="flex items-end gap-px h-6 mt-1.5 opacity-50">
                {Array.from({ length: 50 }).map((_, i) => {
                    // Use a deterministic pseudo-random sequence to avoid hydration mismatch
                    const heights = [45, 60, 35, 75, 40, 90, 55, 30, 80, 50, 65, 35, 85, 45, 70, 40, 95, 55, 30, 75, 50, 60, 45, 85, 35, 90, 50, 70, 40, 80, 55, 30, 75, 45, 65, 35, 85, 50, 90, 40, 70, 55, 30, 80, 45, 60, 35, 75, 50, 65]
                    const height = heights[i % heights.length]
                    return (
                      <motion.div 
                        key={i} 
                        animate={{ 
                          height: [`${height}%`, `${Math.min(100, height + 10)}%`, `${height}%`] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1 + (i % 3) * 0.5, 
                          ease: "easeInOut" 
                        }}
                        className={`flex-1 ${i < 15 ? 'bg-[#1a5fb4]' : 'bg-gray-300'}`} 
                        style={{ height: `${height}%` }}
                      ></motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
