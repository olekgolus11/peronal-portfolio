import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn-components/accordion";
import { Button } from "../shadcn-components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            <AccordionTrigger>Overview</AccordionTrigger>
            <AccordionContent>
              <p className='text-p'>
                Idemian is a web application made for @IDEMIA as a part of
                university's group project called "Projekt Innowacja".
              </p>
              <br />
              <p className='text-p'>
                It is an application that is used both for onboarding new
                employees as well as for entartainment during company events.
              </p>
              <br />
              <p className='text-p'>
                The application provides a fun way of exploring the company's HQ
                by scanning QR codes placed around the building. The user can
                also take part in a various quizes and earn rewards.
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
              <p className='text-p mb-1'>During the project I:</p>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
                <ul className='text-p list-disc list-inside'>
                  <li>created the application's design</li>
                  <li>developed the application's frontend</li>
                  <li>created the application's logo</li>
                  <li>created the application's video trailer</li>
                </ul>
                <ul className='text-p list-disc list-inside'>
                  <li>created the application's design</li>
                  <li>developed the application's frontend</li>
                  <li>created the application's logo</li>
                  <li>created the application's video trailer</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  };

  return (
    <div className='flex flex-col md:flex-row my-10 md:h-[60vh] page-container pane'>
      <div className='flex flex-col p-14 gap-7 flex-1'>
        <p className='text-h6 font-serif'>IDEMIAN</p>
        <div>{paneContent()}</div>
      </div>
      <div className='flex flex-col md:ml-auto md:border-l border-gray-100 w-1/2 md:w-max h-full mx-auto'>
        <img
          src='/idemian.png'
          alt='idemian app png'
          className='object-contain rounded-md md:rounded-none md:rounded-tr-md flex-shrink h-5/6 md:border-b border-gray-100'
        />
        <div className='h-full flex gap-5 items-center justify-center py-5'>
          <Button variant='ghost'>
            <ChevronLeft />
          </Button>
          <p>{"1 / 6"}</p>
          <Button variant='ghost'>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPane;
