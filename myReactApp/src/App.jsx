import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Spinner from './components/Spinner'


const APT_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
 
const API_OPTIONS = {
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const fetchMovies = async () =>{
      setIsLoading(true)
      setErrorMessage('')
    
    try {
      
      const endpoint = `${APT_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)

      if (!response.ok){
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json()
      console.log(data)

      if (data.Response === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch movies')
        setMovieList([])
        return
      }

      setMovieList(data.results)
    } 
    
    catch (error) {
      console.error(`Error fetching movies: ${error}`)  
      setErrorMessage('Error fetching movies, try again later')    
    } 
    
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, []);


  return(
    <div className='pattern'>
      <div className='wrapper'>
        <header>
          <img src="/hero-img.png" alt="Hero Banner" />
          <h1> <span className='text-gradient'>Find Movies</span> You'll Love</h1>
          <Search searchTerm ={searchTerm} setSearchTerm={setSearchTerm}/>
          
        </header>

        <section className='all-movies'>
          <h1>All Movies</h1>
          {
            isLoading ?(
              <Spinner/>
            ): errorMessage ? (
              <p className='text-red-500'>{errorMessage}</p>
            ): 
            <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className='text-white'>{movie.title}</p>
              ))}
            </ul>
          }
        </section>
      </div>
      <h1>{searchTerm}</h1>
    </div>
  )
}

export default App
