import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

const ProjectPane = () => {
  const paneContentText = () => {
    return (
      <>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1' className='border-slate-500'>
            <AccordionTrigger className='text-slate-50 mb-1'>
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='border-slate-500'>
            <AccordionTrigger className='text-slate-50 mb-1'>
              My responsibilites
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  };

  return (
    <div className='flex my-10 h-[60vh] page-container pane'>
      <div className='flex flex-col p-14 gap-14 flex-1'>
        <p className='text-white text-h6 font-serif'>IDEMIAN</p>
        <div>{paneContentText()}</div>
      </div>
      <img
        src='/idemian2.png'
        alt='idemian app png'
        className='object-contain border-l rounded-r-md border-gray-100 ml-auto hidden md:block'
      />
    </div>
  );
};

export default ProjectPane;
