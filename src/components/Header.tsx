'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import NavItem from './NavItem/NavItem'
import MobileNav from './MobileNav/MobileNav'

export function Header() {
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <nav className="mx-4 lg:mx-10 xl:mx-auto lg:max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link href={'/'}>
            <p className="text-xl font-black text-red-500 antialiased md:text-[1.75em]">
              YYC
              <span className="font-black antialiased text-zinc-50">
                tech
              </span>
            </p>
          </Link>
          <div className="hidden items-center justify-end gap-0 antialiased md:flex lg:gap-1">
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
              text="Join Us"
            />
            <NavItem
              pathname={pathname}
              resolvedTheme={resolvedTheme}
              path="/contact"
              text="Contact"
            />
          </div>
          <div className='flex items-center gap-2'>
          <ThemeToggle />
          <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}
