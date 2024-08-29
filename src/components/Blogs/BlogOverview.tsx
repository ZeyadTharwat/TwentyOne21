import Placeholder from "../../assets/404.png"
import FacebookIcon2 from "../Icons/FacebookIcon2"
import LinkedInIcon2 from "../Icons/LinkedInIcon2"
import TwitterIcon from "../Icons/TwitterIcon"

const BlogOverview = () => {
  return (
    <div className="container py-24">
        <img src={Placeholder} className="h-[450px] w-full object-cover mb-14" alt="" />
        <div className="space-y-5 mb-10">
        <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.</p>
        <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>
        </div>
        <div className="bg-primary h-px w-[800px] "/>
        <div className="flex gap-8 mt-9 items-center">
            <span className=" font-light font-houschka">Social Share:</span>
        <div className="flex gap-5">
            <div className="transition-all duration-300 size-[30px] bg-[#393939] rounded-full flex items-center justify-center text-white hover:text-primary">
                <FacebookIcon2/>
            </div>
            <div className="transition-all duration-300 size-[30px] bg-[#393939] rounded-full flex items-center justify-center text-white hover:text-primary">
                <LinkedInIcon2/>
            </div>
            <div className="transition-all duration-300 size-[30px] bg-[#393939] rounded-full flex items-center justify-center text-white hover:text-primary">
                <TwitterIcon/>
            </div>

        </div>

        </div>
    </div>
  )
}

export default BlogOverview