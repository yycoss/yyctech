import { TabSection } from '@/components/TabSection/TabSection'
import { HeroSection } from '@/components/HeroSection'

// Get Communities
async function fetchCommunities() {
  const response = await fetch('https://12c05a49a5c6.ngrok-free.app/api/fetch-groups', {
    headers: {
      Authorization: `Bearer ACCESS TOKEN`,
    },
    // next: { revalidate: 7200 }, // revalidate every 2 hours
    cache: 'no-cache',
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  const data = await response.json()

  console.log('data ??', data)

  return data.data
}

export default async function Home() {
  const communities = await fetchCommunities() // With upcoming events included in the obj

  return (
    <>
      <HeroSection />
      <TabSection communities={communities} />
      {/* 
      <div className="flex h-80 items-center justify-center bg-yellow-200 text-center text-xl text-yellow-800">
        🚧The Meetup API version this project relies on has been deprecated.🚧
        <br />
        I&apos;m updating it to match the new schema. Thanks for your
        patience!👷
      </div> */}
    </>
  )
}
