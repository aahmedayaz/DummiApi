import React from 'react'

const WelcomeMessage = ({onGetPostClick}) => {
  return (
    <>

      <center className='welcome-message'>  <h1 >There are no posts </h1>
      <button type="button" className="btn btn-primary" onClick={onGetPostClick}>Get Post From Server</button>
      </center> 
    </>
  )
}

export default WelcomeMessage
