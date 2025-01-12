interface EventParams {
  slug: string
}

// Get Event
export async function fetchEvent(eventId: string) {
  const response = await fetch(
    `https://a0ab-38-55-64-111.ngrok-free.app/api/fetch-event?eventId=${eventId}`,
    {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`,
      },
      next: { revalidate: 7200 }, // revalidate every 2 hours
    },
  )

  if (!response.ok) {
    throw new Error(`Something went wrong :(`);
  }

  const data = await response.json();

  return data.data;
}

const Event = async ({ params }: { params: EventParams }) => {

  const { event } = await fetchEvent(params.slug)

  return <div className="h-screen border border-red-600">
    <h1>EVENT</h1>
    <h1 className="text-2xl font-bold">{event.title}</h1>
    <p>{event.description}</p>
  </div>
}

export default Event;
