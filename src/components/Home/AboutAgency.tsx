import { Link } from "react-router-dom"
import AboutBg from "../../assets/Philosophy.webp"
import AboutImages from "../../assets/about-us-twenty-one-section.png"
import ButtonVector from "../../assets/ButtonVector.svg"
const AboutAgency = () => {
  return (
    <div className="md:py-32 sm:py-24 py-16 xl:py-56 relative">
      <img src={AboutBg} className="w-full h-full absolute inset-0 opacity-10 object-cover object-right" alt="" />
      <div className="container lg:flex-row flex-col-reverse flex xl:gap-x-[110px] gap-x-12 items-center relative z-50">
        <div>
          <img src={AboutImages} className="xl:max-w-[606px] sm:max-w-[506px] max-h-[623px] object-cover" alt="" />
        </div>
        <div className="md:text-start text-center">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-vissa uppercase tracking-[0.02em] sm:mb-8 mb-4">Award-Winning Interior Design & Branding Studio</h1>
          <p className="font-houschka font-light text-[#D0D0D0] sm:text-lg text-sm md:mb-16 mb-12 md:pb-1.5">At TwentyOne06, we are an award-winning interior design and branding studio
            specializing in creating immersive spaces that tell a story. Based in the Middle East, our
            expertise lies in the F&B, hospitality, and commercial sectors, where we develop design
            concepts that go beyond form —prioritizing guest experiences and emotional connections.
            Every project we undertake reflects our dedication to storytelling, bringing narrativedriven design to life in every detail.</p>
          <Link className="lg:block hidden" to={'/about'}>
            <button className="relative">
              <span className="font-houschka font-light uppercase xl::text-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">Learn More</span>
              <img className="xl::size-auto size-32" src={ButtonVector} alt="Button Vector" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AboutAgency
