import { Accordion } from "@szhsin/react-accordion";
import { AccordionItem } from "../Shared/AccordionItem";

const accordionData = [
    {
      header: "What services does your interior design agency offer?",
      content: "An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work",
    },
    {
        header: "Can you work within a specific budget, and how do you handle cost overruns?",
        content: "An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work",
      },
      {
        header: "How do you source materials and furnishings for your projects?",
        content: "An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work",
      },
      {
        header: "Do you offer 3D renderings or virtual reality walkthroughs of proposed designs?",
        content: "An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work",
      },
      {
        header: "Can you provide references from past clients?",
        content: "An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work",
      },
      {
        header: "What is the typical timeline for a project, from start to finish?",
        content: "An interior design agency can create content that showcases its work, highlights design trends, and provides educational resources for clients and followers. Some potential content ideas for an interior design agency. An interior design agency can create content that showcases its work",
      },

  ];

const FAQsSection = () => {
  return (
    <div className="bg-[#FFEADF] sm:pt-28 pt-14 sm:pb-40 pb-24">    
    <div className="max-w-[944px] px-5 mx-auto">
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