import './App.css'
import { useState } from'react'
import React from 'react'

const App = () => {
 const words = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores definition for a component." }
  ];
  
  const [val, setVal] = useState("");
  const [definition, setDefinition] = useState(null);

  const handleSearch = () => {
    if(!val.trim()){
      setDefinition(null);
      return;
    }
  
    const value = words.find(item => item.word.toLocaleLowerCase() === val.toLocaleLowerCase());

    if(value){
      setDefinition(value.meaning)
    }
    else{
      setDefinition("Word not found in the dictionary.");
    }
  }

  function handleInput(event) {
    setVal(event.target.value);
  }

  return (
    <div className="dictionary-app">
      <h1>Dictionary App</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a word..."
          value={val}
          onChange={handleInput}
          data-testid="search-input"
        />
        <button onClick={handleSearch} data-testid="search-button">
          Search
        </button>
      </div>

      <div className="definition-container">
        <h3 data-testid="definition-heading">Definition:</h3>
        {definition && definition !== "Word not found in the dictionary." && (
          <p data-testid="definition-text">{definition}</p>
        )}
        {definition === "Word not found in the dictionary." && (
          <p data-testid="not-found-message">{definition}</p>
        )}
      </div>
    </div>
  );
}

export default App
