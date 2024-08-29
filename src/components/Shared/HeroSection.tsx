import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import HamburgerMenu from "../Icons/HamburgerMenu";
import { useState } from "react";
import Sidebar from "../Layout/Sidebar";
const HeroSection = ({page , breadcrumb} : {page:string; breadcrumb:string}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className='w-full lg:h-[400px] md:h-[300px] h-[180px] bg-about bg-no-repeat bg-cover bg-[75%_25%] '>
                  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="relative h-full container flex items-center justify-center w-full">
          <div className="flex items-center md:justify-start justify-between w-full px-5 absolute  md:top-10 top-5 ">
          <Link to={"/"}>            
          <img src={Logo} className=" md:w-[100px] md:h-auto w-[74px] h-[30px]" alt="" />
          </Link>
          <button onClick={toggleSidebar} className="md:hidden block">
            <HamburgerMenu/>
          </button>
          </div>
            <div className="md:mt-0 mt-5">
                <h1 className="uppercase  font-vissa lg:text-[95px] md:text-7xl text-[32px] text-center tracking-[0.04em] md:mb-5 mb-2.5 leading-none ">{page}</h1>
                <div className="flex justify-center cursor-pointer text-[#D0D0D0] font-houschka font-light md:text-lg text-xs gap-4 md:gap-10 uppercase">
                        <span>Home</span>
                        <span>/</span>
                        <span>{breadcrumb}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection