import Philosophy from "../../assets/Philosophy.webp"
const ProjectDetail = () => {
  return (
    <div className="sm:py-28 relative py-16">
              <img src={Philosophy} className="absolute bottom-0 w-full object-cover h-full right-0 opacity-[0.07] " alt="" />
    
          <div className="container  text-center relative z-50">
      <h1 className="uppercase font-vissa tracking-[0.04em] lg:text-[68px] md:text-6xl sm:text-5xl text-4xl leadng-none">VOCO MONACO HOTEL      </h1>
      <p className="text-[#D0D0D0] max-w-[1411px] mx-auto font-houschka font-light md:text-xl sm:text-xl text-base">
  The VOCO™ Monaco Hotel refurbishment project in Dubai transforms the hotel into a vibrant destination, blending
  familiar comforts with unique elements. It offers a relaxed atmosphere for adult guests seeking vibrant social
  experiences and relaxation, following the brand philosophy of “Small Change, Big Impact.”
</p>
      <div className="flex sm:justify-between justify-center gap-3 gap-y-5 sm:flex-nowrap flex-wrap sm:mt-10 mt-7 lg:mt-16">
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="sm:text-[26px] text-sm leading-none"> Client
        </h1>
        <p className="sm:text-lg text-xs text-[#D0D0D0] leading-none">Voco Monaco</p>
      </div>
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="sm:text-[26px] text-sm leading-none">Location</h1>
        <p className="sm:text-lg text-xs text-[#D0D0D0] leading-none">The Heart of Europe</p>
      </div>
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="sm:text-[26px] text-sm leading-none">Date</h1>
        <p className="sm:text-lg text-xs text-[#D0D0D0] leading-none">February, 2023</p>
      </div>
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="sm:text-[26px] text-sm leading-none">Venue</h1>
        <p className="sm:text-lg text-xs text-[#D0D0D0] leading-none">Hotel Renovation</p>
      </div>

      </div>
    </div>

    </div>
  )
}

export default ProjectDetail