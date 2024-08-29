import { AccordionItem as Item } from "@szhsin/react-accordion";
import ChevronIcon2 from "../Icons/ChevronIcon2";

interface AccordionItemProps {
  header?: string;
  children: React.ReactNode;
  initialEntered?: boolean;
}

export const AccordionItem = ({ header, children, initialEntered, ...rest }: AccordionItemProps) => (
  <Item
    {...rest}
    initialEntered={initialEntered}
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between w-full items-center gap-4">
        <h1 className="text-black md:text-2xl sm:text-base text-xs text-start">{header}</h1>
        <ChevronIcon2 className={`transition rotate-180 sm:size-auto size-2 min-w-2  -transform duration-200 ease-out ${isEnter && "rotate-0"}`}
        />
      </div>
    )}
    className="bg-transparent block w-full focus:outline-none  transition-all ease-in focus:border-none  overflow-hidden"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full text-left  sm:py-6 py-2 min-h-[50px] sm:px-5 pl-2 pr-3 font-houschka font-light text-[22px] tracking-[0.04em] bg-white transition-all duration-300 items-center ${isEnter && "bg-transparent sm:mb-8 mb-3 border-primary"}`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: " font-light font-houschka leading-[1.3]  md:text-xl sm:text-lg text-sm w-full text-black sm:pr-4 lg:pl-16 sm:pl-8" }}
  >
    {children}
  </Item>
);
