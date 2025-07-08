import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import { openingHours, socials } from '../../constants/navlink';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .fromTo(
        '#f-right-leaf',
        {
          y: 100,
        },
        { y: 0, duration: 1, ease: 'power1.inOut' }
      )
      .fromTo(
        '#f-left-leaf',
        {
          x: -100,
        },
        { x: 0, duration: 1, ease: 'power1.inOut' },
        '<'
      );
  }, []);

  return (
    <footer id='contact'>
      <img
        src='/images/footer-right-leaf.png'
        alt='leaf-right'
        id='f-right-leaf'
      />
      <img
        src='/images/footer-left-leaf.png'
        alt='leaf-leaf'
        id='f-left-leaf'
      />

      <div className='content'>
        <h2>Where to find us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>1234 Maple Avenue, Springfield, IL 62704</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => {
            return (
              <p key={time.day}>
                {time.day} : {time.time}
              </p>
            );
          })}
        </div>
        <div className='flex-center gap-5'>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.name}
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
