import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn-components/accordion";
import { ArrowRight } from "lucide-react";
import { Badge } from "../shadcn-components/badge";

const ProjectPane = () => {
  const paneContent = () => {
    return (
      <>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='item-1'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>Quick Overview</AccordionTrigger>
            <AccordionContent>
              <p className='text-p'>
                Idemian is a web application made for @IDEMIA as a part of
                university's group project called "Projekt Innowacja".
              </p>
              <p className='text-p'>
                It is an application that is used both for onboarding new
                employees as well as for entartainment during company events.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>My responsibilites</AccordionTrigger>
            <AccordionContent>
              <p className='text-p'>
                The project was developed by 9 students and as the work was
                divided into two teams (frontend and backend), I was responsible
                for the frontend part of the application.
              </p>
              <br />
              <p className='text-p mb-1'>
                Besides learning fundamentals of web development I also learned
                how to work in team and how to approach clients.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  };

  return (
    <div className='flex flex-col md:flex-row my-10 md:h-[55vh] page-container pane'>
      <div className='flex flex-col p-14 gap-4 flex-1'>
        <p className='text-h6 font-serif'>IDEMIAN</p>
        <Badge className='w-max'>10.22 - 06.23</Badge>
        <div>{paneContent()}</div>
        <div className='flex gap-4 items-center  mt-auto'>
          <p className='text-h8 whitespace-nowrap'>SEE FULL DETAILS</p>
          <ArrowRight />
        </div>
      </div>
      <div className='hidden md:flex flex-col border-l border-gray-100 mx-auto w-1/3'>
        <img
          src='/idemian.jpg'
          alt='idemian app png'
          className='object-cover rounded-r-md h-full'
        />
      </div>
    </div>
  );
};

export default ProjectPane;
