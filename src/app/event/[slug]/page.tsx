import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { FaClock } from 'react-icons/fa'
import { CgSpinner } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import EventButton from '@/components/EventButton/EventButton'
import MarkdownRenderer from '@/components/MarkdownRenderer'

const LocationMap = dynamic(
  () => import('@/components/LocationMap/LocationMap'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <CgSpinner size={48} className="animate-spin" />
      </div>
    ),
  },
)

interface EventParams {
  slug: string
}

// Get Event
async function fetchEvent(eventId: string) {
  const response = await fetch(
    `https://yyctech.vercel.app/api/fetch-event?eventId=${eventId}`,
    {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`,
      },
      next: { revalidate: 7200 }, // revalidate every 2 hours
    },
  )

  if (!response.ok) {
    console.log('Error: ', response.statusText)
    // throw new Error(`Something went wrong :(`);
  }

  const data = await response.json()

  return data.data
}

const Event = async ({ params }: { params: EventParams }) => {
  const { event } = await fetchEvent(params.slug)
  const position = { lat: event.venue?.lat, lng: event.venue?.lng }

  return (
    <section className="mx-4 mt-24 flex items-center justify-center lg:mx-10 lg:max-w-7xl xl:mx-auto">
      <div className="flex max-w-[1280px] flex-col justify-start">
        <h1 className="w-full font-bold sm:text-xl lg:text-3xl">
          {event.title}
        </h1>
        <div
          className={`my-5 flex ${event?.venue?.venueType === 'online' ? 'md:h-[400px]' : 'h-[400px]'} w-full flex-col gap-2 md:flex-row lg:h-[450px] lg:gap-5`}
        >
          <Image
            src={event.images[0]?.source ?? '/assets/images/volunteering2.jpg'}
            alt={event.title}
            width={400}
            height={450}
            className={`h-[200px] w-full rounded-xl object-cover shadow-md md:h-full md:w-1/2 lg:w-[60%]`}
          />
          {event?.venue?.venueType !== 'online' && (
            <div className="flex flex-1 flex-col rounded-xl">
              <div className="flex-1 overflow-hidden rounded-xl">
                {position && <LocationMap position={position} />}
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-5">
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="text-xl font-semibold text-red-500 lg:text-2xl">
              About the event
            </h2>
            <div className="flex flex-col items-start gap-2 pb-2">
              <div className="flex items-center justify-center gap-2">
                <FaClock className="text-red-500" />
                {new Date(event.dateTime).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaLocationDot className="text-red-500" />
                {event.venue?.name}
              </div>
              {event?.going && (
                <h1 className="w-full text-start text-lg font-semibold lg:text-2xl">
                  {event?.going} confirmed attendees
                </h1>
              )}
            </div>
            <MarkdownRenderer
              content={event?.description ? event.description : ''}
            />

            {/* <p className="text-md lg:text-lg">{event.description}</p> */}
          </div>
          <div className="flex-2 hidden w-1/4 flex-col items-start justify-center gap-2 md:flex">
            <div className="flex w-fit w-full items-center justify-end gap-2">
              <div className="flex flex-col">
                <h3 className="text-end text-xs lg:text-sm">Organized by:</h3>
                <h4 className="text-end text-xs font-semibold lg:text-lg">
                  {event?.group?.name && event?.group?.link && (
                    <Link
                      href={event.group.link ?? '/'}
                      target="_blank"
                      className="hover:text-red-500"
                    >
                      {event.group.name}
                    </Link>
                  )}
                </h4>
              </div>
              <Link
                href={event.group.link ?? '/'}
                target="_blank"
                className="hover:text-red-500"
              >
                <Image
                  src={
                    event.group.logo.source ?? '/assets/images/no-avatar.webp'
                  }
                  width={80}
                  height={80}
                  alt="group-logo"
                  className="min-h-[80px] min-w-[80px] rounded-xl object-cover"
                />
              </Link>
            </div>
            <div className="flex w-fit w-full items-center justify-end gap-2">
              <div className="flex flex-col">
                <h3 className="text-end text-xs lg:text-sm">Hosted by:</h3>
                <h4 className="text-end text-xs font-semibold lg:text-lg">
                  {event?.host?.name && event.host.name}
                </h4>
              </div>
              <Image
                src={
                  (event?.host?.memberPhoto?.source &&
                    event.host.memberPhoto.source) ??
                  '/assets/images/no-avatar.webp'
                }
                width={80}
                height={80}
                alt="host-photo"
                className="min-h-[80px] min-w-[80px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
        <EventButton event={event && event} />
      </div>
    </section>
  )
}

export default Event
