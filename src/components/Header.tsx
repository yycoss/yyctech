'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { signIn, signOut } from 'next-auth/react'

import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav/MobileNav'

export function Header({ session }: { session: any }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const path = usePathname()
  const isHome = path === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${isScrolled ? '-z-20 opacity-0' : ''} navbar fixed left-0 right-0 top-0 z-40 bg-transparent transition-all duration-500`}
    >
      <nav className="mx-4 lg:mx-10 lg:max-w-7xl xl:mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href={'/'}>
            <p className="text-shadow-lg text-xl font-black text-red-500 antialiased md:text-[1.75em] hover:scale-105 transform transition-transform will-change-transform">
              YYC
              <span
                className={`font-black antialiased ${isHome ? 'text-zinc-50' : 'text-zinc-600 dark:text-zinc-50'}`}
                style={{
                  textShadow: `
                      -0.25px -0.25px 0 #4b5563,
                      0.25px -0.25px 0 #4b5563,
                      -0.25px 0.25px 0 #4b5563,
                      0.25px 0.25px 0 #4b5563
                    `,
                }}
              >
                tech
              </span>
            </p>
          </Link>
          <div className="hidden w-full items-center justify-end gap-0 antialiased md:flex lg:gap-1">
            <div className="flex items-center gap-4">
              {session?.user ? (
                <>
                  <span className="text-md tracking-tight text-zinc-50 antialiased">
                    👋 Hey, {session.user.name || 'there'}
                  </span>
                  <form action={() => signOut()}>
                    <button
                      type="submit"
                      className={`rounded bg-red-500 px-3 py-1 ${isHome ? 'text-white' : 'text-zinc-800 dark:text-white'}`}
                    >
                      Sign out
                    </button>
                  </form>
                </>
              ) : (
                <form action={() => signIn()}>
                  <button
                    type="submit"
                    className={`rounded px-3 py-1 hover:underline ${isHome ? 'text-white' : 'text-zinc-800 dark:text-white'}`}
                  >
                    Sign in
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}
