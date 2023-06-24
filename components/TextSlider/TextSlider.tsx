import { motion } from "framer-motion";

const TextSlider = ({ text }: { text: string }) => {
  return (
    <div className='overflow-hidden flex whitespace-nowrap'>
      {Array.from({ length: 4 }).map(() => (
        <motion.p
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className='text-h1 font-serif text-center py-12 px-2 sm:px-3 md:px-5 lg:px-6'
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
};

export default TextSlider;
