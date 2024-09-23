import Article1 from "../../assets/Press - Cover Photos/Interior Design Concept of the Year Hotel.jpg"
import Article2 from "../../assets/Press - Cover Photos/Interior-Design-Concept-of-the-Year-Hotel-Voco-Monaco-Dubai-TwentyOne06-1000x750 (1).jpg"
import Article3 from "../../assets/Press - Cover Photos/food in space.png"
import Article4 from "../../assets/Press - Cover Photos/CID-Power-Panels-36.jpg"
import Article5 from "../../assets/Press - Cover Photos/food in space (2).png"
import Article6 from "../../assets/Press - Cover Photos/food in space (1).png"
import Article7 from "../../assets/Press - Cover Photos/How older venues can subtly tweak their design to reinvigorate business.jpg"
import Article8 from "../../assets/Press - Cover Photos/How the alchemy of baking inspired the design of Pitfire Pizza’s first licensed venue in Dubai Hills.jpg"
import Article9 from "../../assets/Press - Cover Photos/MEK_2868-min-min-1536x1023.jpg"
import Article10 from "../../assets/Press - Cover Photos/Behind the design of Reif Othman’s Nama Yoso.jpg"

import Button from "../Shared/Button";

const reports = [
    {
        title: "Trophy time: CID Award-winners strike a pose ",
        image: Article1,
        article: 'https://www.commercialinteriordesign.com/news/trophy-time-cid-award-winners-strike-a-pose',
        featuredOn:'Commercial Interior Design'
    },
    {
        title: "On stage: The CID Awards 2024 MENA winners ",
        image: Article2,
        article: 'https://www.commercialinteriordesign.com/news/on-stage-the-cid-awards-2024-mena-winners',
        featuredOn:'Commercial Interior Design'
    },
    {
        title: "Nama Yoso featured on Food In Space",
        image: Article3,
        article: 'https://www.foodinspace.net/project/nama-yoso-dubai-united-arab-emirates/',
        featuredOn:'Food In Space'
    },
    {
        title: "Ethical sourcing - CID Power Panels with ClayArk ",
        image: Article4,
        article: 'https://www.commercialinteriordesign.com/events/ethical-sourcing-and-surface-stereotypes-notes-from-cid-power-panels-with-clayark',
        featuredOn:' Commercial Interior Design'
    },
    {
        title: "Hoe Lee Kow featured on Food In Space",
        image: Article5,
        article: 'https://www.foodinspace.net/project/hoe-lee-kow-dubai-united-arab-emirates/',
        featuredOn:'Food In Space'
    },
    {
        title: "Nama Yoso awarded ‘Honorable Mention in Interior Design’ at the LIV Hospitality Awards 2024",
        image: Article6,
        article: 'https://livawards.com/winner/hm/2023/131-53260-24/0/',
        featuredOn:'Liv Awards'
    },
    {
        title: "How older venues can subtly tweak their design to reinvigorate business",
        image: Article7,
        article: 'https://www.caterermiddleeast.com/people/opinion/how-older-venues-can-subtly-tweak-their-design-to-reinvigorate-business',
        featuredOn:'Caterer Middle East'
    },
    {
        title: "How the alchemy of baking inspired the design of Pitfire Pizza’s first licensed venue in Dubai Hills",
        image: Article8,
        article: 'https://www.commercialinteriordesign.com/projects/how-the-alchemy-of-baking-inspired-the-design-of-pitfire-pizzas-first-licensed-venue-in-dubai-hills',
        featuredOn:' Commercial Interior Design'
    },
    {
        title: "The Art of Detailing",
        image: Article9,
        article: 'https://design-middleeast.com/how-twentyone06-and-havelock-one-interiors-redefined-luxe-at-this-resimercial-workspace-in-dubai/',
        featuredOn:'Design Middle East'
    },
    {
        title: "Behind the design of Reif Othman’s Nama Yoso",
        image: Article10,
        article: 'https://www.commercialinteriordesign.com/projects/behind-the-design-of-reif-othmans-nama-yoso',
        featuredOn:'Commercial Interior Design'
    }


];

const PressSection = () => {
    return (
        <div className="md:container xl:py-48 lg:py-36 md:py-28 sm:py-20 py-14">
            <p className="text-[#D0D0D0] font-light font-houschka lg:text-[26px] md:text-xl sm:text-lg xl:mb-40 lg:mb-28 md:mb-20 mb-16 lg:pb-5 text-center md:px-0 px-5">
                An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency.
            </p>
            {reports.map((report, index) => (
                <div
                    key={index}
                    className={`flex xl:gap-[73px] lg:gap-12 gap-8 items-center flex-col-reverse lg:mb-40 md:mb-32 lg:pb-5 mb-16  ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse '
                    }`}
                >
                    <div className="flex flex-col items-center md:w-auto w-full">
                        <img
                            src={report.image}
                            className="xl:min-w-[650px] xl:max-w-[650px] lg:max-w-[550px] lg:min-w-[550px]  w-full md:min-w-[380px] lg:min-h-[300px] max-h-[3000px] min-h-[195px] object-cover"
                            alt={report.title}
                        />
                        <div className="lg:hidden block sm:mt-8 mt-6">
                            <Button
                                dir={report.article}
                                target="_blank"
                                aspects="sm:size-auto size-9"
                                width={60}
                                height={64}
                                className="sm:w-[260px] w-[150px]"
                                textStyles="font-light font-houschka sm:text-lg text-[10px]"
                                title={"Take me there"}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-vissa lg:text-start text-center uppercase lg:text-6xl md:text-5xl sm:text-4xl text-[32px] xl:text-[64px] tracking-[0.04em] ">
                            {report.title}
                        </h1>
                        <p className="text-gray-400 lg:text-xl sm:text-lg lg:text-start text-center  font-houschka font-light  tracking-[0.02em] lg:mb-10">Featured on ({report.featuredOn})</p>
                        <div className="lg:block hidden">
                            <Button
                                dir={report.article}
                                target="_blank"
                                width={60}
                                height={64}
                                className="w-[300px]"
                                textStyles="font-light font-houschka text-lg"
                                title={"Take me there"}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PressSection;
