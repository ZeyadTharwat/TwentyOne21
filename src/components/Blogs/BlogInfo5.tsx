import Placeholder from "../../assets/Blogs/Blog5.png";
import QuoteFillIcon from "../Icons/QuoteFillIcon";
const BlogInfo5 = () => {
  return (
    <div className="w-full font-light font-houschka">
      <div className="flex md:flex-col flex-col-reverse md:gap-5 gap-3 md:text-start text-center">
        <h1 className="font-vissa md:text-[40px] sm:text-3xl text-2xl tracking-[0.02em] uppercase">
        "Can You Do This Quicker?" - Dubai Interior Designers answer the burning age-old question.
        </h1>
        <div className="flex md:text-base text-xs md:gap-8 md:justify-start justify-center md:flex-row flex-col">
          <span>Admin</span>
          <span>18 Feb 2023</span>
        </div>
      </div>
      <div className="md:text-xl sm:text-lg text-sm tracking-[0.01em] sm:mt-12 mt-6">
        <img
          src={Placeholder}
          className="w-full md:h-[500px] md:max-h-full h-full max-h-[450px] object-cover mb-5"
          alt=""
        />
        <div className="md:space-y-11 space-y-5">
          <p>As designers, we're no strangers to this age-old query. It's a fair question—after all, who doesn't want to see their design dreams materialize in record time? 
          </p>
          <p>
          But let's take a moment to peel back the layers and ask the experts why good things take time in the world of #restaurantdesign.
          </p>
        </div>
        <div className="space-y-5 mt-8">
          <h1 className="text-3xl font-bold">Govind Shepley's Take<br/>
Creative Director and Founder of TwentyOne06</h1>
          <p>
          "Empathizing with this sort of request allows us to work around that and set reasonable expectations concerning the timeline."
          </p>
          <p>
          Wearing multiple hats comes naturally to Govind, our Creative Director and Founder. He's all about empathizing with clients' tight deadlines while still keeping an eye on the big picture. Whether it's understanding the urgency behind a hotel's launch or deciphering the bottom line for a bustling eatery, Govind's knack for seeing things from all angles helps us strike that delicate balance between speed and substance.
          </p>
          <p>
          At TwentyOne06, the core of every design project lies a story— a narrative, underpinnings from extensive research required to finalize a design concept. Crafting this narrative isn't just about picking out paint colors; it's about tapping into the heartbeat of the brand and translating it into a physical space.
          </p>

        </div>
        <div className="space-y-5 mt-8">
          <h1 className="text-3xl font-bold">Mike Kobzar's Spin          <br/>
          Lead Branding Designer at TwentyOne06
          </h1>
          <p>
          "Designer's usually find themselves in places having to explain their process, how it needs to take the necessary time alloted to allow for creativity."
          </p>
          <p>
          Educating clients on the nuances of branding is a key part of Mike's gig. It's not just about slapping a logo on the wall; it's about crafting an experience that sings the restaurant's story from every corner. From delving deep into trend reports to brainstorming concepts that'll stand the test of time, Mike's philosophy is all about the 80/20 rule: 80% thinking, 20% designing.
          </p>

        </div>
        <div className="space-y-5 mt-8">
          <h1 className="text-3xl font-bold">But here's the kicker: greatness can't be rushed.          </h1>
          <p>
          From researching the pulse of the market to weaving together threads of culture and history, our design journey is anything but ordinary. Each decision—from the layout of the space to the texture of the napkins—showcases our commitment to designing an experience, not just a space. And speaking of experience, that's where the magic truly happens. From the moment guests step through the door to the final flourish of dessert, every sight, sound, and sensation is carefully curated to whisk them away.
          </p>
          <p>
          Of course, this doesn't mean we can't stick to deadlines. We pride ourselves on our efficiency and dedication to meeting our clients' needs. However, clients need to understand that great design takes time. We can only deliver our best work when we're given the time and space to do so. So while we're more than capable of meeting deadlines, let's work together to set realistic expectations. Don't try to fast-track the process; trust us to deliver excellence at a pace that allows for creativity to flourish. 
          </p>
          <p>So sit back, relax, and let us work our magic.
          </p>
        </div>

        <div className="flex justify-center mb-4 sm:mt-12 mt-6">
          <QuoteFillIcon />
        </div>
        <p className="md:text-[26px] ">
          An interior design agency can create content that showcases its work,
          highlights design trends, and provides educational resources for
          clients and followers. Some potential content ideas for an interior
          design agency. An interior design agency can create content that
          showcases its work
        </p>
      </div>
    </div>
  );
};

export default BlogInfo5;
