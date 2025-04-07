import { FaUsers } from 'react-icons/fa'
import { CgCalendarToday } from 'react-icons/cg'
import { TabList, Tab } from "@headlessui/react"
import { FaHandHoldingHeart } from 'react-icons/fa'

interface TabHeaderProps {
  stickyNavRef: React.RefObject<HTMLDivElement>
  handleTabClick: () => void
  tabStyle: string
}

const TabHeader = ({
  stickyNavRef,
  handleTabClick,
  tabStyle,
}: TabHeaderProps) => {
  return (
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
  )
}

export default TabHeader;
