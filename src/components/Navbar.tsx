import React from 'react';
import { navLinks } from '../../constants/navlink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTween.fromTo(
      'nav',
      {
        backgroundColor: 'transparent',
      },
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1.0,
        ease: 'power1.inOut',
      }
    );
  }, []);
  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='./images/logo.png' alt='logo' />
          <p>Velvet Pour</p>
        </a>
        <ul className='color-white'>
          {navLinks.map(
            (link) => (
              console.log(link.id),
              (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
