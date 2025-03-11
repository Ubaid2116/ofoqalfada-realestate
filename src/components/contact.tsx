"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-[#4a4a4a] text-white relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#b8a369] opacity-10 transform rotate-45"
          animate={{
            rotate: [45, 60, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#b8a369] opacity-10 transform -rotate-12"
          animate={{
            rotate: [-12, -25, -12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to Find Your Dream Home?
            </motion.h2>

            <motion.p
              className="text-white/80 max-w-md text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact our team of experts today and let us help you find the perfect property that matches your
              lifestyle and preferences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="bg-[#b8a369] hover:bg-[#a08c4a] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </button>

              <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Link href="/properties">Browse Properties</Link>
              </button>
            </motion.div>

            <motion.div
              className="pt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b8a369] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Call Us</div>
                  <div className="font-medium">+91 (055) 5577140</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b8a369] flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Email Us</div>
                  <div className="font-medium">ofoqalfada.realestate@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b8a369] flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Visit Us</div>
                  <div className="font-medium">Ajman, UAE</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a369] text-white placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a369] text-white placeholder-white/50"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a369] text-white placeholder-white/50"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a369] text-white placeholder-white/50 resize-none"
                  placeholder="Tell us about your property needs"
                ></textarea>
              </div>

              <button
                className="w-full bg-[#b8a369] hover:bg-[#a08c4a] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction