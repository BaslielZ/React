import './App.css'
import React, { useEffect, useState } from 'react';

const Card =({title})=>{

  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`)
  },[hasLiked])
  

  return(
    <div className='card' onClick={() => setCount(count+1)}>
      <h2>{title}</h2>
      <h2>{count ? count : null }</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked': 'Like'}</button>
    </div>
  )
}

const App = () =>{
  
  return (
  <div className='card-container'>
    <Card title='The Lion King'/>
    <Card title='Puss In Boots'/>
    <Card title='Turning Red'/>
  </div>
  )
}

export default App
