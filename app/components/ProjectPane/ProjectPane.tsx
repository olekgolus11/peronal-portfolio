import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn-components/accordion";

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
          <AccordionItem value='item-1' className='border-slate-500'>
            <AccordionTrigger className='text-slate-50'>
              <p>Overview</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className='text-slate-50 text-p'>
                Idemian is a web application made for @IDEMIA as a part of
                university's group project called "Projekt Innowacja".
              </p>
              <br />
              <p className='text-slate-50 text-p'>
                It is an application that is used both for onboarding new
                employees as well as for entartainment during company events.
              </p>
              <br />
              <p className='text-slate-50 text-p'>
                The application provides a fun way of exploring the company's HQ
                by scanning QR codes placed around the building. The user can
                also take part in a various quizes and earn rewards.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='border-slate-500'>
            <AccordionTrigger className='text-slate-50'>
              My responsibilites
            </AccordionTrigger>
            <AccordionContent>
              <p className='text-slate-50 text-p'>
                The project was developed by 9 students and as the work was
                divided into two teams (frontend and backend), I was responsible
                for the frontend part of the application.
              </p>
              <br />
              <p className='text-slate-50 text-p mb-1'>During the project I:</p>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
                <ul className='text-slate-50 text-p list-disc list-inside'>
                  <li>created the application's design</li>
                  <li>developed the application's frontend</li>
                  <li>created the application's logo</li>
                  <li>created the application's video trailer</li>
                </ul>
                <ul className='text-slate-50 text-p list-disc list-inside'>
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
    <div className='flex my-10 h-[60vh] page-container pane'>
      <div className='flex flex-col p-14 gap-7 flex-1'>
        <p className='text-white text-h6 font-serif'>IDEMIAN</p>
        <div>{paneContent()}</div>
      </div>
      <div className='flex flex-col ml-auto border-l border-gray-100 h-full'>
        <img
          src='/idemian.png'
          alt='idemian app png'
          className='object-contain rounded-r-md hidden md:block flex-shrink h-5/6 border-b border-gray-100'
        />
        <div className='h-full flex items-center justify-center'>
          <p className='text-slate-50'>{"< 1 / 6 >"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPane;
