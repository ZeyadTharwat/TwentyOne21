import Placeholder from "../../assets/Blogs/Blog6.jpg"
import Placeholder3 from "../../assets/Blogs/Blog6-1.jpg"
import QuoteFillIcon from "../Icons/QuoteFillIcon"
const BlogInfo6 = () => {
  return (
    <div className='w-full font-light font-houschka'>
      <div className="flex md:flex-col flex-col-reverse md:gap-5 gap-3 md:text-start text-center">
        <h1 className="font-vissa md:text-[40px] sm:text-3xl text-2xl tracking-[0.02em] uppercase">Plate to perception - The marketing impact of a restaurant's interior design.        </h1>
        <div className="flex md:text-base text-xs md:gap-8 md:justify-start justify-center md:flex-row flex-col">
          <span>Admin</span>
          <span>18 Feb 2023</span>
        </div>
      </div>
      <div className="md:text-xl sm:text-lg text-sm tracking-[0.01em] sm:mt-12 mt-6">
        <img src={Placeholder} className="w-full md:h-[500px] md:max-h-full h-full max-h-[450px] object-cover mb-5" alt="" />
        <div className="md:space-y-11 space-y-5">
          <p>
            Where every bite competes for attention, restaurants are increasingly recognizing the importance of not only serving delicious cuisine but also providing diners with guest experience they will remember. At the forefront of this movement is the art of interior design and branding, which shape consumer perceptions and drive marketing success.
          </p>
          <h1 className="font-bold text-3xl">But what is it about a thoughtfully arranged space that speaks volumes to diners?
          </h1>
          <p>The answer lies in the subtle nuances of psychology. From the placement of tables to the choice of color palette, every aspect of restaurant design is carefully orchestrated to evoke specific emotions and behaviors.
          </p>
        </div>
        <div className="flex w-full mt-14 mb-9">
          <img src={Placeholder3} className="sm:h-[600px] w-full object-center object-cover" alt="" />
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-3xl">In his best-selling book 'Restaurant Excellence', Marvin Alballi states, "Your guests' journey to your restaurant (and their eyes' movement during that process plays an important role in their purchasing decisions."

          </h1>
          <h1 className="font-bold text-3xl">The Social Media Effect 

          </h1>
          <p>In the age of Instagram, where every meal is a photo op, a visually striking interior can be the difference between a fleeting glance and a viral sensation. Nowhere is the influence of restaurant design and branding more evident than in the realm of social media. From hashtag-worthy decor to Insta-worthy backdrops, restaurants that prioritize design not only attract foot traffic but also kick-start a digital buzz that is shared across cyberspace, amplifying reach and influence.

          </p>

        </div>
        <div className="flex justify-center mb-4 sm:mt-12 mt-6">
          <QuoteFillIcon />
        </div>
        <p className="md:text-[26px] ">An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work</p>

      </div>
    </div>
  )
}

export default BlogInfo6