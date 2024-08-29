import PressPlaceholder from "../../assets/PressPlaceholder.png"
import Button from "../Shared/Button"
const ReportsSection = () => {
  return (
    <div className="container py-48">
        <p className="text-[#D0D0D0] font-light font-houschka text-[26px] mb-40 pb-5">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential</p>
        <div className="flex gap-[73px] items-center mb-40 pb-5">
        <div>
            <img src={PressPlaceholder} className="w-[601px] h-[466px] object-cover" alt="" />
        </div>
        <div>
            <h1 className="font-vissa uppercase text-[64px] tracking-[0.04em] mb-10">out the entire design</h1>
            <Button width={60} height={64} className="w-[300px]" textStyles="font-light font-houschka text-lg" title="out the entire design" />
        </div>
        </div>
        <div className="flex gap-[73px] items-center justify-between">
        <div>
            <h1 className="font-vissa uppercase text-[64px] tracking-[0.04em] mb-10">out the entire design</h1>
            <Button width={60} height={64} className="w-[300px]" textStyles="font-light font-houschka text-lg" title="out the entire design" />
        </div>
        <div>
            <img src={PressPlaceholder} className="w-[601px] h-[466px] object-cover" alt="" />
        </div>

        </div>

    </div>
  )
}

export default ReportsSection