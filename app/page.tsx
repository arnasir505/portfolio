import About from './sections/About';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';

export default function Home() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <section className='min-h-screen'>
        <h2 className='text-3xl text-white text-center mt-20'>
          To Be Continued...
        </h2>
      </section>
    </div>
  );
}
