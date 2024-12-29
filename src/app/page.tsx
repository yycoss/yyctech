import { HeroSection } from '@/components/HeroSection'
import { TabSection } from '@/components/TabSection'

// Get Communities
async function fetchCommunities() {
  const response = await fetch('https://6dbe-177-226-115-12.ngrok-free.app/api/fetch-groups', {
    headers: {
      Authorization: `Bearer YOUR_ACCESS_TOKEN`,
    },
    cache: 'force-cache',
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  const data = await response.json()

  return data.data;
}

export default async function Home() {
  const communities = await fetchCommunities();
  return (
    <div>
      <HeroSection />
      <TabSection communities={communities} />
    </div>
  )
}
