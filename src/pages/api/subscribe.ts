import Airtable from 'airtable';
import { NextApiRequest, NextApiResponse } from 'next';

Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT, // Replace with your actual PAT
});

const base = Airtable.base('appGlmVhCtwpaWiJg');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    try {
      await base('Table 1').create([
        {
          fields: {
            'First Name': firstName,
            'Last Name': lastName,
            Email: email,
          },
        },
      ])
     
      return res.status(200).json({ message: 'Success' })
    } catch (error) {
      console.error('Error saving to Airtable:', error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
