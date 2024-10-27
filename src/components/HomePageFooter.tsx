import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

export function HomeFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mx-5 border border-white xl:mx-0">
      <div className="mx-auto max-w-[1260px] pb-10">
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
            <Link href={'/contact'}>
              <li className="text-sm hover:font-medium hover:text-red-500">
                Contact
              </li>
            </Link>
            <Link href={'/about'}>
              <li className="text-sm hover:font-medium hover:text-red-500">
                Add events
              </li>
            </Link>
          </ul>
          <div className="flex flex-col items-end">
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
            <span className="text-sm text-zinc-600 dark:text-zinc-500">
              Calgary, Alberta
            </span>
            <Link href="mailto:hello@yyctech.ca">
              <span className="text-sm font-medium text-red-500">
                hello@yyctech.ca
              </span>
            </Link>
            <div className="mt-4 flex gap-2">
              <Link href="https://twitter.com/yyctech">
                <FaXTwitter size={24}  className="hover:text-red-500 hover:scale-105"/>
              </Link>
              <Link href="https://linkedin.com/company/yyctech">
                <FaLinkedin size={24} className="hover:text-red-500 hover:scale-105"/>
              </Link>
              <Link href="https://instagram.com/yyctech">
                <FaInstagram size={24} className="hover:text-red-500 hover:scale-105"/>
              </Link>
              <Link href="https://facebook.com/yyctech">
                <FaFacebookSquare size={24} className="hover:text-red-500 hover:scale-105"/>
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
