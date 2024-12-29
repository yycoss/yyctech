import Link from 'next/link'
import { useState } from 'react'
import { PiList } from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react'
import { AppContext } from '@/app/providers'
import { usePathname } from 'next/navigation'

export default function MobileNav() {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { stickyNavRef } = useContext(AppContext)
  const handleTabClick = () => {
    if (stickyNavRef.current) {
      stickyNavRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="ml-2 md:hidden">
      <PiList
        className="z-20 cursor-pointer text-3xl transition-transform duration-200 hover:scale-110 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
        size={36}
      />
      <div
        style={{
          height: '80vh',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
        className="absolute right-0 top-0 z-40 w-[80%] border-l-[20px] border-red-500 bg-white transition-transform duration-200 ease-in-out dark:bg-[#18181b]"
      >
        <AiOutlineClose
          className="absolute right-8 top-8 z-50 cursor-pointer text-3xl text-red-500 transition-transform duration-200 hover:scale-110"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col justify-center gap-3 p-10">
          {path === '/' ? (
            <span
              className='cursor-pointer'
              onClick={() => {
                setIsOpen(false)
                handleTabClick()
                localStorage.setItem('activeTab', 'events')
              }}
            >
              <li className="select-none py-4 text-xl">EXPLORE</li>
            </span>
          ) : (
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false)
                handleTabClick()
                localStorage.setItem('activeTab', 'events')
              }}
            >
              <li className="select-none py-4 text-xl">EXPLORE</li>
            </Link>
          )}

          {/* <span
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(false)
              handleTabClick()
              localStorage.setItem('activeTab', 'communities')
            }}
          >
            <li className="select-none py-4 text-xl">COMMUNITIES</li>
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(false)
              handleTabClick()
              localStorage.setItem('activeTab', 'voluntering')
            }}
          >
            <li className="select-none py-4 text-xl">VOLUNTEERING</li>
          </span> */}
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <li className="select-none py-4 text-xl">ABOUT</li>
          </Link>
          <Link href="/newsletter" onClick={() => setIsOpen(false)}>
            <li className="select-none py-4 text-xl">JOIN US</li>
          </Link>
          {/* <Link href="/contact" onClick={() => setIsOpen(false)}>
            <li className="select-none py-4 text-xl">CONTACT</li>
          </Link> */}
        </ul>
      </div>
    </div>
  )
}
