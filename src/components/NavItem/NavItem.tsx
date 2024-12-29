import Link from 'next/link'

interface NavItemProps {
  pathname: string
  resolvedTheme: string | undefined
  path: string
  text: string
}

const NavItem = ({
  pathname,
  resolvedTheme,
  path,
  text,
}: NavItemProps) => {
  return (
    <Link href={path}>
      <span
        style={{
          backgroundColor:
            pathname === path && resolvedTheme === 'dark'
              ? '#252529'
              : pathname === path &&
                  (resolvedTheme === 'light' || resolvedTheme == undefined)
                ? '#eb4034'
                : 'transparent',
          // color:
          //   pathname === path
          //     ? 'white'
          //     : resolvedTheme === 'dark'
          //       ? 'white'
          //       : '#dd514c',
        }}
        className={`text-xs font-medium text-white backdrop-blur hover:shadow lg:text-[1em] dark:ring-1 dark:ring-zinc-900/5 dark:hover:ring-white/20 ${resolvedTheme === 'dark' ? 'hover:bg-[#252529]' : 'hover:bg-[#f5f0f7]'} rounded-full px-4 py-3 transition-all duration-200`}
      >
        {text}
      </span>
    </Link>
  )
}

export default NavItem
