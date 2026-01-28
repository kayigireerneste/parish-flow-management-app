"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Globe, MapPin, Clock, Users, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ParishPortalProps {
  params: { id: string }
}

// Mock data - replace with real API
const MOCK_PARISH_DETAIL = {
  id: 1,
  name: "St. Michael's Parish",
  location: "Downtown District",
  address: "123 Main Street, Downtown, ST 12345",
  phone: "+1 (555) 123-4567",
  email: "contact@stmichaels.com",
  website: "www.stmichaels.com",
  description:
    "St. Michael's Parish has been serving the community since 1952. We are dedicated to fostering faith, community, and spiritual growth.",
  image: "/grand-church-interior.png",
  members: 1240,
  activities: [
    {
      id: 1,
      name: "Sunday Mass",
      day: "Sunday",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Weekly Sunday service for the entire community",
    },
    {
      id: 2,
      name: "Bible Study",
      day: "Wednesday",
      time: "7:00 PM",
      location: "Community Center",
      description: "Deep dive into scripture and spiritual teachings",
    },
    {
      id: 3,
      name: "Youth Group",
      day: "Friday",
      time: "6:00 PM",
      location: "Youth Hall",
      description: "Fellowship and activities for young members",
    },
    {
      id: 4,
      name: "Confession",
      day: "Saturday",
      time: "4:00 PM - 5:00 PM",
      location: "Confession Booth",
      description: "Individual spiritual counseling",
    },
    {
      id: 5,
      name: "Community Service",
      day: "Saturday",
      time: "9:00 AM",
      location: "Community Outreach Center",
      description: "Volunteer opportunities for community service",
    },
    {
      id: 6,
      name: "Choir Practice",
      day: "Thursday",
      time: "7:30 PM",
      location: "Music Room",
      description: "Join our church choir",
    },
  ],
  announcements: [
    {
      id: 1,
      title: "New Community Service Initiative",
      date: "Jan 12, 2026",
      content: "We are launching a new community outreach program. All members are welcome to participate.",
    },
    {
      id: 2,
      title: "Special Easter Celebration Coming",
      date: "Jan 10, 2026",
      content:
        "Mark your calendars for our special Easter celebration with festivities and family-friendly activities.",
    },
    {
      id: 3,
      title: "Building Renovation Complete",
      date: "Jan 5, 2026",
      content: "Our recent renovation project has been completed. Come see the new fellowship hall!",
    },
  ],
}

export default function ParishPortal({ params }: ParishPortalProps) {
  const parish = MOCK_PARISH_DETAIL
  const [selectedTab, setSelectedTab] = useState<"activities" | "announcements">("activities")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-b from-primary to-primary/90">
          <img
            src={parish.image || "/placeholder.svg"}
            alt={parish.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">{parish.name}</h1>
              <p className="text-lg text-white/90">{parish.location}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Info & Description */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border p-8 mb-8">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">About</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">{parish.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <Users className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-sm text-foreground/70">Members</p>
                      <p className="font-heading font-bold text-primary">{parish.members}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-sm text-foreground/70">Active Since</p>
                      <p className="font-heading font-bold text-primary">1952</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activities & Announcements Tabs */}
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="flex border-b border-border">
                  <button
                    onClick={() => setSelectedTab("activities")}
                    className={`flex-1 py-4 px-6 font-heading font-semibold transition ${
                      selectedTab === "activities"
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    Activities & Events
                  </button>
                  <button
                    onClick={() => setSelectedTab("announcements")}
                    className={`flex-1 py-4 px-6 font-heading font-semibold transition ${
                      selectedTab === "announcements"
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    Announcements
                  </button>
                </div>

                <div className="p-8">
                  {selectedTab === "activities" ? (
                    <div className="space-y-6">
                      {parish.activities.map((activity) => (
                        <div
                          key={activity.id}
                          className="border border-border rounded-lg p-6 hover:shadow-md transition"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-heading text-lg font-semibold text-primary">{activity.name}</h3>
                            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                              {activity.day}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm text-foreground/70">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-accent" />
                              <span>{activity.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span>{activity.location}</span>
                            </div>
                          </div>
                          <p className="text-sm text-foreground/70 mt-3">{activity.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {parish.announcements.map((announcement) => (
                        <div
                          key={announcement.id}
                          className="border border-border rounded-lg p-6 hover:shadow-md transition"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-heading text-lg font-semibold text-primary">{announcement.title}</h3>
                            <span className="text-xs text-foreground/70">{announcement.date}</span>
                          </div>
                          <p className="text-sm text-foreground/70">{announcement.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Quick Links */}
            <div>
              <div className="bg-primary text-white rounded-xl p-8 mb-8">
                <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-white/70 mb-1">Address</p>
                      <p className="text-sm">{parish.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-white/70 mb-1">Phone</p>
                      <a href={`tel:${parish.phone}`} className="text-sm hover:text-accent transition">
                        {parish.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-white/70 mb-1">Website</p>
                      <a
                        href={`https://${parish.website}`}
                        target="_blank"
                        className="text-sm hover:text-accent transition"
                        rel="noreferrer"
                      >
                        {parish.website}
                      </a>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 py-3 bg-accent text-primary font-heading font-semibold rounded-lg hover:bg-opacity-90 transition">
                  Get Directions
                </button>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Users, label: "Join Community" },
                    { icon: Clock, label: "View Schedule" },
                    { icon: Globe, label: "Visit Website" },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <button className="flex items-center gap-2 w-full text-left text-primary hover:text-accent transition font-medium">
                        <link.icon className="h-4 w-4" />
                        {link.label}
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
