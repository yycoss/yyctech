'use client'
import { FaUsers } from 'react-icons/fa'
import { CgCalendarToday } from 'react-icons/cg'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import Events from './Events'
import Platforms from './Platforms'
import Volunteering from './Volunteering'
import { HomeFooter } from './HomePageFooter'
import { AppContext } from '../app/providers'

export function TabSection(communities: any) {
  const { stickyNavRef } = useContext(AppContext)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const tabStyle = `
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
  const handleTabClick = () => {
    if (stickyNavRef.current)
      stickyNavRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  console.log('isMobile', isMobile)

  return (
    <TabGroup
      className={
        'relative z-40 w-full bg-[#fafafa] md:absolute md:left-1/2 md:top-[61%] md:-translate-x-1/2 md:transform lg:top-[93%] dark:bg-zinc-900'
      }
    >
      <div
        ref={stickyNavRef}
        className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-zinc-100 px-6 md:px-12 lg:mx-auto dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-7xl">
          <TabList className="flex pt-1">
            <div className="flex flex-row gap-8">
              <Tab
                onClick={handleTabClick}
                className={`${tabStyle} pr-[0.5em] transition-all duration-200 hover:scale-105`}
              >
                <CgCalendarToday className="h-5 w-5" />
                <span>Events</span>
              </Tab>
              <Tab
                onClick={handleTabClick}
                className={`${tabStyle} pr-[0.2em] transition-all duration-200 hover:scale-105`}
              >
                <FaUsers className="h-5 w-5" />
                <span>Communities</span>
              </Tab>{' '}
              <Tab
                onClick={handleTabClick}
                className={`${tabStyle} pr-[0.2em] transition-all duration-200 hover:scale-105`}
              >
                <FaHandHoldingHeart className="h-5 w-5" />
                <span>Volunteering</span>
              </Tab>
            </div>
          </TabList>
        </div>
      </div>
      <div className="z-40 mx-10 bg-zinc-50 py-10 lg:max-w-7xl xl:mx-auto dark:bg-zinc-900">
        <TabPanels>
          <TabPanel className="-mx-2">
            <div className="mb-8 max-w-2xl md:px-3 md:pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-red-500 md:text-3xl dark:text-zinc-100">
                Upcoming Events 🔥
              </h2>
              {isMobile && (
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  Find tech events happening in Calgary.
                </p>
              )}
              {!isMobile && (
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  Find tech events happening in Calgary. Explore opportunities
                  to connect and collaborate. If you&apos;d like to add your
                  event to our calendar please reach out to us at castanos@pm.me
                </p>
              )}
            </div>
            <Events
              events={communities.communities}
              isMobile={isMobile}
            />
          </TabPanel>
          <TabPanel className="-mx-2">
            <div className="mb-8 max-w-2xl md:px-3 md:pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-red-500 md:text-3xl dark:text-zinc-100">
                Join a Community 🤝
              </h2>
              {isMobile && (
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  Explore and be part of Calgary tech scene
                </p>
              )}
              {!isMobile && (
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  Join the conversation and become part of the community!
                  Connect with like-minded professionals and hobbyists across
                  different platforms.
                </p>
              )}
            </div>
            <Platforms groups={communities} />
          </TabPanel>
          <TabPanel className="-mx-2">
            <div className="mb-8 max-w-2xl md:px-3 md:pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-red-500 md:text-3xl dark:text-zinc-100">
                Volunteer Opportunities 🙋‍♀️
              </h2>
              {isMobile && (
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  Show your support by volunteering!
                </p>
              )}
              {!isMobile && (
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  Show your support by volunteering! Whether you’re a seasoned
                  pro or just starting out, your skills can make a big impact.
                </p>
              )}
            </div>
            <Volunteering />
          </TabPanel>
        </TabPanels>
      </div>
      <HomeFooter />
    </TabGroup>
  )
}
