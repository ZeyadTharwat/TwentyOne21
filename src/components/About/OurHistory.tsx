import HistoryImg from "../../assets/HistoryImg.png"
import ButtonVector from "../../assets/ButtonVector.svg"
import Historybg from "../../assets/HistoryBg.png"
const OurHistory = () => {
  return (
    <div className="bg-[#FFEADF] sm:py-32 py-16 lg:py-48 relative">
      <img src={Historybg} className="absolute inset-0 object-cover h-full" alt="" />
    <div className="container flex lg:gap-14 gap-12 lg:flex-row items-center flex-col-reverse">
        <div>
        <img src={HistoryImg} className='xl:max-w-[600px] sm:max-w-[460px] sm:min-w-[460px] sm:max-h-[676px] sm:min-h-[676px] xl:min-w-[600px] object-cover' alt="" />
        </div>
        <div className="text-black lg:text-start text-center lg:max-w-full max-w-2xl">
            <h1 className="sm:mb-5 mb-4 md:text-[68px] sm:text-5xl text-2xl tracking-[0.04em] font-vissa">Our History</h1>
            <p className="font-houschka sm:text-xl text-sm font-light sm:mb-7 mb-5">Govind Shepley founded TwentyOne06 in 2018 by himself. Without an office
            or full-time employees, Govind worked out of his appartment - numbered 2106, </p>
            <p className="font-houschka sm:text-xl text-sm font-light sm:mb-5 mb-8">6 years later and that passion for design and creativity manifested itself into
one of the most established Interior Design firms in the country We are
design challengers. By believing in ourselves and our work we strive to achieve
excellence in the world of design and elevate our clients' experiences.</p>
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