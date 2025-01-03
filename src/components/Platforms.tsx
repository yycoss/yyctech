import Link from 'next/link'
import Image from 'next/image'
import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { platforms } from '@/data/platforms'

interface Platform {
  secondaryImage: string
  briefDrescription: any
  badge: any
  groupPhoto: any
  name: string
  description: string
  link: { href: string; label: string }
  logo: any
  type: string
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
  title: 'Platforms',
  description: 'Communities for tech enthusiasts in Calgary.',
}

export default function Platforms(groups: {
  groups: { communities: Record<string, Platform> }
}) {
  const data = groups
  const communities = Object.entries(data.groups.communities)

  for (let i = 0; i < communities.length; i++) {
    const currentPlatform = platforms.find(
      (item) => item.id === (communities[i][1] as any).id,
    )
    if (currentPlatform) {
      ;(communities[i][1] as Platform).logo = currentPlatform.logo
      ;(communities[i][1] as Platform).type = currentPlatform.type
      ;(communities[i][1] as Platform).badge = currentPlatform.badge
      ;(communities[i][1] as Platform).link = currentPlatform.link
      ;(communities[i][1] as Platform).briefDrescription =
        currentPlatform.description
      ;(communities[i][1] as Platform).secondaryImage = currentPlatform.image
    }
  }
  ;``

  return (
    <ul
      role="list"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-6 antialiased sm:grid-cols-2 lg:grid-cols-3"
    >
      {communities.map((group, index) => (
        <Link key={index} href={group[1].link.href ? group[1].link.href : '#'}>
          <Card
            as="li"
            key={group[1].name}
            className="group hover:scale-[102%] hover:shadow-md"
          >
            {group[1].type && (
              <Image
                src={group[1].logo}
                alt=""
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full opacity-0 shadow-lg shadow-zinc-800/5 transition-all duration-300 group-hover:opacity-100"
                unoptimized
              />
            )}
            <div className="relative h-[180px] w-full overflow-hidden rounded-md">
              <Image
                src={
                  group[1].groupPhoto.source && !group[1].name.includes('Elixir')
                    ? group[1].groupPhoto.source
                    : group[1].secondaryImage
                }
                width={400}
                height={300}
                alt="community-image"
                className="absolute left-0 top-0 h-full w-full object-cover opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-[95%] dark:opacity-50"
              />
            </div>
            <div className="px-4 opacity-60 group-hover:opacity-100">
              <div className="mt-5 flex w-full items-center gap-1">
                <h2 className="text-l font-semibold text-zinc-700 dark:text-zinc-100">
                  <Card.Link href={group[1].link}>{group[1].name}</Card.Link>
                </h2>
                {group[1].badge && (
                  <div className="-translate-x-6 rounded-lg bg-[#dd514c] px-2 py-1 text-[0.75em] font-semibold text-white opacity-0 transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    {group[1].badge}
                  </div>
                )}
              </div>
              <Card.Description>{group[1].briefDrescription}</Card.Description>
              <p className="relative z-10 mt-4 flex justify-end text-sm font-medium text-zinc-400 transition group-hover:text-[#dd514c] dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{group[1].link.label}</span>
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </ul>
  )
}
