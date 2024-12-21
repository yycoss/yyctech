export default async function handler(req: any, res: any) {
    const accessToken = req.headers.authorization?.split(' ')[1]; // Expect "Bearer <access_token>"

    console.log('ACCESS TOKEN --->', accessToken);
  
    if (!accessToken) {
      return res.status(401).json({ error: 'Access token missing' });
    }
  
    try {
      const response = await fetch(`https://api.meetup.com/yyctech/events`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
      }
  
      const events = await response.json();

      console.log('EVENTS --->', events);

      res.status(200).json(events);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
  