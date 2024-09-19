import { Accordion } from "@szhsin/react-accordion";
import { AccordionItem } from "../Shared/AccordionItem";
import BlogBg from "../../assets/CreationsBg.png";

const accordionData = [
    {
      header: "What sets TwentyOne06 apart from other design agencies?",
      content: "TwentyOne06 blends a boutique agency’s personalized service with global capabilities. We offer bespoke design solutions that merge creativity with functionality, ensuring each project is unique and tailored to exceed expectations.",
    },
    {
        header: "What types of projects does TwentyOne06 specialize in?",
        content: "We specialize in contemporary hospitality, commercial spaces, and F&B design. Our portfolio includes a diverse range of projects, from luxurious hotels and innovative restaurants to dynamic retail and workplace environments.",
      },
      {
        header: "How does TwentyOne06 approach interior design?",
        content: "Our interior design philosophy emphasizes both artistry and practicality. We craft immersive spaces by blending sophisticated aesthetics with functional excellence, ensuring that every design detail enhances the user experience.",
      },
      {
        header: " Can you describe the process for a typical design project with TwentyOne06?",
        content: "Our process begins with a deep understanding of your vision and goals. We then develop a comprehensive design strategy, from concept to completion, ensuring every element aligns with your brand identity and functional needs.",
      },
      {
        header: "What is TwentyOne06’s approach to brand development?",
        content: "We create compelling brand identities through a fusion of creative direction and strategic positioning. Our approach ensures that each brand we develop resonates with authenticity and stands out in a competitive market.",
      },
      {
        header: "How does TwentyOne06 conduct market research?",
        content: "We perform detailed market research by analyzing industry trends, consumer behavior, and competitive landscapes. Our insights help clients make informed decisions and navigate market complexities with confidence.",
      },
      {
        header: "What is Experience Strategy, and how does it impact your designs?",
        content: "Experience Strategy focuses on crafting transformative user interactions. We design spaces that enhance operational efficiency and create memorable experiences, ensuring every touchpoint is engaging and effective.",
      },
      {
        header: "How does TwentyOne06’s F&B Consulting enhance dining experiences?",
        content: "Our F&B Consulting services encompass menu design, operational planning, and concept optimization. We blend culinary passion with strategic insight to create dining experiences that are both innovative and efficient.",
      },
      {
        header: " Can you share some notable success stories from TwentyOne06?",
        content: "We’ve been praised for our work on projects like Voco Monaco Dubai and Nama Yoso, showcasing our ability to merge innovation with functionality and achieve high client satisfaction in diverse sectors.",
      },
      {
        header: "How can I get in touch with TwentyOne06 to start a project?",
        content: "You can contact us through our website’s contact form or by emailing us directly. We’re eager to discuss your project and explore how our bespoke design solutions can bring your vision to life.",
      },

  ];

const FAQsSection = () => {
  return (
    <div className="bg-[#FFEADF] sm:pt-28 pt-14 sm:pb-40 pb-24 relative">   
          <img
        src={BlogBg}
        className="absolute top-1/2 -translate-y-1/2 opacity-70 right-0 scale-x-[-1] w-full"
        alt=""
      />
 
    <div className="max-w-[944px] px-5 mx-auto relative z-50">
    <Accordion className="sm:space-y-8 space-y-3" transition transitionTimeout={200}>
    {accordionData.map((item, index) => (
        <AccordionItem
            key={index}
            header={item.header}
        >
            {item.content}
        </AccordionItem>
    ))}
</Accordion>
</div>                
</div>
  )
}

export default FAQsSection