import React, { useState } from 'react';
import Search from './components/Search';

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
  return(
    <div className='pattern'>
      <div className='wrapper'>
        <header>
          <img src="/hero-img.png" alt="Hero Banner" />
          <h1> <span className='text-gradient'>Find Movies</span> You'll Love</h1>
          </header>
      </div>
      <Search searchTerm ={searchTerm} setSearchTerm={setSearchTerm}/>
      <h1>{searchTerm}</h1>
    </div>
  )
}

export default App
