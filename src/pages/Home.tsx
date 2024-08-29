import AboutAgency from "../components/Home/AboutAgency"
import ContactSection from "../components/Home/ContactSection"
import CreationsSection from "../components/Home/CreationsSection"
import HeroSection from "../components/Home/HeroSection"
import Partners from "../components/Home/Partners"
import PressAndReports from "../components/Home/PressAndReports"
import Services from "../components/Home/Services"
import WhatTheySay from "../components/Home/WhatTheySay"

const Home = () => {
    return (
        <>
             <HeroSection />
            <AboutAgency />
            <Services/>
            <CreationsSection />
            <Partners />
            <WhatTheySay />
            <PressAndReports/>
            <ContactSection/>
        </>
    )
}

export default Home