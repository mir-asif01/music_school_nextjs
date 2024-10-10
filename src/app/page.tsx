import Courses from "@/components/Courses"
import HeroSection from "@/components/HeroSection"
import MovingCards from "@/components/MovingCards"
import Webinars from "@/components/Webinars"
import WhyChooseUs from "@/components/WhyChooswUs"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <WhyChooseUs />
      <MovingCards />
      <Webinars />
    </>
  )
}
