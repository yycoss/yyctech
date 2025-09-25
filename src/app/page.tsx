import { TabSection } from '@/components/TabSection/TabSection'
import { HeroSection } from '@/components/HeroSection'

// Get Communities
async function fetchCommunities() {
  const response = await fetch('https://yyctech.vercel.app/api/fetch-groups', {
    headers: {
      Authorization: `Bearer YOUR_ACCESS_TOKEN`,
    },
    next: { revalidate: 7200 }, // revalidate every 2 hours
    // cache: 'no-cache',
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  const data = await response.json()

  return data.data
}

export default async function Home() {
  // const communities = await fetchCommunities(); // With upcoming events included in the obj

  return (
    <>
      <HeroSection />
      {/* <TabSection communities={communities} /> */}

      <div className="flex h-80 items-center justify-center bg-yellow-200 text-center text-xl text-yellow-800">
        🚧The Meetup API version this project relies on has been deprecated.🚧
        <br />
        I&apos;m updating it to match the new Meetup API schema. Thanks for your
        patience!👷
      </div>
    </>
  )
}
