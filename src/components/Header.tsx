'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import NavItem from './NavItem/NavItem'
import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav/MobileNav'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname() || ''

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${isScrolled ? 'opacity-0 -z-20' : ''} navbar fixed left-0 right-0 top-0 z-40 bg-transparent transition-all duration-500`}
    >
      <nav className="mx-4 lg:mx-10 lg:max-w-7xl xl:mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href={'/'}>
            <p className="text-xl font-black text-red-500 antialiased md:text-[1.75em]">
              YYC
              <span
                className="font-black text-zinc-50 antialiased"
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
            <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/about"
              text="About"
            />
            <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/newsletter"
              text="Newsletter"
            />
            {/* <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/contact"
              text="Contact"
            /> */}
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
