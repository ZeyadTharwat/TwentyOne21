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
        <div className="text-black lg:text-start text-center lg:max-w-full lg:w-1/2 lg:pr-4 px-4 max-w-2xl">
          <h1 className="sm:mb-5 mb-4 md:text-[68px] sm:text-5xl text-2xl tracking-[0.04em] font-vissa">From Apartment 2106 to a Powerhouse Design Studio

          </h1>
          <p className="font-houschka sm:text-xl text-sm font-light sm:mb-7 mb-5">In 2018, Govind Shepley turned apartment 2106 into the launchpad for what would
            become one of the most celebrated boutique interior design studios in the Middle East.
            At TwentyOne06, we’re more than just a design studio; we’re a team of design disruptors
            crafting experiences through strategic, human-centric design.
          </p>
          <p className="font-houschka sm:text-xl text-sm font-light sm:mb-5 mb-8">Today, we are synonymous with award-winning hospitality and F&B design, led by
            Govind’s signature approach: human-centric, storytelling-infused concepts. From
            collaborating with industry giants like Jumeirah and Marriott to working with Michelin-star
            chefs and delivering over 40 world-class projects, TwentyOne06’s journey is proof that big
            things often have humble beginnings.
          </p>
          <p className="font-houschka sm:text-xl text-sm font-light sm:mb-5 mb-8">Let’s just say, when you walk into a TwentyOne06-designed space, you’re walking into a
            story.
          </p>


          <button className="relative" dir="/contact-us">
            <span className="font-houschka font-light uppercase xl:text-lg sm:text-base text-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">Let Us Design Your Story</span>
            <img height={180} width={180} className='scale-x-[-1] xl:size-auto size-[90px] sm:size-[140px]' src={ButtonVector} alt="Button Vector" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurHistory
