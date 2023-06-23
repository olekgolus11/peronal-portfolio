import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn-components/accordion";
import { ArrowRight } from "lucide-react";
import { Badge } from "../shadcn-components/badge";
import ProjectPaneContent from "@/utils/interfaces/ProjectPaneContent";

const ProjectPane = ({
  title,
  timespan,
  description,
  photo,
}: ProjectPaneContent) => {
  const createPaneContent = () => {
    const accordionContent = description.map((accordionItem, index) => (
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{accordionItem.label}</AccordionTrigger>
        <AccordionContent>
          <p className='text-p'>{accordionItem.content}</p>
        </AccordionContent>
      </AccordionItem>
    ));

    return (
      <Accordion
        type='single'
        collapsible
        className='w-full'
        defaultValue='item-0'
      >
        {accordionContent}
      </Accordion>
    );
  };

  const createPaneHeader = () => {
    return (
      <>
        <p className='text-h6 font-serif'>{title}</p>
        <Badge className='w-max'>{timespan}</Badge>
      </>
    );
  };

  const createPaneFooter = () => {
    return (
      <div className='flex gap-4 items-center mt-auto'>
        <p className='text-h8 whitespace-nowrap'>SEE FULL DETAILS</p>
        <ArrowRight />
      </div>
    );
  };

  const createPanePhoto = () => {
    return (
      <div className='hidden md:flex flex-col border-l border-gray-100 mx-auto w-1/3'>
        <img
          src={photo}
          alt={photo}
          className='object-cover rounded-r-md h-full'
        />
      </div>
    );
  };

  return (
    <div className='flex flex-col md:flex-row my-10 md:h-[55vh] page-container pane'>
      <div className='flex flex-col p-14 gap-4 flex-1'>
        {createPaneHeader()}
        {createPaneContent()}
        {createPaneFooter()}
      </div>
      {createPanePhoto()}
    </div>
  );
};

export default ProjectPane;
