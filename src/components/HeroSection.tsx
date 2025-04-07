'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ReactTyped } from 'react-typed'
import { Suspense } from 'react'

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative flex w-full overflow-hidden lg:h-[100vh]">
      <Suspense>
        <video
          src={
            resolvedTheme === 'dark'
              ? '/assets/video/darkThemeVideo.webm'
              : '/assets/video/lightThemeVideo.webm'
          }
          autoPlay
          loop
          muted={true}
          className={`absolute right-[10.5em] -z-10 w-full scale-[500%] md:scale-[200%] xl:scale-[130%] ${resolvedTheme !== 'dark' ? 'opacity-100' : 'opacity-70'} `}
        >
          Your browser does not support the video tag.
        </video>
      </Suspense>
      <div className="relative z-10 mx-4 flex w-full max-w-7xl flex-col justify-end gap-3 pb-28 pt-32 lg:mx-10 lg:py-0 lg:pb-48 xl:mx-auto">
        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.25em] tracking-tighter text-white md:text-6xl lg:text-[6em]">
          Be part of
        </h1>
        <ReactTyped
          strings={[
            'A Growing Tech Community',
            'Calgary’s Digital Future',
            'YYC’s Innovation Hub',
          ]}
          typeSpeed={70}
          backSpeed={20}
          showCursor={true}
          cursorChar="|"
          className="max-w-2xl text-5xl text-[3em] h-[100px] font-bold leading-[1.25em] tracking-tighter text-red-500 md:text-6xl md:text-[3.5em] lg:leading-10"
          loop
        >
          <span />
        </ReactTyped>

        <p className="text-md ml-1 mt-6 max-w-2xl text-lg font-medium leading-[1.5em] text-white text-opacity-80 lg:text-xl">
          Explore events, meetups, and connect with thriving communities.{' '}
          <br className="hidden md:flex" />
          Let&apos;s build, ship, and grow together!
        </p>
        <Link href="/newsletter">
          <button className="mt-2 w-full rounded-full bg-white p-3 font-semibold shadow-lg transition-all duration-300 hover:bg-red-500 hover:text-white lg:mt-4 lg:w-1/6 dark:border dark:bg-transparent dark:hover:bg-white dark:hover:font-semibold dark:hover:text-red-500 hover:tracking-widest">
            Stay in the Loop
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
