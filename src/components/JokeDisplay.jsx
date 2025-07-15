import React from 'react'

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {loading ? (               
        <p>Loading...</p>        
      ) : (
        <p>{joke}</p>            
      )}
    </div>
  )
}

export default JokeDisplay
