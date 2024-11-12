'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const AboutCard1 = ({
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
      className={`flex flex-col transition-all duration-500 ${isScrolled && 'blur-sm'}`}
    >
      <div className="flex-2 flex h-[400px]">
        <Image
          src={image}
          width={750}
          height={490}
          quality={50}
          priority
          alt="about-us"
          className="h-full w-full rounded-lg lg:rounded-3xl object-cover"
        />
      </div>
      <div
        id={cardId}
        className="flex flex-1 flex-col justify-center py-4 lg:py-6 dark:border-zinc-600"
      >
        <h1 className="mb-1 lg:mb-4 text-2xl lg:text-[3.25em] font-bold text-red-500 dark:text-white">
          {title}
        </h1>
        <p className="pl-1 text-md lg:text-xl font-light text-zinc-700 dark:text-zinc-400">
          {text}
        </p>
      </div>
    </div>
  )
}

export default AboutCard1;
