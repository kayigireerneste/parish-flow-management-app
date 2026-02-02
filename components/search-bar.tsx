"use client"

import type React from "react"
import { Search, MapPin } from "lucide-react"
import { useState } from "react"

interface SearchBarProps {
  onSearch?: (parish: string, location: string) => void
  size?: "small" | "large"
}

export function SearchBar({ onSearch, size = "large" }: SearchBarProps) {
  const [parishName, setParishName] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(parishName, location)
  }

  if (size === "small") {
    return (
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Parish name..."
            value={parishName}
            onChange={(e) => setParishName(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition"
        >
          Search
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSearch} className="w-full relative z-20">
      <div className="bg-white rounded-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row items-center p-2 md:p-1.5 overflow-hidden group">
        {/* Parish Name Input */}
        <div className="flex-1 w-full flex items-center px-4 py-3 md:py-0">
          <Search className="h-5 w-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Parish Title or Keywords"
            value={parishName}
            onChange={(e) => setParishName(e.target.value)}
            className="w-full bg-transparent border-none text-[15px] font-normal text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 ml-3"
          />
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-8 bg-gray-100 mx-2"></div>

        {/* Location Input */}
        <div className="flex-1 w-full flex items-center px-4 py-3 md:py-0 border-t border-gray-100 md:border-t-0">
          <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="City or region"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent border-none text-[15px] font-normal text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 ml-3"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto mt-2 md:mt-0 px-10 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-[14px] rounded-sm transition-all duration-300 whitespace-nowrap"
        >
          Find it now
        </button>
      </div>
    </form>
  )
}
