import PressPlaceholder from "../../assets/PressPlaceholder.png"
import PressPlaceholder2 from "../../assets/Creation4.jpg"

import Button from "../Shared/Button"
const ReportsSection = () => {
    return (
        <div className="md:container xl:py-48 lg:py-36 md:py-28 sm:py-20 py-14">
            <p className="text-[#D0D0D0] font-light font-houschka lg:text-[26px] md:text-xl sm:text-lg  xl:mb-40 lg:mb-28 md:mb-20 mb-16 lg:pb-5 text-center md:px-0 px-5">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential</p>
            <div className="flex xl:gap-[73px] lg:gap-12 gap-8 items-center lg:mb-40 md:mb-32 lg:pb-5 mb-16 lg:flex-row flex-col-reverse">
                <div className="flex flex-col items-center md:w-auto w-full">
                    <img src={PressPlaceholder} className="md:w-[601px] w-full sm:h-[466px] min-h-[240px] sm:max-h-full max-h-[320px] object-cover" alt="" />
                    <div className="lg:hidden block sm:mt-8 mt-6">
                        <Button aspects="sm:size-auto size-9" width={60} height={64} className="sm:w-[260px] w-[150px]" textStyles="font-light font-houschka sm:text-lg text-[10px]" title="out the entire design" />
                    </div>
                </div>
                <div>
                    <h1 className="font-vissa uppercase lg:text-6xl md:text-5xl sm:text-4xl text-[32px] xl:text-[64px] tracking-[0.04em] lg:mb-10">out the entire design</h1>
                    <div className="lg:block hidden">
                        <Button width={60} height={64} className="w-[300px]" textStyles="font-light font-houschka text-lg" title="out the entire design" />
                    </div>
                </div>
            </div>
            <div className="flex xl:gap-[73px] lg:gap-12 gap-8 items-center justify-between lg:flex-row flex-col">
                <div>
                    <h1 className="font-vissa uppercase lg:text-6xl md:text-5xl sm:text-4xl text-[32px] xl:text-[64px] tracking-[0.04em] lg:mb-10">out the entire design</h1>
                    <div className="lg:block hidden">
                        <Button width={60} height={64} className="w-[300px]" textStyles="font-light font-houschka text-lg" title="out the entire design" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:w-auto w-full">
                    <img src={PressPlaceholder2} className="md:w-[601px] w-full sm:h-[466px] min-h-[240px] sm:max-h-full max-h-[320px] object-cover" alt="" />
                    <div className="lg:hidden block sm:mt-8 mt-6">
                        <Button aspects="sm:size-auto size-9" width={60} height={64} className="sm:w-[260px] w-[150px]" textStyles="font-light font-houschka sm:text-lg text-[10px]" title="out the entire design" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ReportsSection