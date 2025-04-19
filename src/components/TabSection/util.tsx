export const tabStyle = `
text-sm sm:text-md font-medium leading-5
text-zinc-800 dark:text-zinc-100
flex items-center justify-center gap-3
border-b-2
ui-selected:border-red-600 dark:ui-selected:border-zinc-200
ui-not-selected:border-transparent
ui-selected:text-red-600
ui-not-selected:hover:text-zinc-800 dark:ui-not-selected:hover:text-zinc-200
dark:ui-selected:text-zinc-200
ui-not-selected:text-zinc-500
dark:ui-not-selected:text-zinc-400
mx-auto py-4
focus:outline-none
`

export const sections = [
  {
    title: 'Upcoming Events 🔥',
    mobileDesc: 'Find tech events happening in Calgary.',
    desc: `Find tech events happening in Calgary. Explore opportunities to
            connect and collaborate. If you'd like to add your event to
            our calendar, please reach out to us at castanos@pm.me`,
  },
  {
    title: 'Join a Community 🤝',
    mobileDesc: 'Explore and be part of Calgary tech scene',
    desc: `Join the conversation and become part of the community! Connect
            with like-minded professionals and hobbyists across different
            platforms.`,
  },
  {
    title: 'Volunteer Opportunities 🙋‍♀️',
    mobileDesc: 'Show your support by volunteering!',
    desc: `Show your support by volunteering! Whether you’re a seasoned pro
            or just starting out, your skills can make a big impact.`,
  },
]

export const tabSectionStyle =
  'relative z-40 w-full bg-[#fafafa] md:absolute md:left-1/2 md:top-[61%] md:-translate-x-1/2 md:transform lg:top-[93%] dark:bg-zinc-900'
