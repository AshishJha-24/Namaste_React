import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const err=useRouteError();
    console.log(err);
  return (
    <div>
      <h1> Oops!!!!</h1>
      <h2>Something went wrong !</h2>
      <h2>{err.status} {err.statusText}</h2>
      <img  className="notFound" src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg" alt="not dound image" />
    </div>
  )
}

export default Error
