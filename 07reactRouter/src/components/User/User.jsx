import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  // const userId = useParams().userid; // useParams is a hook that allows us to access the parameters of the current route. In this case, we are accessing the "userid" parameter from the URL and storing it in the userId variable.

  const {userid} = useParams(); // we can also use destructuring to directly extract the "userid" parameter from the object returned by useParams.
  return (
    <div className='bg-gray-600 text-white p-4'>User: {userid}</div>
  )
}

export default User;