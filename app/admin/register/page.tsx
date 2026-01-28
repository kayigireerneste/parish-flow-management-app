"use client"

import type React from "react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { Church, Mail, Lock, Phone, MapPin, Globe, ChevronRight, UserPlus, Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RegisterParish() {
  const [formData, setFormData] = useState({
    parishName: "",
    location: "",
    address: "",
    phone: "",
    website: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-lg font-bold text-xs uppercase tracking-widest hover:text-[#D4A843] hover:shadow-lg transition-all shadow-md shadow-black/5"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </div>
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Visual & Info */}
          <div className="hidden lg:block space-y-6">
            <div>
              <span className="text-[#D4A843] font-serif italic text-lg block mb-1">Join our Network</span>
              <h1 className="text-3xl font-bold text-primary font-serif tracking-tight mb-4">
                Digitize Your <br />Parish Administration
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Register your parish today to access powerful tools for community engagement, 
                event management, and streamlined administration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
              <div className="space-y-4">
                {[
                  { title: "Centralized Database", desc: "Manage all member records in one secure place." },
                  { title: "Event Scheduling", desc: "Plan and promote masses, events, and meetings effortlessly." },
                  { title: "Community Analytics", desc: "Gain insights into attendance and engagement trends." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-primary mb-0.5">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/5 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-primary via-[#D4A843] to-primary"></div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <UserPlus className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary font-heading">Register Parish</h2>
                  <p className="text-xs text-gray-500">Create your admin account</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Parish Name */}
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Parish Name</label>
                    <div className="relative">
                      <Church className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="parishName"
                        value={formData.parishName}
                        onChange={handleChange}
                        type="text" 
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="e.g. St. Michael's Parish"
                      />
                    </div>
                  </div>

                  {/* Location (City/Area) */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">City / Area</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        type="text" 
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="e.g. Downtown"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Contact Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Full Address */}
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Full Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        type="text" 
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="Street address, building number..."
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Website (Optional)</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        type="url" 
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="col-span-2 h-px bg-gray-100 my-1"></div>

                  {/* Admin Email */}
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Admin Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="admin@parish.com"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"} 
                        required
                        className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="••••••••"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type="password" 
                        required
                        className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#D4A843] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  >
                    {isLoading ? "Creating Account..." : "Register Parish"}
                    {!isLoading && <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
