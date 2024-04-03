import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Ribon.scss'

export default function Ribon() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to('#cut', {
      y: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: '#cut', toggleActions: 'restart none none none' },
    });
    gsap.to('#elem:nth-child(1)', {
      x: -250,
      duration: 1,
      delay: 0.5,
      borderBottomRightRadius: '25px',
      scrollTrigger: {
        trigger: '#elem:nth-child(1)',
        toggleActions: 'restart none none none',
      },
    });
    gsap.to('#elem:nth-child(2)', {
      x: 250,
      duration: 1,
      delay: 0.5,
      borderBottomLeftRadius: '25px',
      scrollTrigger: {
        trigger: '#elem:nth-child(2)',
        toggleActions: 'restart none none none',
      },
    });
  }, []);

  return (
    <div className="ribbon-wrapper">
      <div id="elem" className="ribbon-item"></div>
      <div id="elem" className="ribbon-item"></div>
      <img id="cut" className="ribbon-cut" src="./cut.png" alt="cut" />
    </div>
  );
}
