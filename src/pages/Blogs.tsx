import BlogCard from "../components/Blogs/BlogCard";
import ArrowIcon from "../components/Icons/ArrowIcon";
import BlogBg from "../assets/CreationsBg.png";
import BlogsBg2 from "../assets/BlogsBg.svg";
import BlogPlaceholder from "../assets/BlogPlaceholder.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/DesignDetails4.png";
import Blog5 from "../assets/blog4.png";

const Blogs = () => {
  const blogData = [
    { img: BlogPlaceholder, title: "Sustainable Design: How to Create" },
    { img: Blog2, title: "Sustainable Design: How to Create" },
    { img: Blog3, title: "Sustainable Design: How to Create" },
    { img: Blog4, title: "Sustainable Design: How to Create" },
    { img: Blog5, title: "Sustainable Design: How to Create" },
    { img: Blog4, title: "Sustainable Design: How to Create" },
  ];

  return (
    <div className="md:py-44 py-24 bg-[#FFEADF] text-black relative">
      <img
        src={BlogBg}
        className="absolute top-1/2 -translate-y-1/2 opacity-70 right-0 scale-x-[-1] w-full"
        alt=""
      />
      <div className="text-center md:mb-28 mb-12 px-5">
        <h1 className="font-vissa lg:text-[95px] sm:text-7xl text-[68px] tracking-[0.04em] leading-none mb-4 uppercase">
          Blog Page
        </h1>
        <p className="tracking-[0.06em] md:text-3xl text-lg font-houschka font-light">
          An interior design agency can create
        </p>
      </div>
      <div className="relative">
        <img src={BlogsBg2} className="absolute -top-14 left-0" alt="" />
        <div className="grid container lg:grid-cols-3 sm:grid-cols-2 xl:gap-x-14 md:gap-x-8 gap-x-4 xl:gap-y-16 md:gap-y-12 gap-y-8 mb-20 relative">
          {blogData.map((blog, index) => (
            <BlogCard img={blog.img} title={blog.title} key={index} />
          ))}
        </div>
        <div className="flex md:gap-16 gap-9 justify-center px-5">
          <button className="flex items-center gap-2">
            <ArrowIcon className="rotate-180 sm:size-auto w-2.5" />{" "}
            <span className="uppercase font-light text-xs md:text-lg font-houschka">
              previous
            </span>
          </button>
          <div className="flex md:gap-7 gap-4">
            <button className="font-light md:text-[22px] text-base font-houschka text-primary">01</button>
            <button className="font-light md:text-[22px] text-base font-houschka">02</button>
            <button className="font-light md:text-[22px] text-base font-houschka">03</button>
          </div>
          <button className="flex items-center gap-1 sm:gap-2">
            <span className="uppercase font-light text-xs md:text-lg font-houschka">
              Next
            </span>{" "}
            <ArrowIcon className="sm:size-auto w-2.5" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
