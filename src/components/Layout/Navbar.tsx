import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import HamburgerMenu from '../Icons/HamburgerMenu';
import MenuButton from "../../assets/MenuButton.png";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // use useLocation hook to get the current location

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

  const isLightPage = location.pathname === '/blogs';

  return (
    <nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <button onClick={toggleSidebar} className="fixed object-cover bottom-12 xl:bottom-28 left-1/2 -translate-x-1/2 z-[999999999] md:block hidden">
        <img src={MenuButton} alt="Menu Button" />
      </button>
      <div className={`items-center border-b transition-all z-[999999] h-20 duration-300 md:hidden fixed flex md:justify-start justify-between px-5 w-full ${isLightPage || isScrolled ? 'bg-[#1a1a1a] border-b-white/40 ' : 'bg-transparent border-transparent'} z-50`}>
        <Link to={"/"}>
          <img src={Logo} className=" md:w-[100px] md:h-auto w-[74px] h-[30px]" alt="" />
        </Link>
        <button onClick={toggleSidebar}>
          <HamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
