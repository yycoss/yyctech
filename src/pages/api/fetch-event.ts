export default async function handler(req: any, res: any) {
  const accessToken = req.headers.authorization?.split(' ')[1]

  if (!accessToken)
    return res.status(401).json({ error: 'Access token missing' })

  const eventId = req.query.eventId || req.body.eventId;

  if (!eventId) {
    return res.status(400).json({ error: 'Missing eventId' })
  }

  const query = `
   query($eventId: ID!) {
       event(id: $eventId) {
         title
         eventUrl
         rsvps {
        	edges {
            node {
              id
              member {
                name
              }
            }
          }
         }
				eventHosts {
  				member {
            id
            name
            memberPhoto {
              id
              baseUrl
            }
          }
  				name
				}
         venues{
          id
          name
         	address
         	city
         	state
         	postalCode
         	venueType
         	lat
         	lon
        }
         description
         dateTime
         featuredEventPhoto {
          id
          baseUrl
         }
         group {
          name
          link
          keyGroupPhoto {
            id
            baseUrl
           }
         }
       }
     }
    `
  const variables = {
    eventId,
  }

  try {
    const response = await fetch('https://api.meetup.com/gql-ext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      const errorDetails = await response.text()
      throw new Error(
        `Failed to fetch data: ${response.statusText}, Details: ${errorDetails}`,
      )
    }

    const data = await response.json();
    res.status(200).json(data)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
}
