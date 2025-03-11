"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Home, Search, Key, Briefcase, BarChart, Shield } from "lucide-react"
import Link from "next/link"

const ServicesSection = () => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(".services-title", {
      duration: 0.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })
      .from(
        ".services-subtitle",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".services-text",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".service-card",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".services-button",
        {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".services-shape",
        {
          duration: 1.2,
          scale: 0,
          opacity: 0,
          stagger: 0.2,
          ease: "elastic.out(1, 0.3)",
        },
        "-=1.5",
      )

    return () => {
      // Clean up
      if (tl) tl.kill()
    }
  }, [])

  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description:
        "We help you sell your property at the best possible price with our expert market knowledge and negotiation skills.",
      color: "#b8a369",
    },
    {
      icon: Search,
      title: "Property Search",
      description:
        "Find your dream home with our personalized property search service tailored to your specific needs and preferences.",
      color: "#4a4a4a",
    },
    {
      icon: Key,
      title: "Property Management",
      description:
        "Our comprehensive property management services ensure your investment is well-maintained and profitable.",
      color: "#b8a369",
    },
    {
      icon: Briefcase,
      title: "Investment Advisory",
      description:
        "Make informed investment decisions with our expert advice on property markets and investment opportunities.",
      color: "#4a4a4a",
    },
    {
      icon: BarChart,
      title: "Market Analysis",
      description: "Stay ahead with our detailed market analysis and insights into property trends and valuations.",
      color: "#b8a369",
    },
    {
      icon: Shield,
      title: "Legal Assistance",
      description:
        "Navigate complex real estate transactions with confidence with our expert legal assistance and documentation support.",
      color: "#4a4a4a",
    },
  ]

  return (
    <section ref={ref} className="relative py-20 w-full overflow-hidden bg-white">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="services-shape absolute top-[5%] left-[5%] w-[25vw] h-[25vw] bg-[#b8a369] opacity-5 rounded-full"></div>
        <div className="services-shape absolute bottom-[10%] right-[5%] w-[20vw] h-[20vw] bg-[#4a4a4a] opacity-5 rounded-full"></div>
        <div className="services-shape absolute top-[30%] right-[15%] w-[15vw] h-[15vw] bg-[#b8a369] opacity-5 transform rotate-45"></div>

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-70"></div>

        {/* Animated patterns */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(184, 163, 105, 0.05) 0%, transparent 8%), radial-gradient(circle at 90% 80%, rgba(74, 74, 74, 0.05) 0%, transparent 8%)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="services-subtitle inline-block px-4 py-1 bg-[#b8a369]/10 text-[#b8a369] rounded-full text-sm font-medium mb-4">
            Our Services
          </div>

          <h2 className="services-title text-4xl md:text-5xl font-bold text-[#4a4a4a] mb-6">
            Comprehensive Real Estate Services
          </h2>

          <p className="services-text text-gray-600 text-lg">
            We offer a wide range of professional real estate services designed to meet all your property needs. From
            buying and selling to property management and investment advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-[#b8a369]/20 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#b8a369]/10 flex items-center justify-center text-[#b8a369] mb-6 group-hover:bg-[#b8a369] group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>

              <h3 className="text-xl font-bold text-[#4a4a4a] mb-4 group-hover:text-[#b8a369] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="services-button bg-[#b8a369] hover:bg-[#a08c4a] text-white px-8 py-6 rounded-full text-lg font-medium"
          >
            <Link href="/services">Explore All Services</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

