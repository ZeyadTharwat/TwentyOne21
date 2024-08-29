import ReadyToWork from "../../assets/ReadyToWorkBg.jpg"
import Button from "../Shared/Button"
import PressPlaceholder from "../../assets/PressPlaceholder.png"
import Philosophy from "../../assets/Philosophy.jpg"

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
                <img src={PressPlaceholder} className=" lg:min-w-[558px] md:w-auto w-full md:min-w-[380px] lg:min-h-[348px] max-h-[270px] lg:max-w-[558px] md:max-w-[380px] lg:max-h-[348px] md:min-h-[270px] min-h-[195px] object-cover mb-3" alt="" />
                <div className="md:hidden block">
                <Button aspects="sm:size-auto size-9" dir="/project-details/1" title="Show More" height={48} textStyles="font-light text-[10px] sm:text-sm" className="sm:w-[140px] w-[100px]" width={44} />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="mb-2 text-3xl font-vissa uppercase tracking-[0.02em]">out the entire design</h1>
                  <p className="text-[#D0D0D0] font-houschka font-light  tracking-[0.02em] mb-3 mt-2">Aspernatur ex alias perspiciatis quas unde blanditiis corporis. Perferendis nemo totam omnis consectetur id quisquam dolore minus incidunt. Et fugiat et porro voluptas nobis veniam id aut. Nemo excepturi expedita nesciunt ratione. Sit tempora aut possimus quae dolores delectus et ducimus. Ut officiis et doloremque.</p>
                </div>
                <div className="md:block hidden">
                  <Button dir="/project-details/1" title="Show More" height={48} textStyles="font-light text-sm" className="w-[140px]" width={44} />
                </div>
              </div>
            </div>
            <div className="flex md:gap-4 gap-12 md:flex-row flex-col-reverse lg:gap-10 xl:gap-16 items-center md:text-start text-center">
              <div className="space-y-6 w-full">
                <img src={PressPlaceholder} className=" lg:min-w-[558px] md:w-auto w-full md:min-w-[380px] lg:min-h-[348px] max-h-[270px] lg:max-w-[558px] md:max-w-[380px] lg:max-h-[348px] md:min-h-[270px] min-h-[195px] object-cover mb-3" alt="" />
                <div className="md:hidden block">
                  <Button aspects="sm:size-auto size-9" dir="/project-details/1" title="Show More" height={48} textStyles="font-light text-[10px] sm:text-sm" className="sm:w-[140px] w-[100px]" width={44} />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="mb-2 text-3xl font-vissa uppercase tracking-[0.02em]">out the entire design</h1>
                  <p className="text-[#D0D0D0] font-houschka font-light  tracking-[0.02em] mb-3 mt-2">Aspernatur ex alias perspiciatis quas unde blanditiis corporis. Perferendis nemo totam omnis consectetur id quisquam dolore minus incidunt. Et fugiat et porro voluptas nobis veniam id aut. Nemo excepturi expedita nesciunt ratione. Sit tempora aut possimus quae dolores delectus et ducimus. Ut officiis et doloremque.</p>
                </div>
                <div className="md:block hidden">
                  <Button dir="/project-details/1" title="Show More" height={48} textStyles="font-light text-sm" className="w-[140px]" width={44} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default WorkSection