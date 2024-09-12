import Placeholder from "../../assets/Blogs/Blog1.jpg"
import QuoteFillIcon from "../Icons/QuoteFillIcon"
const BlogInfo = () => {
  return (
    <div className='w-full font-light font-houschka'>
        <div className="flex md:flex-col flex-col-reverse md:gap-5 gap-3 md:text-start text-center">
        <h1 className="font-vissa md:text-[40px] sm:text-3xl text-2xl tracking-[0.02em] uppercase">Responsible Design: Why we turn down design projects that do not last</h1>
        <div className="flex md:text-base text-xs md:gap-8 md:justify-start justify-center md:flex-row flex-col">
            <span>Admin</span>
            <span>18 Feb 2023</span>
        </div>
        </div>
        <div className="md:text-xl sm:text-lg text-sm tracking-[0.01em] sm:mt-12 mt-6"> 
        <img src={Placeholder} className="w-full md:h-[500px] md:max-h-full h-full max-h-[450px] object-cover mb-5" alt="" />
        <div className="md:space-y-11 space-y-5">
        <p>
        "Saying no to potential projects isn’t easy, especially in a competitive industry. But we believe sticking to our principles and focusing on sustainability is more important than quick wins." says Govind Shepley, Creative Director and Founder of TwentyOne06.
        </p>
            <p>When a design project doesn't meet our standards for durability and sustainability... We pass. 
            </p>
        </div>
            <div className="space-y-5">
            <p >At TwentyOne06, we know hashtag#sustainability in interior design goes beyond just picking eco-friendly materials. While that's a crucial part of what we do, our commitment to sustainability runs much deeper, shaping how we choose and approach our projects. ✅
            </p>
            <p>In the fast-paced world of hashtag#interiordesign, trends come and go. But we focus on projects that are not only stylish but also timeless. We believe the most sustainable designs are those that stand the test of time, both in looks and function. By creating spaces that last, we cut down on the need for frequent renovations, which means less waste and fewer resources used.
            </p>
            <p>Our brand is all about quality and responsibility. We’re proud of those values. So, when a project doesn't meet our standards for durability and sustainability, we pass. This careful selection means our design portfolio truly reflects our commitment to responsible design.

            </p>
            <p> By turning down projects that don't align with our values or won't have a lasting positive impact, we maintain our integrity and contribute to a more sustainable future.
            </p>
            <p>By holding fast to these principles, we not only create spaces that are functional and beautiful but also help make the design industry more sustainable and responsible.
            </p>

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