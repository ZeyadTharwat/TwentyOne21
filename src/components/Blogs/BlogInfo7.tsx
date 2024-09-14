import Placeholder from "../../assets/Blogs/Blog7.png";
import QuoteFillIcon from "../Icons/QuoteFillIcon";
const BlogInfo7 = () => {
  return (
    <div className="w-full font-light font-houschka">
      <div className="flex md:flex-col flex-col-reverse md:gap-5 gap-3 md:text-start text-center">
        <h1 className="font-vissa md:text-[40px] sm:text-3xl text-2xl tracking-[0.02em] uppercase">
          Why UAE restaurant owners should consider brand development when designing F&B spaces.
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
          <p>Recognised design studio, TwentyOne06, suggests that within the dynamic realm of the UAE's hospitality industry, the importance of a designed brand experience is not an option when longevity is the goal.
          </p>
          <p>
            For restaurant owners, chefs, and hospitality industry leaders, the development of a restaurant’s brand identity alongside interior design stands as a strategic imperative, "it is a key differentiator in a fiercely competitive market", suggests Govind Shepley Creative Director and Founder of TwentyOne06.

          </p>
        </div>
        <div className="space-y-5 mt-8">
          <h1 className="text-3xl font-bold">Contextual significance within the UAE’s hospitality industry
          </h1>
          <p>
            In the current context, diners in the UAE are presented with many options. Therefore, having a distinctive identity and guest experience is crucial to establishing a unique identity and a loyal customer base in the region. This can be achieved through creating a storytelling narrative on a solid concept. This strategic imperative strengthens the brand's message, as well as reinforcing culture and ethos.

          </p>
          <p>
            Additionally, building an emotional connection with your target audience can help create a more profound and long-lasting relationship with customers. Restaurant owners and hospitality leaders building their concepts will have to take note of the importance of storytelling and creating a concept strong enough to lead its interior design direction and customer journey.

          </p>

        </div>
        <div className="space-y-5 mt-8">
          <h1 className="text-3xl font-bold">The role of developing a branding concept for F&B spaces:

          </h1>
          <p>
            Interior branding is a complex process that goes way beyond signage, colors, and pretty aesthetics. Every brand has a story to tell. And it is the interior designer who must translate this story into a physical environment. But, even before that, they need to learn every bit of it. And the learning part is as important as the design itself.

          </p>

        </div>
        <div className="space-y-5 mt-8">
          <h1 className="text-3xl font-bold">SEE MORE: TwentyOne06's branding-led interior design direction for Reif Othman's Nama Yoso.
          </h1>
          <p>
            Using this process gives a real opportunity to create a unique customer journey with hospitality interiors and the design will have an overwhelming impact on whether visitors return or choose to visit one of the other branches. Use branding to differentiate your business from the competition, if it is recognizable across several locations the public will come to associate the quality and consistency of the interior branding with the quality of your food or service. </p>
          <h1 className="text-3xl font-bold">"Design is the silent ambassador of your brand" - Paul Rand</h1>
            <p>
              For restaurant owners, this silent ambassadorship can be the linchpin in creating an atmosphere that not only resonates with the brand identity but also deeply connects with the target audience.

            </p>
            <p>Words by TwentyOne06's Story-teller.

            </p>
        </div>

        <div className="flex justify-center mb-4 sm:mt-12 mt-6">
          <QuoteFillIcon />
        </div>
      </div>
    </div>
  );
};

export default BlogInfo7;
