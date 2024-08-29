import BlogsSection from "../components/About/BlogsSection"
import HeroSection from "../components/Shared/HeroSection"
import Milestones from "../components/About/Milestones"
import OurHistory from "../components/About/OurHistory"
import Partners from "../components/About/Partners"
import WhyUs from "../components/About/WhyUs"
import WorkSection from "../components/About/WorkSection"
const About = () => {
  return (
    <>
      <HeroSection page="About us" breadcrumb="about us" />
      <OurHistory />
      <WhyUs />
      <Partners />
      <Milestones />
      <WorkSection />
      <BlogsSection />
    </>
    )
}

export default About