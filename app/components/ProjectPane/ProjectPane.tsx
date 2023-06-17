const ProjectPane = () => {
  const paneContentText = () => {
    return (
      <>
        <p className=' text-blue-200 font-bold font-serif mb-1'>Overview</p>
        <p className='text-slate-50 text-p'>
          Idemian is a web application made for @IDEMIA as a part of
          university's group project called "Projekt Innowacja".
        </p>
        <br />
        <p className='text-slate-50 text-p'>
          It is an application that is used both for onboarding new employees as
          well as for entartainment during company events.
        </p>
      </>
    );
  };

  return (
    <div className='flex my-10 h-[60vh] page-container pane'>
      <div className='flex flex-col p-14 gap-14'>
        <p className='text-white text-h6 font-serif'>IDEMIAN</p>
        <div className=''>{paneContentText()}</div>
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
