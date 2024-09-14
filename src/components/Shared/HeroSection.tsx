import { Link } from "react-router-dom";

const HeroSection = ({page , breadcrumb , back} : {page:string; breadcrumb:string , back?:string}) => {

  return (
    <div className='w-full lg:h-[400px] md:h-[300px] h-[180px] bg-about bg-no-repeat bg-cover bg-[75%_25%] '>
        <div className="relative h-full container flex items-center justify-center w-full">
            <div className="md:mt-0 mt-5">
                <h1 className="uppercase  font-vissa lg:text-[95px] md:text-7xl text-[32px] text-center tracking-[0.04em] md:mb-5 mb-2.5 leading-none ">{page}</h1>
                <div className="flex justify-center cursor-pointer text-[#D0D0D0] font-houschka font-light md:text-lg text-xs gap-4 md:gap-10 uppercase">
                        <Link to={'/'}>Home</Link>
                        <span>/</span>
                        <Link to={back ? `${back}` : '#'}>{breadcrumb}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection