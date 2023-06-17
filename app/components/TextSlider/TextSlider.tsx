const TextSlider = ({ text }: { text: string }) => {
  return (
    <div className='overflow-hidden flex whitespace-nowrap'>
      {Array.from({ length: 4 }).map(() => (
        <p className='text-h1 font-serif text-slate-50 text-center pt-12 animate-slide px-2 sm:px-3 md:px-5 lg:px-6'>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSlider;
