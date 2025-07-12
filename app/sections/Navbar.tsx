'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <Link
            href='/'
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
          >
            Ariet
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
          >
            <Image
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              height={24}
              width={24}
              alt='menu toggle'
            />
          </button>
          <nav className='hidden sm:flex'>
            <ul className='nav-ul'>
              {navigationLinks.map(({ href, label }) => (
                <li key={href} className='nav-li'>
                  <Link href={href} className='nav-link'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className='block overflow-hidden text-center sm:hidden'>
          <nav className='pb-5'>
            <ul className='nav-ul'>
              {navigationLinks.map(({ href, label }) => (
                <li key={href} className='nav-li'>
                  <Link href={href} className='nav-link'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
