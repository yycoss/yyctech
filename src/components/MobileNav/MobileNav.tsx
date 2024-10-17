import Link from 'next/link'
import { useState } from 'react'
import { PiList } from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="ml-2 md:hidden">
      <PiList
        className="z-50 cursor-pointer text-3xl text-white transition-transform duration-200 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        size={36}
      />
      <div
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
        className="absolute right-0 top-0 w-[80%] rounded-lg bg-white transition-transform duration-200 ease-in-out dark:bg-[#18181b]"
      >
        <AiOutlineClose
          className="absolute right-8 top-8 z-50 cursor-pointer text-3xl text-red-500 transition-transform duration-200 hover:scale-110"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col justify-center gap-3 p-10">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <li className="py-4 text-xl">ABOUT</li>
          </Link>
          <Link href="/newsletter" onClick={() => setIsOpen(false)}>
            <li className="py-4 text-xl">JOIN US</li>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <li className="py-4 text-xl">CONTACT</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
