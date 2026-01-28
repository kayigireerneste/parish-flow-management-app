"use client"

import { Calendar, MapPin, User, Mic2, Video, CloudDownload, FileText, Share2, Play } from "lucide-react"

export function EventsSermonsSection() {
  return (
    <section id="events" className="relative -mt-16 md:-mt-20 z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20 font-sans">
      <div className="flex flex-col lg:flex-row gap-0 lg:items-start">
        {/* Next Upcoming Event - Left Card */}
        <div className="flex-1 bg-white p-8 md:p-10 flex relative shadow-[0_10px_40px_rgba(0,0,0,0.12)] z-10">
          {/* Date Badge - Left Edge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#1a5fb4] text-white py-4 px-4 min-w-[65px] z-10 shadow-md">
            <span className="text-3xl font-bold leading-none">14</span>
            <div className="text-[10px] uppercase tracking-wider mt-1 flex gap-1">
              <span>May</span>
            </div>
            <span className="text-[10px] tracking-wider">2022</span>
            {/* Triangle pointer */}
            <div className="absolute -bottom-3 left-0 w-0 h-0 border-t-14 border-t-[#1a5fb4] border-r-65 border-r-transparent"></div>
          </div>

          <div className="flex-1 ml-16 md:ml-20">
            {/* Header Row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Calendar Icon Box */}
                <div className="text-[#d4a843]">
                  <Calendar className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <h3 className="text-xl text-[#1a5fb4] font-bold tracking-tight">
                    Next Upcoming Event
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-[#d4a843]/50"></div>
                  <div className="absolute -bottom-3 left-0 w-2/3 h-[2px] bg-[#d4a843]"></div>
                </div>
              </div>

              {/* Time Tag */}
              <div className="relative flex items-center bg-[#d4a843] text-white pl-6 pr-5 py-2 rounded-full font-bold text-xs shadow-sm">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white"></span>
                @ 8 to 11 AM
              </div>
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
            <button className="rounded-full px-10 py-3 text-sm font-bold uppercase tracking-widest border-2 border-gray-100 hover:border-[#1a5fb4] hover:bg-[#1a5fb4] hover:text-white transition-all text-[#333] shadow-sm">
              JOIN US!
            </button>
          </div>
        </div>

        {/* Latest Sermons - Right Card - Shifted down to align with white card's title */}
        <div className="flex-1 bg-[#d4a843] p-8 md:p-10 relative overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.12)] lg:mt-[34px] self-stretch">
          {/* Subtle watermark */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
            <Mic2 className="h-72 w-72 text-white" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <Mic2 className="h-8 w-8 text-white" strokeWidth={1.5} />
              <div className="relative">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Latest Sermons
                  <span className="font-normal text-white/80 text-sm ml-2 italic leading-none">- May 10 - 11, 2022</span>
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-px bg-white/30"></div>
                <div className="absolute -bottom-3 left-0 w-1/3 h-[2px] bg-white"></div>
              </div>
            </div>

            {/* Sermon Content */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              {/* Photo with L-bracket */}
              <div className="relative shrink-0">
                <div className="h-24 w-24 overflow-hidden rounded-sm border-2 border-white/20">
                  <img 
                    src="/photo-1544005313-94ddf0286df2.avif" 
                    alt="Pastor Ryan Moris" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                    <button 
                      key={idx} 
                      className="bg-transparent hover:bg-white/20 text-white transition-all p-2.5 rounded-full border border-white/40"
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="bg-white rounded-sm p-3 flex items-center gap-4 shadow-lg mt-auto">
              <button className="bg-[#1a5fb4] hover:bg-[#1a5fb4]/90 p-3.5 rounded-full shrink-0 shadow-md transform hover:scale-105 transition-all">
                <Play className="h-5 w-5 text-white fill-current" />
              </button>
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
                      <div 
                        key={i} 
                        className={`flex-1 ${i < 15 ? 'bg-[#1a5fb4]' : 'bg-gray-300'}`} 
                        style={{ height: `${height}%` }}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
