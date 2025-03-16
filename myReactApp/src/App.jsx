import './App.css'
import React, { useState } from 'react';

const Card =({title})=>{

  const [hasLiked, setHasLiked] = useState(false);

  return(
    <div className='card'>
      <h2>{title}</h2>
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
