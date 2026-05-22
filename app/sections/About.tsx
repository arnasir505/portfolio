'use client';

import Image from 'next/image';
import Card from '../components/Card';
import { useRef } from 'react';
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';

const About = () => {
  const grid2Container = useRef<HTMLDivElement | null>(null);
  return (
    <section id='about' className='c-space section-spacing'>
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        <div className='flex items-end grid-default-color grid-1'>
          <Image
            width={1328}
            height={813}
            src='/assets/coding-pov.png'
            alt='coding pov'
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
          />
          <div className='z-10'>
            <p className='headtext lg:text-3xl!'>
              What&apos;s up?
            </p>
            <p className='subtext lg:text-xl!'>
              Over the last 3 years, I&apos;ve been developing my skills in
              full-stack development to deliver dynamic and responsive web
              applications
            </p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
        </div>
        <div className='grid-default-color grid-2 text-background'>
          <div
            ref={grid2Container}
            className='flex items-center justify-center w-full h-full'
          >
            <p className='flex item-end text-sm text-gray-500 uppercase'></p>
            <Card
              text='TypeScript'
              style={{
                rotate: '75deg',
                top: '30%',
                left: '20%',
                fontWeight: 'bold',
              }}
              containerRef={grid2Container}
            />
            <Card
              text='Next.js'
              style={{
                rotate: '-30deg',
                top: '60%',
                left: '45%',
                fontWeight: 'bold',
              }}
              containerRef={grid2Container}
            />
            <Card
              text='Express.js'
              style={{
                rotate: '-90deg',
                bottom: '30%',
                left: '70%',
                fontWeight: 'bold',
              }}
              containerRef={grid2Container}
            />
            <Card
              text='MongoDB'
              style={{
                rotate: '-45deg',
                top: '55%',
                left: '0%',
                fontWeight: 'bold',
              }}
              containerRef={grid2Container}
            />
            <Card
              text='Docker'
              style={{
                rotate: '20deg',
                top: '10%',
                left: '38%',
                fontWeight: 'bold',
              }}
              containerRef={grid2Container}
            />
            <Card
              image='/assets/logos/round.png'
              style={{ rotate: '30deg', top: '70%', left: '70%' }}
              containerRef={grid2Container}
            />
            <Card
              image='/assets/logos/round.png'
              style={{ rotate: '-45deg', top: '70%', left: '25%' }}
              containerRef={grid2Container}
            />
            <Card
              image='/assets/logos/round.png'
              style={{ rotate: '-45deg', top: '5%', left: '10%' }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        <div className='grid-black-color grid-3'>
          <div className='z-10 w-1/2'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>
              I&apos;m based in Bishkek, Kyrgyzstan and open to remote work
              worldwide
            </p>
          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe />
          </figure>
        </div>
        <div className='grid-special-color grid-4'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className='text-center headtext text-xl'>
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        <div className='grid-default-color grid-5'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Tech Stack</p>
            <p className='subtext'>
              I specialize in various technologies and frameworks to build
              modern web applications
            </p>
          </div>
          <div className='absolute inset-y-0 md:inset-y-9 size-full start-[50%] md:scale-125'>
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
