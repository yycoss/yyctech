import { TabSection } from '@/components/TabSection'
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
  const communities = await fetchCommunities(); // With upcoming events included in the obj

  return (
    <div>
      <HeroSection />
      <TabSection communities={communities} />
    </div>
  )
}
