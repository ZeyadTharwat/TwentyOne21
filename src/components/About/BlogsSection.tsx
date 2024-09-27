import { Link } from "react-router-dom"
import Button from "../Shared/Button"
import ArrowIcon from "../Icons/ArrowIcon"
import { Swiper, SwiperSlide } from "swiper/react";
import BlogPlaceholder from "../../assets/Blogs/Blog1.jpg";
import Blog2 from "../../assets/Blogs/Blog2.png";
import Blog3 from "../../assets/Blogs/Blog3.png";
import Blog4 from "../../assets/Blogs/Blog4.png";
import Blog5 from "../../assets/Blogs/Blog5.png";
import Blog6 from "../../assets/Blogs/Blog6.jpg";
import Blog7 from "../../assets/Blogs/Blog7.png";

const blogs = [
  {id:1, img: BlogPlaceholder, title: "Responsible Design" },
  {id:2, img: Blog2, title: "Design storytelling/press at TwentyOne06 - 2024 for far." },
  {id:3, img: Blog3, title: "How the F&B industry ignites hyper-responsiveness and adaptability in design" },
  {id:4, img: Blog4, title: "Harnessing the 'Power of Weird' in Design Thinking" },
  {id:5, img: Blog5, title: '"Can You Do This Quicker?" - Dubai Interior Designers answer the burning age-old question.' },
  {id:6, img: Blog6, title: "Plate to perception - The marketing impact of a restaurant's interior design." },
  {id:7, img: Blog7, title: "Why UAE restaurant owners should consider brand development when designing F&B spaces." },
];


const BlogsSection = () => {
  return (
    <div className="lg:py-40 md:py-32 sm:py-24 pt-16 pb-[100px]">
      <div className="container">
        <div className="flex md:justify-between justify-center items-center mb-12">
          <h1 className="2xl:text-6xl lg:text-5xl sm:text-4xl text-2xl md:text-start text-center tracking-[0.02em] font-vissa uppercase">
            Sharing Our Knowledge and Passion<br /> for Interiors
          </h1>
          <div className="md:block hidden">
            <Button dir="/blogs" title="view all blogs" width={60} height={64} className="w-[200px]" textStyles="text-lg font-light" />
          </div>
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 18,
            },

            768: {
              slidesPerView: 2  ,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
          }}          
          pagination={{ clickable: true }}
        >
          {blogs.map((blog) => (
            <SwiperSlide className="bg-[#0E0E0E] !h-auto" key={blog.id}>
              <Link to={`/blog-details/${blog.id}`} className="group">
              <img className="w-full lg:max-h-[300px] lg:h-[300px] sm:h-[250px] sm:max-h-[250px] h-[180px] max-h-[180px]" src={blog.img} alt="" />
                <div className="py-7 md:py-14 px-6 lg:pl-10 lg:pr-14  my-1.5">
                  <h1 className="font-vissa text-sm sm:text-[22px] tracking-[0.02em] mb-4 sm:mb-9 group-hover:text-primary duration-300 transition-all">
                    {blog.title}
                  </h1>
                  <div className="h-1 w-5 bg-primary sm:mb-6 mb-4 sm:mt-7" />
                  <Link
                    to={`/blog-details/${blog.id}`}
                    className="flex group-hover:text-primary items-center gap-1.5 sm:gap-0.5 font-light font-houschka text-[10px] sm:text-lg uppercase"
                  >
                    Learn More
                    <ArrowIcon className="group-hover:ml-5 duration-300 sm:size-auto w-3 transition-all group-hover:text-primary" />
                  </Link>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden flex justify-center mt-8">
          <Button aspects="sm:size-auto size-9" dir="/blogs" title="view all blogs" width={60} height={64} className="sm:w-[200px] w-[120px]" textStyles="sm:text-lg text-[10px] font-light" />
        </div>

      </div>
    </div>
  )
}

export default BlogsSection