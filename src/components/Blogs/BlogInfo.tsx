import Placeholder from "../../assets/404.png"
import Placeholder2 from "../../assets/BlogPlaceholder2.png"
import QuoteFillIcon from "../Icons/QuoteFillIcon"
const BlogInfo = () => {
  return (
    <div className='w-full font-light font-houschka'>
        <div className="flex md:flex-col flex-col-reverse md:gap-5 gap-3 md:text-start text-center">
        <h1 className="font-vissa md:text-[40px] sm:text-3xl text-2xl tracking-[0.02em] uppercase">Sustainable Design: How to Create an Eco-Friendly Home</h1>
        <div className="flex md:text-base text-xs md:gap-8 md:justify-start justify-center md:flex-row flex-col">
            <span>Admin</span>
            <span>18 Feb 2023</span>
        </div>
        </div>
        <div className="md:text-xl sm:text-lg text-sm tracking-[0.01em] sm:mt-12 mt-6"> 
        <img src={Placeholder} className="w-full md:h-[500px] md:max-h-full h-full max-h-[450px] object-cover mb-5" alt="" />
        <div className="md:space-y-11 space-y-5">
        <p>
            An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.
            </p>
            <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work.</p>
        </div>
            <div className="flex w-full mt-14 mb-9">
            <img src={Placeholder} className="w-1/2 basis-1/2 sm:h-[600px] max-w-[400px] object-center object-cover" alt="" />
            <img src={Placeholder2} className="w-1/2 basis-1/2 sm:h-[600px] max-w-[400px] object-center object-cover" alt="" />
            </div>
            <div className="space-y-5">
            <p >An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>
            <p>An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>

            </div>
            <div className="flex justify-center mb-4 sm:mt-12 mt-6">
            <QuoteFillIcon/>
            </div>
            <p className="md:text-[26px] ">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>

        </div>
    </div>
  )
}

export default BlogInfo