import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HamburgerMenu from "../Icons/HamburgerMenu";
import Logo from "../../assets/Logo-White.png";
import MenuButton from "../../assets/MenuButton.png";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isLightPage = location.pathname === "/blogs";

  return (
    <nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <button
        onClick={toggleSidebar}
        className="fixed object-cover bottom-5 left-1/2 -translate-x-1/2 z-[999999999999999] md:block hidden size-[100px]"
      >
        <div className="relative">
        <img src={MenuButton} alt="Menu Button" />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-vissa text-3xl mt-1">MENU</h1>
        </div>
      </button>
      <div className={`fixed w-full border-b  transition-all
duration-300 z-[9999999999999999]  ${isLightPage || isScrolled
          ? "bg-[#1a1a1a] border-b-white/40 "
          : "bg-transparent border-transparent"
        }`}>
        <div
          className={`items-center w-full container flex h-20  justify-between px-5 z-50`}
        >
          <Link to={"/"}>
            <img
              src={Logo}
              className="md:w-[150px] w-[120px]"
              alt=""
            />
          </Link>
          <div>
            <div className="gap-4 z-50 md:flex hidden ">
              <Link target="_blank" to={'https://www.facebook.com/p/TwentyOne06-100054351738420/'}>
                <FacebookIcon className="md:size-auto size-7" />
              </Link>
              <Link target="_blank" to={'https://www.instagram.com/twentyone06/'}>
                <InstagramIcon className="md:size-auto size-7" />
              </Link>
              <Link target="_blank" to={'https://www.linkedin.com/company/twentyone06'}>
                <LinkedInIcon className="md:size-auto size-7" />
              </Link>
              <Link target="_blank" to={'https://www.youtube.com/@TwentyOne06'}>
                <YoutubeIcon className="md:size-auto size-7" />
              </Link>
            </div>

            <button
              className="md:hidden block"
              onClick={toggleSidebar}
            >
              <HamburgerMenu />
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
