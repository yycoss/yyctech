import React from 'react'

// export async function getServerSideProps() {
//   const accessToken = 'YOUR_ACCESS_TOKEN' // Retrieve this from the callback response
//   const groupName = 'YOUR_GROUP_NAME'

//   const response = await fetch(`https://api.meetup.com/${groupName}/events`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   })

//   const events = await response.json()

//   return {
//     props: {
//       events,
//     },
//   }
// }

const MeetUp = () => {
  return (
    <div className="h-full border border-red-600">
      <h1>MeetUp</h1>
    </div>
  )
}

export default MeetUp;