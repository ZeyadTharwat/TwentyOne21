import Placeholder from "../../assets/404.png"
import Placeholder2 from "../../assets/BlogPlaceholder2.png"
import QuoteFillIcon from "../Icons/QuoteFillIcon"
const BlogInfo = () => {
  return (
    <div className='w-full font-light font-houschka'>
        <h1 className="font-vissa text-[40px] tracking-[0.02em] mb-5 uppercase">Sustainable Design: How to Create an Eco-Friendly Home</h1>
        <div className="flex gap-8">
            <span>Admin</span>
            <span>18 Feb 2023</span>
        </div>
        <div className="text-xl tracking-[0.01em] mt-12"> 
        <img src={Placeholder} className="w-full h-[500px] object-cover mb-5" alt="" />
            <p className="mb-11">
            An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.
            </p>
            <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.</p>
            <div className="flex w-full mt-14 mb-9">
            <img src={Placeholder} className="w-1/2 basis-1/2 h-[600px] object-center object-cover" alt="" />
            <img src={Placeholder2} className="w-1/2 basis-1/2 h-[600px] object-center object-cover" alt="" />
            </div>
            <p className="mb-5">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>
            <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>
            <div className="flex justify-center mb-4 mt-12">
            <QuoteFillIcon/>
            </div>
            <p className="text-[26px]">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>

        </div>
    </div>
  )
}

export default BlogInfo