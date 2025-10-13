export default async function handler(req: any, res: any) {
  const accessToken = req.headers.authorization?.split(' ')[1]

  if (!accessToken)
    return res.status(401).json({ error: 'Access token missing' })

  const groupNames = [
    'pxandpints',
    // 'calgary-game-developers',
    // 'elixir-calgary',
    // 'yyc-dev',
    // 'calgary-software-crafters',
    // 'software-developers-of-calgary',
    // 'gdgyyc',
    // 'the-test-tribe-calgary',
    // 'calgaryux',
    // 'wtd-calgary',
    // 'civictechyyc-tech-for-good',
    // 'hack-the-box-meetup-calgary-ca',
    // 'tech-connect-ab',
  ]

  // Generate the dynamic GraphQL query
  const query = `
    query {
      ${groupNames
        .map(
          (group, index) => `
            group${index + 1}: groupByUrlname(urlname: "${group}") {
              id
              name
              description
              link
              events(first: 2) {
                edges {
                  node {
                    id
                    title
                    eventUrl
                    eventHosts {
                      memberId
                      name
                      memberPhoto {
                        baseUrl
                        id
                      }
                    }
                    dateTime
                    description
                    duration
                    featuredEventPhoto {
                      id
                      baseUrl
                    }
                  }
                }
              }
            }
        `,
        )
        .join('\n')}
    }
  `

  try {
    const response = await fetch('https://api.meetup.com/gql-ext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      const errorDetails = await response.text()
      throw new Error(
        `Failed to fetch data: ${response.statusText}, Details: ${errorDetails}`,
      )
    }

    const data = await response.json()

      res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
}
