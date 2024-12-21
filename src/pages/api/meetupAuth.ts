export default function handler(req: any, res: any) {
  console.log('process.env.CLIENT_ID -->', process.env.CLIENT_ID)
  console.log('process.env.REDIRECT_URI -->', process.env.REDIRECT_URI)

  const authorizationUrl = `https://secure.meetup.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    process.env.REDIRECT_URI || '',
  )}`

  res.redirect(authorizationUrl)
}
