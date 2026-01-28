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
    <form onSubmit={handleSearch} className="w-full">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Parish Name</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by parish name..."
                value={parishName}
                onChange={(e) => setParishName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="City or region..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Find Parishes
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
