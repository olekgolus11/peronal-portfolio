const ProjectPane = () => {
  return (
    <div className='m-14 p-14 h-96 backdrop-blur bg-gray-800 rounded-md bg-clip-padding backdrop-filter bg-opacity-30 border border-gray-100'>
      <div className='grid grid-cols-12 gap-10 h-full'>
        <div className='col-span-2 flex flex-col justify-evenly'>
          <p className='text-slate-50'>Overview</p>
          <p className='text-slate-50'>Details</p>
          <p className='text-slate-50'>Screenshots</p>
        </div>
        <div className='col-span-5'></div>
        <div className='col-span-5'></div>
      </div>
    </div>
  );
};

export default ProjectPane;
