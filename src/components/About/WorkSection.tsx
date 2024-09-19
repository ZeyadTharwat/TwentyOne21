import ReadyToWork from "../../assets/ReadyToWorkBg.jpg"
import Button from "../Shared/Button"
import Press1 from "../../assets/Press - Cover Photos/Interior Design Concept of the Year Hotel.jpg"
import Philosophy from "../../assets/Philosophy.webp"
import Press2 from "../../assets/Press - Cover Photos/Interior-Design-Concept-of-the-Year-Hotel-Voco-Monaco-Dubai-TwentyOne06-1000x750 (1).jpg"
const WorkSection = () => {
  return (
    <div className="sm:pt-24 pt-16 lg:pt-36 relative overflow-hidden">
      <img src={Philosophy} className="absolute md:bottom-0 top-0 w-full object-cover md:h-[1448px] right-0 opacity-[0.07] " alt="" />

      <div className="container">
        <div className="relative w-full sm:mb-32 mb-16 lg:mb-40">
                <div className="absolute inset-0 w-full h-full bg-black/45"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col w-full">
                <h1 className=" font-vissa lg:text-6xl sm:text-4xl text-[28px] tracking-[0.04em] sm:mb-7 uppercase">Ready to Work Together?</h1>
                <Button aspects="sm:size-auto size-8" width={60} height={64} title="Build together" textStyles="font-light text-[10px] sm:text-lg" className="sm:w-[210px] w-[115px]"/>
                </div>
                <img src={ReadyToWork} className="w-full md:h-[444px] sm:h-[300px] h-[200px] object-cover" alt="" />
            </div>
        <div>
          <h1 className="lg:text-6xl sm:text-4xl text-[28px] md:text-5xl tracking-[0.02em] md:text-start text-center mb-8 sm:mb-12 font-vissa uppercase">
            Milestones that We Are Proud <br /> of Reaching
          </h1>
          <div className="grid grid-cols-1 sm:gap-10 gap-16 max-w-[1332px] mx-auto relative z-50">
            <div className="flex md:gap-4 gap-12 md:flex-row flex-col-reverse lg:gap-10 xl:gap-16 items-center md:text-start text-center">
              <div className="space-y-6 w-full">
                <img src={Press1} className=" lg:min-w-[558px] md:w-auto w-full md:min-w-[380px] lg:min-h-[348px] max-h-[270px] lg:max-w-[558px] md:max-w-[380px] lg:max-h-[348px] md:min-h-[270px] min-h-[195px] object-cover mb-3" alt="" />
                <div className="md:hidden block">
                <Button aspects="sm:size-auto size-9" dir="/project-details/1" title="Show More" height={48} textStyles="font-light text-[10px] sm:text-sm" className="sm:w-[140px] w-[100px]" width={44} />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="mb-2 text-3xl font-vissa uppercase tracking-[0.02em]">Trophy time: CID Award-winners strike a pose</h1>
                  <p className="text-gray-400 text-sm font-houschka font-light  tracking-[0.02em]">Featured on (Commercial Interior Design)</p>
                  <p className="text-[#D0D0D0] font-houschka font-light  tracking-[0.02em] mb-3 mt-2">TwentyOne06 has once again solidified its position as a leader in innovative design by winning the prestigious "Interior Design Concept of the Year: Hotel" award at the 2024 CID Awards. The recognition was for their exceptional work on Voco Monaco Dubai, showcasing their ability to blend creativity with functionality in the competitive hospitality sector. This accolade highlights TwentyOne06's commitment to pushing the boundaries of design while delivering commercially successful projects that resonate globally.
                  </p>
                </div>
                <div className="md:block hidden">
                  <Button dir="https://www.commercialinteriordesign.com/news/trophy-time-cid-award-winners-strike-a-pose
" title="Show More" height={48} textStyles="font-light text-sm" className="w-[140px]" width={44} />
                </div>
              </div>
            </div>
            <div className="flex md:gap-4 gap-12 md:flex-row flex-col-reverse lg:gap-10 xl:gap-16 items-center md:text-start text-center">
              <div className="space-y-6 w-full">
                <img src={Press2} className=" lg:min-w-[558px] md:w-auto w-full md:min-w-[380px] lg:min-h-[348px] max-h-[270px] lg:max-w-[558px] md:max-w-[380px] lg:max-h-[348px] md:min-h-[270px] min-h-[195px] object-cover mb-3" alt="" />
                <div className="md:hidden block">
                  <Button aspects="sm:size-auto size-9" dir="/project-details/1" title="Show More" height={48} textStyles="font-light text-[10px] sm:text-sm" className="sm:w-[140px] w-[100px]" width={44} />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="mb-2 text-3xl font-vissa uppercase tracking-[0.02em]">On stage: The CID Awards 2024 MENA winners 
                  </h1>
                  <p className="text-gray-400 text-sm font-houschka font-light  tracking-[0.02em]">Featured on (Commercial Interior Design)</p>
                  <p className="text-[#D0D0D0] font-houschka font-light  tracking-[0.02em] mb-3 mt-2">At the 18th annual CID Awards: MENA, TwentyOne06 was honored with the prestigious "Interior Design Concept of the Year: Hotel" award. Celebrated at Madinat Jumeirah on September 4, 2024, the event recognized TwentyOne06's exceptional work on the Voco Monaco Dubai project. Competing against over 700 nominations, the award highlights the ability to blend innovation and functionality in hospitality design, cementing their status as leaders in the industry.
                  </p>
                </div>
                <div className="md:block hidden">
                  <Button dir="https://www.commercialinteriordesign.com/news/on-stage-the-cid-awards-2024-mena-winners
" title="Show More" height={48} textStyles="font-light text-sm" className="w-[140px]" width={44} />
                </div>
              </div>
            </div>

          </div>
          <div className="flex justify-center md:mt-20 mt-10">
                    <Button aspects="sm:size-auto size-9" dir="/press" textStyles="sm:text-lg text-xs" title="View All Press" className="sm:w-[235px] w-[150px]" />

                </div>

        </div>
      </div>
    </div>
  )
}

export default WorkSection