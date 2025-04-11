'use client'
import { useContext, useEffect, useState } from 'react'
import { TabGroup } from '@headlessui/react'

import Sections from './Sections'
import TabHeader from './TabHeader'
import { HomeFooter } from '../HomePageFooter'
import { AppContext } from '../../app/providers'
import { tabStyle, tabSectionStyle } from './util'

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

  const handleTabClick = () => {
    if (stickyNavRef.current)
      stickyNavRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <TabGroup className={tabSectionStyle}>
      <TabHeader
        stickyNavRef={stickyNavRef}
        handleTabClick={handleTabClick}
        tabStyle={tabStyle}
      />
      <Sections communities={communities} isMobile={isMobile} />
      <HomeFooter />
    </TabGroup>
  )
}
