import slackLogo from '@/images/logos/Slack-Logo-PNG-File.webp'
import discordLogo from '@/images/logos/discord.webp'

export const platforms = [
  {
    name: 'Calgary Game Developers',
    meetup: `https://www.meetup.com/calgary-game-developers`,
    description:
      "For people of all skill levels interested in creating video games. It doesn't matter whether you're a programmer, artist or other, so long as you simply enjoy making games.",
    link: {
      href: 'https://discord.com/channels/712803957965193278',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/gdc.webp',
    badge: 'Featured',
  },
  {
    name: 'YYC Design & Development',
    meetup: 'https://www.meetup.com/yyc-dev',
    description:
      'Welcome to YYC Dev! - Formally known as YYC Ruby. We are a technical meetup group that meets monthly to connect, learn, and grow as a technical community.',
    link: { href: 'http://yycdesign.slack.com', label: 'Slack Channel' },
    logo: slackLogo,
    type: 'slack',
    image: '/assets/images/yycdev.jpg',
    badge: 'Popular',
  },
  {
    name: 'Calgary Tech Hikes',
    meetup: 'https://www.meetup.com/calgary-tech-hikes',
    description: "A group for folks working in tech in Calgary to get out hiking in the mountains together. Software developers, hardware engineers, product people, and founders.",
    link: {
      href: 'https://www.meetup.com/calgary-tech-hikes',
      label: 'meetup.com/calgary-tech-hikes',
    },
    logo: '',
    type: '',
    image: '/assets/images/hike.jpg',
    badge: 'New',
  },
  {
    name: 'Calgary Software Crafters',
    meetup: `https://www.meetup.com/calgary-software-crafters/`,
    description:
      'We find that writing code together makes it more fun and better quality than going it alone. Our meetings include guest speakers and opportunities to practice new skills.',
    link: {
      href: 'https://discord.com/channels/785857798881542144/785857798881542148',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/softwareCrafters.jpg',
    badge: 'Recommended',
  },
  {
    name: 'Pixels & Pints',
    meetup: 'https://www.meetup.com/pxandpints',
    description:
      'Venue for developers and creatives to sit down, relax and talk shop. There are no presentations or pre-defined discussion topics; just a few pints and good conversation',
    link: {
      href: 'https://discord.com/channels/707420581955371038/707634908373319760',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/pixels.jpg',
    badge: '',
  },
  {
    name: 'Software Developers of Calgary',
    meetup: 'https://www.meetup.com/pxandpints',
    description:
      'Where people can come and work on their own projects, or band together with others. Or just come and learn a new language or framework.',
    link: {
      href: 'https://discord.com/channels/515951809752465408/867167830222962708',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/yycLibrary.jpg',
    badge: 'New',
  },
  {
    name: "Calgary's Google Developer Group",
    meetup: 'https://www.meetup.com/gdgyyc',
    description:
      'We help you accelerate your knowledge, experience and expertise in building with Google technology for AI, Cloud, Web and Mobile.',
    link: {
      href: 'https://developers.google.com/community/gdg',
      label: 'Join Chapter here',
    },
    logo: '',
    type: '',
    image: '/assets/images/googleDevGroup.jpg',
    badge: '',
  },
  {
    name: 'Calgary Tech Talks',
    meetup: 'https://www.meetup.com/calgary-tech-talks1',
    description:
      'Our vibrant community brings together developers, tech leaders, and innovators to share knowledge, inspire creativity, and drive the future of technology in our city.',
    link: {
      href: 'https://calgarytechtalks.com/',
      label: 'calgarytechtalks.com',
    },
    logo: '',
    type: '',
    image: '/assets/images/ctt.webp',
    badge: '',
  },
  {
    name: 'The Test Tribe Calgary',
    meetup: 'https://www.meetup.com/the-test-tribe-calgary',
    description:
      'We take pride in solving upskilling and growth for global Testing professionals through our unique offerings like Expert Courses, Membership, Offline Mixers and more.',
    link: {
      href: 'https://discord.gg/4qcSKMjVhY',
      label: 'Discord Server',
    },
    logo: discordLogo,
    type: 'discord',
    image: '/assets/images/ttc.webp',
    badge: 'New',
  },
  {
    name: 'Calgary UX',
    meetup: 'https://www.meetup.com/calgaryux',
    description: "The Calgary UX is a community that aims to create a safe and welcoming environment for all attendees. Together, we connect people, celebrate talent and share knowledge.",
    link: {
      href: 'https://calgaryux.com',
      label: 'calgaryux.com',
    },
    logo: '',
    type: '',
    image: '/assets/images/calgaryUx.webp',
    badge: '',
  },
  {
    name: 'Write the Docs Calgary',
    meetup: 'https://www.meetup.com/wtd-calgary',
    description: "A group focused on documentation, technical writing and information delivery. Whether you are a technical writer, information developer or a programmer.",
    link: {
      href: 'https://www.writethedocs.org/meetups/index.html',
      label: 'writethedocs.org/meetups',
    },
    logo: '',
    type: '',
    image: '/assets/images/wtd.webp',
    badge: '',
  },
  {
    name: 'CivicTech YYC - Tech for Good',
    meetup: 'https://www.meetup.com/civictechyyc-tech-for-good',
    description: "We are passionate volunteers who come together to conceptualize and engage on projects that serve to make Calgary an even better place to live.",
    link: {
      href: 'https://www.meetup.com/civictechyyc-tech-for-good',
      label: 'meetup.com/civictechyyc-tech-for-good',
    },
    logo: '',
    type: '',
    image: '/assets/images/civic.jpg',
    badge: '',
  },
]
