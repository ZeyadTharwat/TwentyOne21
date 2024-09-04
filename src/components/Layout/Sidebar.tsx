import { motion, Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "../Icons/CloseIcon";
import MenuImg from "../../assets/MenuImg.png";
import Philosophy from "../../assets/Philosophy.jpg";

type LinkItem = {
  path: string;
  label: string;
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const sidebarVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "20%" },
  };

  const isActive = (path: string): boolean => location.pathname === path;

  const links: LinkItem[] = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/our-creations", label: "creations" },
    { path: "/blogs", label: "blogs" },
    { path: "/trend-reports", label: "Trend Reports" },
    { path: "/faqs", label: "faqs" },
    { path: "/contact-us", label: "contact us" },
  ];

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-[999999999999999999]"
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleSidebar}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      />
      <div className={`fixed  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  sm:w-auto w-[calc(100%_-_40px)] ${isOpen ? 'z-[9999999999]' : ''}`}>
        <motion.div
          className={` flex flex-col bg-[#1A1A1A] transform shadow-lg p-5  sm:w-[600px] sm:h-[900px] w-full h-[500px] rounded-[50px] ${isOpen ? 'pointer-events-auto z-[9999999999999999999]' : 'pointer-events-none z-[-1]'}`}
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <button onClick={toggleSidebar} className="self-end relative z-50">
            <CloseIcon className="md:size-14 size-10" />
          </button>
          <img
            src={Philosophy}
            className="absolute md:bottom-0 rounded-[50px] top-0 w-full object-cover h-full right-0 opacity-[0.1]"
            alt="Philosophy"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={MenuImg} alt="Menu" />
            <div className="flex flex-col sm:gap-y-5 gap-y-3 absolute top-1/2 -translate-y-1/2 sm:-left-1/4 -left-1/3 min-w-[470px]">
              {links.map((link) => (
                <Link
                  onClick={toggleSidebar}
                  key={link.path}
                  to={link.path}
                  className={`font-lato font-extralight text-[26px] sm:text-[40px] md:text-[50px] stroked-text uppercase tracking-[3px] ${
                    isActive(link.path) ? "text-white/40" : "text-transparent"
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
