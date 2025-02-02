"use client";

const EventButton = ({ event }: any) => {
  return (
    <button
      onClick={() => window.open(event?.eventUrl ?? '/', '_blank')}
      className="mt-5 w-full lg:w-1/3 rounded-xl bg-red-500 py-4 text-white transition-all duration-200 hover:bg-red-700"
    >
      Attend Event
    </button>
  )
}

export default EventButton
