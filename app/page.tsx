import Image from "next/image";

export default function Home() {
  return (
    <div className='container mx-auto h-screen'>
      <div className='flex flex-col h-full justify-center'>
        <p className='text-7xl md:text-8xl lg:text-9xl font-serif'>
          Aleksander
        </p>
        <p className='text-6xl md:text-7xl lg:text-8xl font-serif'>Golus</p>
        <p className='text-2xl font-serif justify-self-end mt-40'>
          Front-end developer
        </p>
      </div>
    </div>
  );
}
