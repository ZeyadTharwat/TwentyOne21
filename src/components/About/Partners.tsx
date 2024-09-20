import Partner1 from "../../assets/Partners/Partner (1).png";
import Partner2 from "../../assets/Partners/Partner (2).png";
import Partner3 from "../../assets/Partners/Partner (3).png";
import Partner4 from "../../assets/Partners/Partner (4).png";
import Partner5 from "../../assets/Partners/Partner (5).png";
import Partner6 from "../../assets/Partners/Partner (6).png";
import Partner7 from "../../assets/Partners/Partner (7).png";
import Partner8 from "../../assets/Partners/Partner (8).png";
import Partner9 from "../../assets/Partners/Partner (9).png";
import Partner10 from "../../assets/Partners/Partner (10).png";
import Partner11 from "../../assets/Partners/Partner (11).png";
import Partner12 from "../../assets/Partners/Partner (12).png";
import Partner13 from "../../assets/Partners/Partner (13).png";
import Partner14 from "../../assets/Partners/Partner (14).png";
import Partner15 from "../../assets/Partners/Partner (15).png";

const partners = [
  { src: Partner1, alt: "Partner 1" },
  { src: Partner2, alt: "Partner 2" },
  { src: Partner3, alt: "Partner 3" },
  { src: Partner4, alt: "Partner 4" },
  { src: Partner5, alt: "Partner 5" },
  { src: Partner6, alt: "Partner 6" },
  { src: Partner7, alt: "Partner 7" },
 // { src: Partner8, alt: "Partner 8" },
  { src: Partner9, alt: "Partner 9" },
  { src: Partner10, alt: "Partner 10" },
  { src: Partner11, alt: "Partner 11" },
  { src: Partner12, alt: "Partner 12" },
  { src: Partner13, alt: "Partner 13" },
  { src: Partner14, alt: "Partner 14" },
  { src: Partner15, alt: "Partner 15" },
];

const Partners = () => {
  return (
    <div className="w-full  bg-[#1A1A1A] relative">
      <div className="w-full h-full gradient-border absolute "></div>
      <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
      <div className="gradient-bg h-full w-full absolute inset-0"></div>
      <div className=" w-full h-full flex flex-col py-20 items-center justify-center ">
        <h1 className="md:mb-8 mb-4 md:text-5xl  text-2xl lg:text-[56px] tracking-[0.02em] font-vissa leading-none uppercase text-center text-[#FDE9DE] relative z-50 ">
          Our Satisfied Customers
        </h1>
        <div className="relative space-y-10 z-[9999999] container">
          <div className="flex gap-4 flex-wrap justify-center lg:gap-10 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="basis-1/6">
                {partner.src && (
                  <img
                    className="mx-auto md:max-w-[125px] max-w-[90px]"
                    src={partner.src}
                    alt={partner.alt}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
