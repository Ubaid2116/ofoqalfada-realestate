"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Users, Building2, Phone, Menu, X, Search, Bell, User } from "lucide-react"
import Image from "next/image"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/properties", icon: Building2 },
    { name: "Services", href: "/agents", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <motion.div
              className="relative w-16 h-16"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-md flex items-center justify-center">
                <Image src={"/logo.png"} alt="logo" width={120} height={120} className="text-[#4a4a4a] w-16 h-16" />
              </div>
            </motion.div>
            <div>
              <motion.span
                className="text-[#4a4a4a] font-bold text-2xl block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                OFOQ ALFADA
              </motion.span>
              <motion.span
                className="text-[#b8a369] text-sm font-medium block -mt-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                REAL ESTATE
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-[#4a4a4a] hover:text-[#b8a369] transition-colors flex items-center gap-1 font-bold relative group"
                >
                  <span>{item.name}</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-[#b8a369] w-0 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={toggleSearch}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#4a4a4a] hover:bg-[#b8a369] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={18} />
            </motion.button>

            <motion.button
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#4a4a4a] hover:bg-[#b8a369] hover:text-white transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                3
              </span>
            </motion.button>

            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-[#b8a369] text-white rounded-full hover:bg-[#a08c4a] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={16} />
              <span className="font-medium">Login</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden text-[#4a4a4a] z-50" onClick={toggleMobileMenu} whileTap={{ scale: 0.9 }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for properties..."
                    className="w-full py-3 px-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a369] focus:border-transparent"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#b8a369]">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-[#4a4a4a] text-2xl font-medium flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon size={24} className="text-[#b8a369]" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto mb-8 flex flex-col gap-4">
              <motion.button
                className="w-full py-3 bg-[#b8a369] text-white rounded-lg font-medium"
                whileTap={{ scale: 0.95 }}
              >
                Login / Register
              </motion.button>

              <motion.button
                className="w-full py-3 border border-[#b8a369] text-[#b8a369] rounded-lg font-medium"
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

