'use client'
import Link from 'next/link'
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const path = usePathname()
  const isHome = path === '/'

  return (
    <footer
      className="mx-5 xl:mx-0"
      style={isHome ? { display: 'none' } : { display: 'flex' }}
    >
      <div className="mx-auto w-[1260px] pb-10">
        <div className="flex items-center justify-between py-10">
          <ul className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-500">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-400">
              Links
            </h2>
            <Link href={'/about'}>
              <li className="text-sm hover:font-medium hover:text-red-500">
                About
              </li>
            </Link>
            <Link href={'/newsletter'}>
              <li className="text-sm hover:font-medium hover:text-red-500">
                Join Us
              </li>
            </Link>
            <Link href={'mailto:castanos@pm.me'}>
              <li className="text-sm hover:font-medium hover:text-red-500">
                Contact
              </li>
            </Link>
            {/* <Link href={'/about'}>
              <li className="text-sm hover:font-medium hover:text-red-500">
                Add events
              </li>
            </Link> */}
          </ul>
          <div className="flex flex-col items-end">
            <Link href={'/'}>
              <p className="text-xl font-black text-red-500 antialiased md:text-[1.75em]">
                YYC
                <span
                  className={`font-black text-zinc-50 antialiased ${isHome ? 'text-zinc-50' : 'text-zinc-600 dark:text-zinc-50'}`}
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
            <span className="text-sm text-zinc-600 dark:text-zinc-500">
              Calgary, Alberta
            </span>
            <Link href="mailto:castanos@pm.me">
              <span className="text-sm font-medium text-red-500">
                castanos@pm.me
              </span>
            </Link>
            <div className="mt-3 flex gap-2">
              <Link href="#">
                <FaLinkedin
                  size={24}
                  className="hover:scale-105 hover:text-red-500"
                />
              </Link>
              <Link href="#">
                <FaInstagram
                  size={24}
                  className="hover:scale-105 hover:text-red-500"
                />
              </Link>
              <Link href="#">
                <FaFacebookSquare
                  size={24}
                  className="hover:scale-105 hover:text-red-500"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs sm:space-y-0">
          <p className="text-zinc-600 dark:text-zinc-500">
            &copy; YYC Tech. {new Date().getFullYear()}
          </p>
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-500 hover:scale-105"
            onClick={scrollToTop}
          >
            <FaArrowUp className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </footer>
  )
}
