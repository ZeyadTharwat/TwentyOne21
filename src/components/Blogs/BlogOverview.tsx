import Placeholder from "../../assets/404.png"
import FacebookIcon2 from "../Icons/FacebookIcon2"
import LinkedInIcon2 from "../Icons/LinkedInIcon2"
import TwitterIcon from "../Icons/TwitterIcon"

const BlogOverview = () => {
  return (
    <div className="container sm:py-24 py-10">
        <img src={Placeholder} className="sm:h-[450px] max-h-[300px] sm:max-h-full w-full object-cover sm:mb-14 mb-8" alt="" />
        <div className="space-y-5 sm:mb-10 mb-5 sm:text-base text-base">
        <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.</p>
        <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>
        </div>
        <div className="bg-primary h-px w-full max-w-[800px] "/>
        <div className="flex sm:gap-8 gap-5 sm:mt-9 mt-5 items-center">
            <span className=" font-light font-houschka">Social Share:</span>
        <div className="flex sm:gap-5 gap-3">
            <div className="transition-all duration-300 size-5 sm:size-[30px] bg-[#393939] rounded-full flex items-center justify-center text-white hover:text-primary">
                <FacebookIcon2 className="sm:size-auto size-3"/>
            </div>
            <div className="transition-all duration-300 size-5 sm:size-[30px] bg-[#393939] rounded-full flex items-center justify-center text-white hover:text-primary">
                <LinkedInIcon2 className="sm:size-auto size-3"/>
            </div>
            <div className="transition-all duration-300 size-5 sm:size-[30px] bg-[#393939] rounded-full flex items-center justify-center text-white hover:text-primary">
                <TwitterIcon className="sm:size-auto size-3"/>
            </div>

        </div>

        </div>
    </div>
  )
}

export default BlogOverview