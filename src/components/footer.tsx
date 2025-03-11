"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#4a4a4a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <img src="/logo.png" alt="OFOQ ALFADA Logo" className="w-full h-full" />
              </div>
              <div>
                <span className="text-xl font-bold">OFOQ ALFADA</span>
                <span className="block text-sm text-[#b8a369]">REAL ESTATE</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm">
              We help you find the perfect property that matches your lifestyle and preferences. Explore our
              exclusive listings and start your journey to homeownership today.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#b8a369] transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Properties", href: "/properties" },
                { name: "Services", href: "/services" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#b8a369] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b8a369] flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Call Us</div>
                  <div className="font-medium">+91 (055) 5577140</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b8a369] flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Email Us</div>
                  <div className="font-medium">ofoqalfada.realestate@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#b8a369] flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-sm text-white/70">Visit Us</div>
                  <div className="font-medium">Ajman, UAE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 text-sm">
              Stay updated with the latest properties, exclusive offers, and real estate trends.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a369] text-white placeholder-white/50"
              />
              <button
                type="submit"
                className="w-full bg-[#b8a369] hover:bg-[#a08c4a] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-sm">
          © {new Date().getFullYear()} OFOQ ALFADA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer