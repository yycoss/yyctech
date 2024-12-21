export default function handler(req: any, res: any) {
  const encodedClientId = encodeURIComponent(process.env.CLIENT_ID!)
  const encodedRedirectUri = encodeURIComponent(process.env.REDIRECT_URI!)

  const authorizationUrl = `https://secure.meetup.com/oauth2/authorize?client_id=${encodedClientId}&response_type=code&redirect_uri=${encodedRedirectUri}`

  res.redirect(authorizationUrl)
}
