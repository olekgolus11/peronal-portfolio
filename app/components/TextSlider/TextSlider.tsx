const TextSlider = ({ text }: { text: string }) => {
  return (
    <div className='overflow-hidden flex whitespace-nowrap'>
      {Array.from({ length: 4 }).map(() => (
        <p className='text-7xl sm:text-9xl md:text-[10rem] lg:text-[10rem] xl:text-[12rem] font-serif text-slate-50 text-center pt-12 animate-slide px-10'>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSlider;
