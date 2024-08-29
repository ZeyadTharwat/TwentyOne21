import Philosophy from "../../assets/Philosophy.jpg"
const ProjectDetail = () => {
  return (
    <div className="py-28 relative">
              <img src={Philosophy} className="absolute bottom-0 w-full object-cover h-full right-0 opacity-[0.07] " alt="" />
    
          <div className="container  text-center">
      <h1 className="uppercase font-vissa tracking-[0.04em] text-[68px] leadng-none">Interior Design</h1>
      <p className="text-[#D0D0D0] max-w-[1411px] mx-auto font-houschka font-light text-2xl">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers.</p>
      <div className="flex justify-between mt-16">
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="text-[26px] leading-none">Client</h1>
        <p className="text-lg text-[#D0D0D0] leading-none">NAMA YOSO</p>
      </div>
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="text-[26px] leading-none">Location</h1>
        <p className="text-lg text-[#D0D0D0] leading-none">Mirdif Avenue Mall, Dubai </p>
      </div>
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="text-[26px] leading-none">Date</h1>
        <p className="text-lg text-[#D0D0D0] leading-none">18-5-2023</p>
      </div>
      <div className=" font-houschka space-y-2.5 font-light">
        <h1 className="text-[26px] leading-none">Venue :</h1>
        <p className="text-lg text-[#D0D0D0] leading-none">Restaurants</p>
      </div>

      </div>
    </div>

    </div>
  )
}

export default ProjectDetail