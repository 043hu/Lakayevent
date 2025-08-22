"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {};

export default function Gsap({}: Props) {
  const floatingShapes = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingShapes.current) {
      const shapes = floatingShapes.current.querySelectorAll(".animated-shape");

      shapes.forEach((shape, index) => {
        const delay = index * 0.5;

        gsap.to(shape, {
          y: -130,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: delay,
        });

        gsap.to(shape, {
          x: 200,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay,
        }); 
      });
    }
  }, []);
  return (
    <div
      ref={floatingShapes}
      className='fixed inset-0 z-40 pointer-events-none overflow-hidden flex items-center justify-center gap-100 p-3 '
      aria-hidden='true'
    >
      <div className='animated-shape top-2 left-3  right-1 w-16 h-16 rounded-full bg-purple-300 opacity-30'></div>
      <div className='animated-shape top-1/3 right-20 w-24 h-24 rounded-full bg-indigo-300 opacity-30'></div>
      <div className='animated-shape bottom-4 left-1/4 w-20 h-20 rounded-full bg-pink-300 opacity-30'></div>
    </div>
  );
}
