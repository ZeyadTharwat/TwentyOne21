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
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const isActive = (path: string): boolean => location.pathname === path;

  const links: LinkItem[] = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/portfolio", label: "portfolio" },
    { path: "/blogs", label: "blogs" },
    { path: "/contact-us", label: "contact us" },
  ];

  return (
    <motion.div
      className="flex flex-col bg-[#1A1A1A] fixed top-0 right-0 h-full shadow-lg p-5 w-full z-[9999999999999]"
      variants={sidebarVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 0.3 },
      }}
    >
      <button onClick={toggleSidebar} className="self-end relative z-50">
        <CloseIcon className="md:size-auto size-10" />
      </button>
      <img
        src={Philosophy}
        className="absolute md:bottom-0 top-0 w-full object-cover h-full right-0 opacity-[0.1]"
        alt="Philosophy"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={MenuImg} alt="Menu" />
        <div className="flex flex-col gap-y-8 absolute top-1/2 -translate-y-1/2 -left-1/4 min-w-[350px]">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-lato font-extralight text-3xl sm:text-[40px] md:text-[50px] stroked-text uppercase tracking-[3px] ${
                isActive(link.path) ? "text-white/40" : "text-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
