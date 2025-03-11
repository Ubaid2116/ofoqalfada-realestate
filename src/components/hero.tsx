"use client";

import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const stats = [
    { value: "200+", label: "Properties" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Agents" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-shape absolute top-0 left-0 w-[30vw] h-[30vw] bg-[#b8a369] opacity-20 transform -rotate-12"></div>
        <div className="hero-shape absolute top-[10vh] left-[15vw] w-[40vw] h-[40vw] bg-[#e5e5e5] opacity-30 transform rotate-12"></div>
        <div className="hero-shape absolute bottom-[10vh] right-[5vw] w-[25vw] h-[25vw] bg-[#b8a369] opacity-10 transform rotate-45"></div>

        {/* Additional decorative shapes */}
        <div className="hero-shape absolute top-[20vh] right-[20vw] w-[10vw] h-[10vw] rounded-full bg-[#4a4a4a] opacity-5"></div>
        <div className="hero-shape absolute bottom-[30vh] left-[10vw] w-[15vw] h-[15vw] rounded-full bg-[#b8a369] opacity-5"></div>
        <div className="hero-shape absolute top-[40vh] right-[30vw] w-[5vw] h-[5vw] rounded-full bg-[#4a4a4a] opacity-10"></div>

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-70"></div>

        {/* Animated patterns */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(184, 163, 105, 0.05) 0%, transparent 8%), radial-gradient(circle at 80% 70%, rgba(74, 74, 74, 0.05) 0%, transparent 8%)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Grid container for two equal columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
        {/* Left column - Content */}
        <div className="flex flex-col justify-center p-8 lg:p-16 relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-[#b8a369]/10 text-[#b8a369] rounded-full text-sm font-medium hero-subtitle">
              Discover Your Dream Home
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-6xl font-extrabold leading-tight">
                <span className="text-[#4a4a4a] block hero-title">
                  OFOQ <span className="text-[#b8a369]">ALFADA</span>
                </span>
                <span className="text-[#4a4a4a] block hero-title">
                  REAL ESTATE
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-medium text-[#4a4a4a] hero-subtitle">
                Find your dream house
              </h2>
            </div>

            <p className="text-gray-600 max-w-md text-lg hero-text">
              We help you find the perfect property that matches your lifestyle
              and preferences. Explore our exclusive listings and start your
              journey to homeownership today.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#b8a369] hover:bg-[#a08c4a] text-white px-4 py-3 rounded-full text-lg font-medium hero-button">
                <Link href="/properties">
                  <span className="flex items-center gap-2">
                    Explore Properties
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </button>

              <button className="border-[#b8a369] text-[#b8a369] hover:bg-[#b8a369]/10 px-4 py-4 rounded-full text-lg font-medium hero-button">
                <Link href="/contact">Contact Us</Link>
              </button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#b8a369]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#4a4a4a] transition-colors hover:bg-[#b8a369] hover:text-white hero-social"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Image collage */}
        <div className="relative h-full">
          {/* Main house image */}
          <div className="absolute top-[10%] right-[5%] w-[80%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20 hero-image">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Modern house"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="text-sm font-medium">Featured Property</div>
              <div className="text-xl font-bold">Modern Villa</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                  4 Beds
                </div>
                <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                  3 Baths
                </div>
                <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                  2,500 sqft
                </div>
              </div>
            </div>
          </div>

          {/* Bottom house image */}
          <div className="absolute bottom-[5%] left-[5%] w-[60%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-10 hero-image">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              alt="Luxury house"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <div className="text-sm font-medium">New Listing</div>
              <div className="text-lg font-bold">Luxury Apartment</div>
            </div>
          </div>

          {/* Top house image */}
          <div className="absolute top-[5%] left-[5%] w-[40%] h-[30%] rounded-2xl overflow-hidden shadow-xl z-10 hero-image">
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Cozy house"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <div className="text-sm font-medium">Cozy Home</div>
              <div className="text-lg font-bold">Family House</div>
            </div>
          </div>

          {/* Geometric shapes */}
          <div className="absolute top-[5%] right-[0%] w-[30%] h-[30%] bg-[#e5e5e5] transform rotate-45 z-0 hero-shape"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[25%] h-[25%] bg-[#b8a369] transform rotate-45 z-0 hero-shape"></div>

          {/* Price tag */}
          <div className="absolute top-[5%] right-[5%] bg-white rounded-full p-4 shadow-lg z-30 hero-price">
            <div className="text-center">
              <p className="text-xs text-gray-600">Price starts from</p>
              <p className="text-2xl font-bold text-[#4a4a4a]">$140k</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
