export default async function handler(req: any, res: any) {
    const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
    const { code } = req.query;
  
    if (!code) {
      return res.status(400).json({ error: 'Authorization code missing' });
    }
  
    try {
      const tokenResponse = await fetch('https://secure.meetup.com/oauth2/access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: CLIENT_ID!,
          client_secret: CLIENT_SECRET!,
          grant_type: 'authorization_code',
          redirect_uri: REDIRECT_URI!,
          code,
        }),
      });
  
      if (!tokenResponse.ok) {
        throw new Error(`Failed to fetch access token: ${tokenResponse.statusText}`);
      }
  
      const tokenData = await tokenResponse.json();

      console.log('TOKEN DATA --->', tokenData);

      res.status(200).json(tokenData); // Access token is included in this response
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: errorMessage });
    }
  }
  