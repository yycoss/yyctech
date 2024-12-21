export default async function handler(req: any, res: any) {
  const accessToken = req.headers.authorization?.split(' ')[1]; // Extract access token
  if (!accessToken) {
    return res.status(401).json({ error: 'Access token missing' });
  }

  const query = `
    query {
      event(id: "305194921") {
        title
        dateTime
      }
    }
  `

  try {
    const response = await fetch('https://api.meetup.com/gql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      const errorDetails = await response.text() // Log detailed error
      throw new Error(
        `Failed to fetch data: ${response.statusText}, Details: ${errorDetails}`,
      )
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
}
