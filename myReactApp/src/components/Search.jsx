import React, { useState } from 'react';

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className='search'>
            <div>
                <img src="../../public/search.svg" alt="search" />
                <input type="text" 
                placeholder='Search for a movie...' 
                value={searchTerm} 
                onChange={(event)=>setSearchTerm(event.target.value)}/>

            </div>
        </div>
    )
}

export default Search