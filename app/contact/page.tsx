"use client"

import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {/* Hero Header */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/about.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <span className="text-[#D4A843] font-serif italic text-xl block mb-4">We'd Love to Hear From You</span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-8">
              Get in Touch
            </h1>
            <div className="h-1 w-24 bg-[#D4A843] mx-auto mb-8"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Whether you have a question about features, pricing, or need support, our team is ready to answer all your questions.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-primary font-serif mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "info@parishflow.com",
                      sub: "Support team is available 24/7"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+1 (555) 123-4567",
                      sub: "Mon-Fri from 8am to 5pm"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "123 Faith Avenue, Suite 100",
                      sub: "New York, NY 10012"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#D4A843]/10 transition-colors">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-[#D4A843] transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                        <p className="text-lg text-gray-700 font-medium mb-1">{item.content}</p>
                        <p className="text-sm text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ Teaser */}
                <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-[#D4A843] mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">Frequently Asked Questions</h3>
                      <p className="text-gray-600 mb-4">
                        Find quick answers to common questions about parish registration and management tools.
                      </p>
                      <a href="#" className="text-[#D4A843] font-bold text-sm uppercase tracking-widest hover:underline">
                        Visit Help Center
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/5 border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-all" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#D4A843] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
