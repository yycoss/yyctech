'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const AboutCard2 = ({
  title,
  text,
  image,
  cardId,
}: {
  title: string
  text: string
  image: string
  cardId: string
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.getElementById(cardId) as HTMLElement;
      if (!cardElement) return;
  
      const rect = cardElement.getBoundingClientRect();
      const isAtTop = rect.top <= 0;
    
      if (isAtTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cardId]);


  return (
    <div
      className={`flex transition-all duration-500 ${isScrolled && 'blur-sm'}`}
      id={cardId}
    >
      <div className="flex flex-col justify-center rounded-l-2xl border-b border-l border-t border-zinc-300 p-6 dark:border-zinc-600">
        <h1 className="mb-2 text-[3.25em] font-bold text-red-500 dark:text-white">
          {title}
        </h1>
        <p className="pl-1 text-xl font-light text-zinc-700 dark:text-zinc-400">
          {text}
        </p>
      </div>
      <Image
        src={image}
        width={750}
        priority
        height={490}
        quality={50}
        alt="about-us"
        className="w-full rounded-l-2xl md:w-1/2 lg:w-2/3"
      />
    </div>
  )
}

export default AboutCard2;
