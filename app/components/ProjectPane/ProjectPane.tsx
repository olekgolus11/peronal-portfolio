const ProjectPane = () => {
  const projectOverviewText = () => {
    return (
      <>
        <p className='text-slate-50'>
          Idemian is a web application made for IDEMIA by me and my friends from
          university.
        </p>
        <br />
        <p className='text-slate-50'>
          It is an application that is used both for onboarding new employees as
          well as for entartainment during company events.
        </p>
      </>
    );
  };

  return (
    <div className='flex my-14 h-[60vh] page-container pane'>
      <div className='flex flex-col p-14 gap-14'>
        <p className='text-white text-h6 font-serif'>IDEMIAN</p>
        <div className='grid grid-cols-12 gap-10 flex-1'>
          <div className='col-span-2 flex flex-col justify-evenly'>
            <p className='text-slate-50'>Overview</p>
            <p className='text-slate-50'>Details</p>
            <p className='text-slate-50'>Screenshots</p>
          </div>
          <div className='col-span-10'>{projectOverviewText()}</div>
        </div>
      </div>
      <img
        src='/idemian2.png'
        alt='idemian app png'
        className='object-contain border-l rounded-r-md border-gray-100 ml-auto'
      />
    </div>
  );
};

export default ProjectPane;
