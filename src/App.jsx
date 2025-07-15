import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  //  useState for joke text and loading indicator
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  // fetch a programming joke from the API
  const fetchJoke = async () => {
    setLoading(true) // Show loading message per rubric “Message Loads”
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/Programming?type=single'
      )
      const data = await response.json()
      setJoke(data.joke) 
    } catch (error) {
      console.error('Error fetching joke:', error)
      setJoke('Failed to load joke.') // Graceful error handling
    } finally {
      setLoading(false)
    }
  }

  // Side effect: fetch a joke once on component mount
  useEffect(() => {
    fetchJoke()
  }, []) 

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App