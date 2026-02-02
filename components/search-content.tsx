"use client"

import { SearchBar } from "@/components/search-bar"
import { MapPin, Phone, Globe, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

// Mock data - replace with real API calls
const MOCK_PARISHES = [
  {
    id: 1,
    name: "St. Michael's Parish",
    location: "Downtown District",
    address: "123 Main Street",
    phone: "+1 (555) 123-4567",
    website: "www.stmichaels.com",
    activities: ["Sunday Mass", "Bible Study", "Youth Group"],
    nextActivity: "Sunday Mass - Tomorrow at 10:00 AM",
  },
  {
    id: 2,
    name: "Holy Trinity Church",
    location: "Westside",
    address: "456 Oak Avenue",
    phone: "+1 (555) 234-5678",
    website: "www.holytrinity.com",
    activities: ["Sunday Mass", "Confession", "Community Service"],
    nextActivity: "Community Service - Saturday at 9:00 AM",
  },
  {
    id: 3,
    name: "Our Lady of Peace",
    location: "Eastside",
    address: "789 Grace Lane",
    phone: "+1 (555) 345-6789",
    website: "www.ourladyofpeace.com",
    activities: ["Sunday Mass", "Rosary Group", "Choir Practice"],
    nextActivity: "Rosary Group - Wednesday at 7:00 PM",
  },
]

export function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [results, setResults] = useState(MOCK_PARISHES)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const parish = searchParams.get("parish") || ""
    const location = searchParams.get("location") || ""
    setSearchQuery(parish || location)

    // Filter results based on search
    if (parish || location) {
      const filtered = MOCK_PARISHES.filter((p) => {
        const matchParish = !parish || p.name.toLowerCase().includes(parish.toLowerCase())
        const matchLocation = !location || p.location.toLowerCase().includes(location.toLowerCase())
        return matchParish && matchLocation
      })
      setResults(filtered)
    }
  }, [searchParams])

  const handleSearch = (parishName: string, location: string) => {
    const params = new URLSearchParams()
    if (parishName) params.append("parish", parishName)
    if (location) params.append("location", location)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header Hero */}
      <section className="bg-[#f4f7fa] pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight">
              Find your <span className="text-[#3B82F6]">home</span> <br className="hidden md:block" /> parish
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-medium">
              Discover and connect with your local spiritual community. Search by name, location, or activity.
            </p>
          </div>
          <div className="hidden md:block w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl"></div>
            <img 
              src="/church-header.png" 
              alt="Church Illustration" 
              className="relative z-10 w-full h-auto drop-shadow-sm mix-blend-multiply opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Floating Search Bar Section */}
      <div className="mx-auto max-w-5xl px-4 -mt-12 md:-mt-14 relative z-20">
        <SearchBar size="large" onSearch={handleSearch} />
      </div>

      {/* Results Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-2 font-serif">
                {results.length} {results.length === 1 ? "Parish" : "Parishes"} Found
              </h2>
              {searchQuery && (
                <p className="text-gray-500 font-medium">
                  Showing results for <span className="text-[#3B82F6]">"{searchQuery}"</span>
                </p>
              )}
            </div>
            {!searchQuery && (
              <p className="text-gray-400 font-medium text-sm">Showing all available parishes in the network</p>
            )}
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((parish) => (
                <Link key={parish.id} href={`/parish/${parish.id}`} className="group">
                  <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-[#3B82F6] transition-colors">
                        <MapPin className="h-5 w-5 text-[#3B82F6] group-hover:text-white" />
                      </div>
                      <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-green-100">
                        Active
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#3B82F6] transition-colors leading-tight">
                        {parish.name}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium mb-6">{parish.location}</p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-4 w-4 text-gray-300 mt-0.5 shrink-0" />
                          <span className="text-gray-500 text-sm">{parish.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-gray-300 shrink-0" />
                          <span className="text-gray-500 text-sm">{parish.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-gray-300 shrink-0" />
                          <span className="text-gray-500 text-sm truncate">{parish.website}</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100 flex items-center gap-3">
                        <Clock className="h-4 w-4 text-[#3B82F6] shrink-0" />
                        <span className="text-gray-600 text-[13px] font-medium leading-tight">
                          {parish.nextActivity}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {parish.activities.slice(0, 3).map((activity) => (
                          <span
                            key={activity}
                            className="px-3 py-1 bg-blue-50/50 text-[#3B82F6] rounded-md text-[10px] font-bold uppercase tracking-wider"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between text-[#3B82F6] font-bold text-sm">
                      <span>View Full Details</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-gray-50/50 p-20 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2 font-serif">No Parishes Found</h3>
              <p className="text-gray-400 font-medium max-w-sm mx-auto mb-10">
                We couldn't find any parishes matching your criteria. Try adjusting your search or explore all.
              </p>
              <button
                onClick={() => router.push("/search")}
                className="px-8 py-3 bg-[#0f172a] text-white font-bold rounded-xl hover:bg-[#3B82F6] transition-all"
              >
                View All Parishes
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
