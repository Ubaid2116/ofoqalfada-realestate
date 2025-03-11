"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bed, Bath, Maximize, Heart, MapPin } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Swiper from "swiper"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    location: "Beverly Hills, CA",
    price: "$4,500,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    beds: 5,
    baths: 4,
    sqft: 4200,
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Manhattan, NY",
    price: "$2,800,000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    beds: 3,
    baths: 2,
    sqft: 1800,
    featured: false,
  },
  {
    id: 3,
    title: "Seaside Retreat",
    location: "Malibu, CA",
    price: "$6,200,000",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    beds: 4,
    baths: 3,
    sqft: 3500,
    featured: false,
  },
  {
    id: 4,
    title: "Modern Penthouse",
    location: "Miami, FL",
    price: "$3,900,000",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    beds: 3,
    baths: 3,
    sqft: 2800,
    featured: true,
  },
]

const FeaturedProperties = () => {
  const ref = useRef(null)
  const swiperRef = useRef(null)

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

    tl.from(".properties-title", {
      duration: 0.8,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    })
      .from(
        ".properties-subtitle",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".properties-text",
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        ".properties-button",
        {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".swiper-container",
        {
          duration: 1,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.6",
      )

    // Initialize Swiper
    const swiper = new Swiper(swiperRef.current!, {
      modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
    })

    return () => {
      if (tl) tl.kill()
      if (swiper) swiper.destroy()
    }
  }, [])

  return (
    <section ref={ref} className="relative py-20 w-full overflow-hidden bg-gray-50">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[20vw] h-[20vw] bg-[#b8a369] opacity-5 rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[15vw] h-[15vw] bg-[#4a4a4a] opacity-5 rounded-full"></div>
        <div className="absolute top-[40%] left-[20%] w-[10vw] h-[10vw] bg-[#b8a369] opacity-10 transform rotate-45"></div>

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
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="properties-subtitle inline-block px-4 py-1 bg-[#b8a369]/10 text-[#b8a369] rounded-full text-sm font-medium mb-4">
            Exclusive Properties
          </div>

          <h2 className="properties-title text-4xl md:text-5xl font-bold text-[#4a4a4a] mb-6">Featured Properties</h2>

          <p className="properties-text text-gray-600 text-lg">
            Discover our handpicked selection of premium properties in the most desirable locations. Each property is
            carefully selected to meet our high standards of quality and value.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {properties.map((property) => (
              <div key={property.id} className="swiper-slide" style={{ width: "350px", height: "500px" }}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                  <div className="relative h-64">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />

                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-[#b8a369] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}

                    <button className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                      <Heart size={18} />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-1 text-sm mb-1">
                        <MapPin size={14} />
                        <span>{property.location}</span>
                      </div>
                      <h3 className="text-xl font-bold">{property.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-[#4a4a4a]">{property.price}</span>
                      <div className="px-3 py-1 bg-[#b8a369]/10 text-[#b8a369] rounded-full text-sm font-medium">
                        For Sale
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Bed size={18} />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Bath size={18} />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Maximize size={18} />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-[#b8a369] hover:bg-[#a08c4a] text-white" >
                        <Link href={`/properties/${property.id}`}>View Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination and Navigation */}
          <div className="swiper-pagination mt-8"></div>
          <div className="swiper-button-next text-[#b8a369]"></div>
          <div className="swiper-button-prev text-[#b8a369]"></div>
        </div>

        <div className="text-center mt-12">
          <button
            className="properties-button border-[#b8a369] text-[#b8a369] hover:bg-[#b8a369]/10 px-8 py-3 rounded-full"
          >
            <Link href="/properties" className="flex items-center gap-2">
              View All Properties
              <ArrowRight size={16} />
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties

