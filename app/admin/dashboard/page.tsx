"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Plus, Edit, Trash2, Users, Calendar, Bell, Settings } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

interface Activity {
  id: number
  name: string
  day: string
  time: string
  location: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [parishName] = useState("St. Michael's Parish")
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, name: "Sunday Mass", day: "Sunday", time: "10:00 AM", location: "Main Sanctuary" },
    { id: 2, name: "Bible Study", day: "Wednesday", time: "7:00 PM", location: "Community Center" },
    { id: 3, name: "Youth Group", day: "Friday", time: "6:00 PM", location: "Youth Hall" },
  ])
  const [showAddActivity, setShowAddActivity] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("/")
  }

  const handleDeleteActivity = (id: number) => {
    setActivities(activities.filter((a) => a.id !== id))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn userRole="parish" onLogout={handleLogout} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSidebar parishName={parishName} onLogout={handleLogout} userRole="parish" />

        {/* Main content */}
        <main className="flex-1 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">{parishName} Dashboard</h1>
              <p className="text-foreground/70">Manage your parish activities and information</p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
            >
              {[
                { icon: Users, label: "Members", value: "1,240" },
                { icon: Calendar, label: "Activities", value: activities.length.toString() },
                { icon: Bell, label: "Announcements", value: "3" },
                { icon: Users, label: "Visitors This Week", value: "342" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-xl border border-border bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-foreground/70">{stat.label}</p>
                      <p className="font-heading text-2xl font-bold text-primary mt-1">{stat.value}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Activities Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-xl border border-border">
                  <div className="border-b border-border p-6 flex items-center justify-between">
                    <h2 className="font-heading text-xl font-bold text-primary">Weekly Activities</h2>
                    <button
                      onClick={() => setShowAddActivity(!showAddActivity)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition"
                    >
                      <Plus className="h-4 w-4" />
                      Add Activity
                    </button>
                  </div>

                  {/* Add Activity Form */}
                  {showAddActivity && (
                    <div className="border-b border-border p-6 bg-secondary">
                      <h3 className="font-heading text-lg font-semibold text-primary mb-4">New Activity</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Activity name"
                            className="col-span-2 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Select day</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                          </select>
                          <input
                            type="time"
                            className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <input
                            type="text"
                            placeholder="Location"
                            className="col-span-2 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            className="flex-1 py-2 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition"
                          >
                            Save Activity
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowAddActivity(false)}
                            className="flex-1 py-2 border border-border text-foreground font-heading font-semibold rounded-lg hover:bg-secondary transition"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Activities List */}
                  <div className="divide-y divide-border">
                    {activities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-6 hover:bg-secondary/50 transition"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-heading text-lg font-semibold text-primary">{activity.name}</h3>
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-foreground/70">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-accent" />
                                {activity.day}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-accent" />
                                {activity.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4 text-accent" />
                                {activity.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteActivity(activity.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Parish Info Card */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Parish Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-foreground/70 mb-1">Name</p>
                      <p className="font-medium text-foreground">{parishName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/70 mb-1">Location</p>
                      <p className="font-medium text-foreground">Downtown District</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/70 mb-1">Email</p>
                      <p className="font-medium text-foreground">contact@stmichaels.com</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 border border-border text-foreground font-heading font-semibold rounded-lg hover:bg-secondary transition">
                    <Settings className="inline h-4 w-4 mr-2" />
                    Edit Information
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <h3 className="font-heading text-lg font-bold text-primary mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    {[
                      { icon: Bell, label: "Post Announcement" },
                      { icon: Users, label: "Manage Members" },
                      { icon: Settings, label: "Settings" },
                    ].map((action, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-center gap-2 p-3 hover:bg-secondary rounded-lg transition text-left text-foreground hover:text-primary"
                      >
                        <action.icon className="h-4 w-4" />
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
