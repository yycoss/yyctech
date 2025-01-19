import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa'

interface EventParams {
  slug: string
}

// Get Event
export async function fetchEvent(eventId: string) {
  const response = await fetch(
    `https://eb8f-38-55-64-111.ngrok-free.app/api/fetch-event?eventId=${eventId}`,
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

  console.log('event: ', event)

  return (
    <section className="mt-24 flex items-center justify-center">
      <div className="flex h-screen max-w-[1280px] flex-col justify-start">
        <h1 className="w-full text-3xl font-bold">{event.title}</h1>
        <div className="my-5 flex w-full gap-5">
          {event?.images[0]?.source && (
            <Image
              src={event.images[0].source}
              alt={event.title}
              width={400}
              height={400}
              className="flex-1 rounded-xl shadow-md"
            />
          )}
          <div className="flex-2 flex w-1/4 flex-col">
            <div className="flex-1 rounded-xl border border-red-600 flex gap-4 flex-col">
              <div className='flex-1 border border-blue-600 rounded-xl'>
                MAP
              </div>
            <button className="w-full rounded-xl bg-red-500 py-4 text-white">
                Want to attend?
              </button>
            </div>
            <div className='flex flex-col py-2 gap-2'>
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
                {event.venue.name}
              </div>
              {event?.going && (
                <h1 className="w-full text-center text-2xl font-semibold">
                  {event?.going} attending
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <h2 className="mb-2 text-2xl font-semibold">About the event:</h2>
            <p className="text-lg">{event.description}</p>
          </div>
          <div className="flex-2 flex w-1/4 flex-col items-start justify-center gap-2 rounded-lg p-6">
            <div className="flex w-fit items-center justify-start gap-2">
              <Image
                src={event.group.logo.source}
                width={80}
                height={80}
                alt="group-logo"
                className="rounded-xl border border-zinc-100"
              />
              <div className="flex flex-col">
                <h3 className="text-sm">Organized by:</h3>
                <h4 className="text-lg font-semibold">
                  {event?.group?.name && event.group.name}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={
                  event?.host?.memberPhoto?.source &&
                  event.host.memberPhoto.source
                }
                width={80}
                height={80}
                alt="host-photo"
                className="rounded-xl border border-zinc-100"
              />
              <div className="flex flex-col">
                <h3 className="text-sm">Hosted by:</h3>
                <h4 className="text-lg font-semibold">
                  {event?.host?.name && event.host.name}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Event
