import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import HeroBg from "../../assets/HeroBg.png";
import MenuButton from "../../assets/MenuButton.png";
import HeroSignature from "../../assets/HeroSignature.png";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Logo from "../../assets/Logo.png";
import HamburgerMenu from "../Icons/HamburgerMenu";

const HeroSection = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="sm:h-screen h-[50vh] relative">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="relative">
                <div className="gap-4 absolute top-6 z-50 md:flex hidden right-5">
                    <Link to={'/'}>
                        <FacebookIcon />
                    </Link>
                    <Link to={'/'}>
                        <InstagramIcon />
                    </Link>
                    <Link to={'/'}>
                        <LinkedInIcon />
                    </Link>
                </div>
                <div className={`items-center transition-all z-[999999] duration-300 md:hidden fixed flex md:justify-start justify-between px-5 w-full ${isScrolled ? 'bg-[#1a1a1a] h-20 ' : 'bg-transparent h-20'} z-50`}>
                    <Link to={"/"}>
                        <img src={Logo} className=" md:w-[100px] md:h-auto w-[74px] h-[30px]" alt="" />
                    </Link>
                    <button onClick={toggleSidebar}>
                        <HamburgerMenu />
                    </button>
                </div>
            </div>
            <div className="h-full w-full absolute bg-[#0E0E0E]/40 z-10" />
            <img src={HeroBg} className="absolute h-full w-full object-cover object-center" alt="Hero Background" />
            <button onClick={toggleSidebar} className="fixed object-cover bottom-28 left-1/2 -translate-x-1/2 z-[999999999] md:block hidden">
                <img src={MenuButton} alt="Menu Button" />
            </button>
            <img className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src={HeroSignature} alt="Signature" />
        </div>
    );
};

export default HeroSection;
