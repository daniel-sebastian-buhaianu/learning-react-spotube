import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  // Not working now, need to find a way around CORS
  const searchYouTube = text => {
    try {
    fetch(`https://www.youtube.com/results?search_query=${text}`)
      .then(response => console.log(response))
    }
    catch (error) {
      console.log(error)
    }
  }
  
  const handleKeyDown = event => {
    if (event.code === "Enter") {
      searchYouTube(event.target.value);
    }
  };
  
  const handleOnClick = event => {
    searchYouTube(event.currentTarget.previousElementSibling.value);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='app-title'>SpoTube</h1>
        <SearchBox 
          placeholder={'Search anything from YouTube...'}
          handleKeyDown={handleKeyDown}
          handleOnClick={handleOnClick}
        />
      </div>
    </div>
  );
}

export default App;
