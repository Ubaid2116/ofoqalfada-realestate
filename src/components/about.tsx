"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, Award, Users, Home } from "lucide-react"

const AboutSection = () => {
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

    tl.from(".about-title", {
      duration: 0.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })
      .from(
        ".about-subtitle",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".about-text",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".about-feature",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".about-image",
        {
          duration: 1,
          scale: 0.8,
          opacity: 0,
          ease: "power3.out",
        },
        "-=1.2",
      )
      .from(
        ".about-shape",
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

  const features = [
    {
      icon: Award,
      title: "10+ Years of Excellence",
      description:
        "With over a decade of experience in the real estate market, we've built a reputation for excellence and trust.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team of experienced agents and property experts are dedicated to providing exceptional service.",
    },
    {
      icon: Home,
      title: "Premium Properties",
      description:
        "We specialize in high-quality properties in the most desirable locations, ensuring value for our clients.",
    },
    {
      icon: CheckCircle,
      title: "Client Satisfaction",
      description: "Our client-first approach ensures that your needs and preferences are our top priority.",
    },
  ]

  return (
    <section ref={ref} className="relative py-20 w-full overflow-hidden bg-gray-50">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="about-shape absolute top-[10%] right-[10%] w-[20vw] h-[20vw] bg-[#b8a369] opacity-5 rounded-full"></div>
        <div className="about-shape absolute bottom-[20%] left-[5%] w-[15vw] h-[15vw] bg-[#4a4a4a] opacity-5 rounded-full"></div>
        <div className="about-shape absolute top-[40%] left-[20%] w-[10vw] h-[10vw] bg-[#b8a369] opacity-10 transform rotate-45"></div>

        {/* Animated patterns */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(184, 163, 105, 0.05) 0%, transparent 8%), radial-gradient(circle at 70% 60%, rgba(74, 74, 74, 0.05) 0%, transparent 8%)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="about-image relative rounded-2xl overflow-hidden shadow-2xl h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
                alt="About OFOQ ALFADA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="about-shape absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-[#b8a369] opacity-10 rounded-full"></div>
            <div className="about-shape absolute -top-10 -right-10 w-[150px] h-[150px] bg-[#4a4a4a] opacity-10 transform rotate-45"></div>

            {/* Experience badge */}
            <div className="about-shape absolute top-10 -left-5 bg-white rounded-lg p-4 shadow-xl z-10">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#b8a369]">10+</p>
                <p className="text-sm text-[#4a4a4a]">Years Experience</p>
              </div>
            </div>

            {/* Properties badge */}
            <div className="about-shape absolute -bottom-5 right-10 bg-white rounded-lg p-4 shadow-xl z-10">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#b8a369]">200+</p>
                <p className="text-sm text-[#4a4a4a]">Properties</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="about-subtitle inline-block px-4 py-1 bg-[#b8a369]/10 text-[#b8a369] rounded-full text-sm font-medium">
                About Us
              </div>

              <h2 className="about-title text-4xl md:text-5xl font-bold text-[#4a4a4a]">
                We Help You Find The Perfect Home
              </h2>

              <p className="about-text text-gray-600 text-lg">
                OFOQ ALFADA is a premier real estate agency dedicated to helping clients find their dream properties.
                With a focus on luxury homes and exceptional service, we've established ourselves as leaders in the real
                estate market.
              </p>

              <p className="about-text text-gray-600 text-lg">
                Our mission is to provide a seamless and personalized experience for every client, whether you're buying
                your first home, investing in property, or selling your current residence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="about-feature flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#b8a369]/10 flex items-center justify-center text-[#b8a369]">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4a4a4a] mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

