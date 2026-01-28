"use client"

import { SearchBar } from "@/components/search-bar"
import { MapPin, Phone, Globe, Clock } from "lucide-react"
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
    <>
      {/* Search Header */}
      <section className="bg-primary text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6">Find Parishes</h1>
          <div className="max-w-2xl">
            <SearchBar size="small" onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">
              {results.length} {results.length === 1 ? "Parish" : "Parishes"} Found
            </h2>
            {searchQuery && <p className="text-foreground/70">Results for "{searchQuery}"</p>}
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {results.map((parish) => (
                <Link key={parish.id} href={`/parish/${parish.id}`}>
                  <div className="rounded-xl border border-border bg-white p-8 hover:shadow-lg hover:border-accent transition">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary">{parish.name}</h3>
                        <div className="flex items-center gap-2 text-foreground/70 mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{parish.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block px-4 py-2 bg-accent/20 rounded-lg">
                          <span className="text-accent font-heading font-semibold">Active</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-center gap-3 text-foreground/70">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{parish.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Phone className="h-4 w-4 text-accent" />
                        <a href={`tel:${parish.phone}`} className="hover:text-primary transition">
                          {parish.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/70">
                        <Globe className="h-4 w-4 text-accent" />
                        <a
                          href={`https://${parish.website}`}
                          target="_blank"
                          className="hover:text-primary transition"
                          rel="noreferrer"
                        >
                          {parish.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 bg-primary/5 px-3 py-2 rounded-lg">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-primary font-medium">{parish.nextActivity}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {parish.activities.map((activity) => (
                        <span
                          key={activity}
                          className="px-3 py-1 bg-secondary text-primary rounded-full text-xs font-medium"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-2 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition">
                      View Parish Portal
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-secondary p-12 text-center">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">No Parishes Found</h3>
              <p className="text-foreground/70 mb-6">Try adjusting your search criteria or browsing all parishes.</p>
              <button
                onClick={() => router.push("/search")}
                className="px-6 py-2 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition"
              >
                View All Parishes
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
