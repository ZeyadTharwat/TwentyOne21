import Placeholder from "../../assets/BlogPlaceholder.png"
const RelatedImages = () => {
  return (
    <div className="min-w-[440px]">
      <h1 className="font-vissa mb-8 text-[40px] tracking-[0.02em] uppercase">Related Images</h1>
      <div className="space-y-8">
        <img src={Placeholder}  className="w-[440px] h-[343px]" alt="" />
        <img src={Placeholder}  className="w-[440px] h-[343px]" alt="" />
        <img src={Placeholder}  className="w-[440px] h-[343px]" alt="" />
        <img src={Placeholder}  className="w-[440px] h-[343px]" alt="" />
        <img src={Placeholder}  className="w-[440px] h-[343px]" alt="" />
      </div>
    </div>
  )
}

export default RelatedImages