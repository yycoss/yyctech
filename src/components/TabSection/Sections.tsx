import { TabPanel, TabPanels } from '@headlessui/react'

import Events from '../Events'
import { sections } from './util'
import Platforms from '../Platforms'
import Volunteering from '../Volunteering'

interface SectionsProps {
  isMobile: boolean
  communities: any
}

const Sections = ({ isMobile, communities }: SectionsProps) => {
  return (
    <div className="z-40 mx-10 bg-zinc-50 py-10 lg:max-w-7xl xl:mx-auto dark:bg-zinc-900">
      <TabPanels>
        {sections.map((section, index) => (
          <TabPanel className="-mx-2" key={`Section_${index + 1}`}>
            <div className="mb-8 max-w-2xl md:px-3 md:pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-red-500 md:text-3xl dark:text-zinc-100">
                {section.title}
              </h2>
              {isMobile && (
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  {section.mobileDesc}
                </p>
              )}
              {!isMobile && (
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  {section.desc}
                </p>
              )}
            </div>
            {index === 0 && <Events events={communities.communities} isMobile={isMobile} />}
            {index === 1 && <Platforms groups={communities} />}
            {index === 2 && <Volunteering />}
          </TabPanel>
        ))}
      </TabPanels>
    </div>
  )
}

export default Sections
