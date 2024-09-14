import HistoryImg from "../../assets/Govind - Head shot.png"
import ButtonVector from "../../assets/ButtonVector.svg"
import Historybg from "../../assets/HistoryBg.png"
const OurHistory = () => {
  return (
    <div className="bg-[#FFEADF] lg:h-[1100px] lg:py-0 pt-20 relative">
      <img src={Historybg} className="absolute inset-0 object-cover h-full" alt="" />
    <div className="flex xl:gap-14 lg:gap-7 gap-12 h-full lg:flex-row items-center flex-col-reverse">
        <div className="lg:w-1/2 h-full">
        <img src={HistoryImg} className='h-full w-full object-cover object-[75%_25%] relative z-50' alt="" />
        </div>
        <div className="text-black lg:text-start text-center lg:max-w-full lg:w-1/2 lg:px-0 px-4 max-w-2xl">
            <h1 className="sm:mb-5 mb-4 md:text-[68px] sm:text-5xl text-2xl tracking-[0.04em] font-vissa">Discover the Essence of Design Excellence with TwentyOne06
            </h1>
            <p className="font-houschka sm:text-xl text-sm font-light sm:mb-7 mb-5">Founded by Govind Shepley, who honed his craft in Central London before gaining global experience in Belgium, Spain, and the GCC, our boutique studio blends over 20 years of combined expertise with a deep understanding of the end user. 
            </p>
            <p className="font-houschka sm:text-xl text-sm font-light sm:mb-5 mb-8">Shepley’s vision, coupled with his commitment to pushing boundaries, ensures that no two projects are alike, each crafted to create a distinct brand identity. As a designer and business owner, Shepley is dedicated to personal and professional growth, fostering an environment where innovation thrives and his team excels. Today, TwentyOne06 continues to expand, breaking into new industries such as hotel design and sustainable development, while always remaining focused on delivering groundbreaking, globally recognized work.
            </p>
<button className="relative">
                <span className="font-houschka font-light uppercase xl:text-lg sm:text-base text-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">Contact Us</span>
                <img height={180} width={180} className='scale-x-[-1] xl:size-auto size-[90px] sm:size-[140px]' src={ButtonVector} alt="Button Vector" />
                </button>
        </div>
    </div>
    </div>
  )
}

export default OurHistory