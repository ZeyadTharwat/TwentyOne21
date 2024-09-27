import { motion, Variants } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashedBorder from "../../assets/Dashedborder.png";
import { useEffect } from "react";

type LinkItem = {
  path: string;
  label: string;
  onClick?: () => void;  // Optional onClick for services
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "20%" },
  };

  const isActive = (path: string): boolean => location.pathname === path;

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

const handleServicesClick = () => {
  // Check if already on the home page
  if (location.pathname === "/") {
    const servicesSection = document.getElementById("Services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    navigate("/");
  }
};
  console.log('location.hash',location.hash)
useEffect(() => {
  if (location.hash === "#services") {
    const servicesSection = document.getElementById("Services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  const links: LinkItem[] = [
    { path: "/our-creations", label: "Our Creations" },
    { 
      path: "/#services", 
      label: "Services", 
      onClick: () => {
        handleServicesClick();
      },
    },
    { path: "/trend-reports", label: "Trend Reports" },
    { path: "/press", label: "Press" },
  ];

  const links2: LinkItem[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/blogs", label: "Blogs" },
    { path: "/faqs", label: "FAQs" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-[99999999999999999999999]"
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleSidebar}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      />
      <div
        className={`fixed sm:w-auto w-[calc(100%_-_40px)] ${isOpen ? "z-[9999999999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" : "top-[999999999999999px] left-[9999999999px]"
          }`}
      >
        <motion.div
          className={`flex flex-col transform shadow-lg lg:w-[500px] md:w-[700px] sm:w-[600px] sm:h-[600px] w-full h-[500px] rounded-xl ${isOpen ? "pointer-events-auto z-[9999999999999999999]" : "pointer-events-none z-[-1]"
            }`}
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <img src={DashedBorder} className="absolute z-50 h-full w-full rounded-xl" />
          <div className="absolute top-1/2 left-1/2 z-[51] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col text-center min-w-[470px] sm:mb-16 mb-12">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    toggleSidebar();
                    if (link.onClick) link.onClick();
                  }}
                  className={`font-vissa hover:text-primary duration-300 transition-all font-extralight md:text-6xl text-4xl uppercase ${isActive(link.path) ? "text-primary" : "text-black"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col text-center sm:space-y-3 space-y-1.5 min-w-[470px]">
              {links2.map((link) => (
                <Link
                  onClick={toggleSidebar}
                  key={link.path}
                  to={link.path}
                  className={`sm:text-2xl hover:text-primary duration-300 transition-all font-semibold uppercase ${isActive(link.path) ? "text-primary" : "text-black"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
