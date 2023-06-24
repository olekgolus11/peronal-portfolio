import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProjectPaneContent from "@/utils/interfaces/ProjectPaneContent";

const ProjectPane = ({
  title,
  timespan,
  description,
  photo,
}: ProjectPaneContent) => {
  const createPaneHeader = () => {
    return (
      <>
        <p className='text-h6 font-serif'>{title}</p>
        <Badge className='w-max'>{timespan}</Badge>
      </>
    );
  };

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

  const createPaneFooter = () => {
    return (
      <div className='flex gap-4 items-center mt-auto link'>
        <p className='text-h8 whitespace-nowrap'>SEE FULL DETAILS</p>
        <ArrowRight />
      </div>
    );
  };

  const createPanePhoto = () => {
    return (
      <div className='flex flex-col md:border-l border-gray-100 mx-auto'>
        <img
          src={photo}
          alt={photo}
          className='object-cover rounded-md md:rounded-l-none h-full aspect-video md:aspect-auto align-top'
        />
      </div>
    );
  };

  return (
    <div className='flex flex-col md:flex-row my-10 md:h-[55vh] pane box-border w-full'>
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
