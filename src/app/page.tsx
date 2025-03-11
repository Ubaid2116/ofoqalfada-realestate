import AboutSection from "@/components/about";
import CallToAction from "@/components/contact";
import FeaturedProperties from "@/components/featured-properties";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <FeaturedProperties />
    <Testimonials />
    <CallToAction />
    <Footer />
    </>
  );
}
