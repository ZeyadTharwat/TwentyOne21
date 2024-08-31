import Placeholder from "../../assets/BlogPlaceholder.png"
import Placeholder2 from "../../assets/BlogDetails.png"
import Placeholder3 from "../../assets/blog3.png"
import Placeholder4 from "../../assets/DesignDetails4.png"
import Placeholder5 from "../../assets/blog4.png"

const RelatedImages = () => {
  return (
    <div className="xl:min-w-[440px] lg:min-w-[33%] lg:w-auto w-full">
      <h1 className="font-vissa sm:mb-8 mb-5 md:text-start text-center md:text-[40px] sm:text-3xl text-2xl tracking-[0.02em] uppercase">Related Images</h1>
      <div className="lg:space-y-8 lg:block grid grid-cols-2 gap-y-3 gap-x-2">
        <img src={Placeholder}  className="w-[440px] xl:h-[343px] sm:h-[280px] sm:max-h-full object-cover max-h-[200px]" alt="" />
        <img src={Placeholder2}  className="w-[440px] xl:h-[343px] sm:h-[280px] sm:max-h-full object-cover max-h-[200px]" alt="" />
        <img src={Placeholder3}  className="w-[440px] xl:h-[343px] sm:h-[280px] sm:max-h-full object-cover max-h-[200px]" alt="" />
        <img src={Placeholder4}  className="w-[440px] xl:h-[343px] sm:h-[280px] sm:max-h-full object-cover max-h-[200px]" alt="" />
        <img src={Placeholder5}  className="w-[440px] xl:h-[343px] sm:h-[280px] sm:max-h-full object-cover max-h-[200px]" alt="" />
      </div>
    </div>
  )
}

export default RelatedImages