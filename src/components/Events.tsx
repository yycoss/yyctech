'use client'
import { useEffect, useState } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { events as eventData } from '@/data/events'
import { FaCalendar } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa6'

interface Event {
  name: string
  date: string
  venue: string
  time: string
  meetup: string
  description: string
  link: { href: string; label: string }
  image: string
  badge?: string | undefined
  recurrent?: boolean
  every?: string | undefined
  community: string
  title: string
  url: string
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Events',
  description: 'Events for tech enthusiasts in Calgary.',
}

export default function Events(events: any) {
  const [orderedEvents, setOrderedEvents] = useState<Event[]>([])
  const getEvents = () => {
    const flatEvents: any = []

    console.log('Events', events)

    Object.entries(events.events).map(([key, group]: any) => {
      const { name, events } = group
      events?.edges?.map((eventItem: any) => {
        flatEvents.push({
          community: name,
          title: eventItem.node.title,
          date: eventItem.node.dateTime,
          url: eventItem.node.eventUrl,
          description: eventItem.node.description,
          image:
            // keyGroupPhoto.baseUrl ??
            '/assets/images/volunteering2.jpg',
          venue: eventItem.node?.venue?.name || 'YYC',
        })
      })
    })

    flatEvents.sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    )

    for (let i = 0; i < flatEvents.length; i++) {
      const currentEvent = eventData.find(
        (item) => item.name === (flatEvents[i] as any).title,
      )

      if (currentEvent) {
        flatEvents[i].image = currentEvent.image
      }
    }

    setOrderedEvents(flatEvents)
  }

  useEffect(() => {
    getEvents()
  }, [])

  // console.log('orderedEvents ->', orderedEvents)

  return (
    <ul
      role="list"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-6 antialiased sm:grid-cols-2 lg:grid-cols-3"
    >
      {orderedEvents?.map(
        (event) => {
          return (
            <Card
              as="li"
              key={event.community}
              className="group cursor-pointer hover:scale-[102%] hover:shadow-md"
            >
              {/* {event.badge && (
                <div className="absolute right-4 top-4 z-50 translate-x-6 rounded-lg bg-[#dd514c] px-2 text-[0.75em] font-semibold text-white opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                  {event.badge}
                </div>
              )} */}
              {event.image && (
                <div className="relative h-[180px] w-full overflow-hidden rounded-md">
                  <Image
                    src={event.image ?? '/assets/images/yyctech.webp'}
                    width={400}
                    height={300}
                    alt="community-image"
                    className="absolute left-0 top-0 h-full w-full object-cover opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-[100%] dark:opacity-50"
                  />
                </div>
              )}
              <div className="w-full px-4 opacity-60 group-hover:opacity-100">
                <div className="mt-2 flex w-full flex-col items-center gap-1">
                  <h2 className="mt-3 w-full text-lg font-semibold text-zinc-700 dark:text-zinc-100">
                    <Card.Link href={`/event/${event.url.split('/')[5]}`}>
                      {event.title}
                    </Card.Link>
                  </h2>
                  <div className="flex w-full flex-col justify-start lg:gap-2 xl:flex-row">
                    <div className="flex w-fit items-center gap-2">
                      <FaCalendar className="dark:text-zinc-50" />
                      <h3 className="w-full text-sm">
                        {new Date(event.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </h3>
                    </div>
                    <div className="flex w-fit items-center gap-2">
                      <FaClock />
                      <h3 className="w-full text-sm">
                        {event.date.split('T')[1].split('-')[0]}
                      </h3>
                    </div>
                    <div className="flex w-fit items-center gap-2">
                      <FaLocationDot className="text-red-600 dark:text-zinc-50" />
                      <h3 className="w-full text-sm">{`${event.venue}`}</h3>
                    </div>
                  </div>
                </div>
                {!events.isMobile && (
                  <Card.Description>
                    {event.description.slice(0, 160)}...
                  </Card.Description>
                )}
                <p className="relative z-10 mt-4 flex justify-end text-sm font-medium text-zinc-400 transition group-hover:text-[#dd514c] dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">See more</span>
                </p>
              </div>
            </Card>
          )
        },
        // }
      )}
    </ul>
  )
}
