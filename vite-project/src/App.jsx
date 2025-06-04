import './App.css'
import { useState } from'react'
import React from 'react'

const App = () => {
  const words = [
                      { word: "React", meaning: "A JavaScript library for building user interfaces." },

                      { word: "Component", meaning: "A reusable building block in React." },

                      { word: "State", meaning: "An object that stores definition for a component." }

                  ]
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
import './App.css';
import { useState } from 'react';

const App = () => {
  const words = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores definition for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState(null);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDefinition(null);
      return;
    }

    const foundWord = words.find(item => 
      item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dictionary-app">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={handleInput}
          data-testid="search-input"
        />
        <button onClick={handleSearch} data-testid="search-button">
          Search
        </button>
      </div>
      
      <div className="definition-container">
        {definition && (
          <>
            <h3>Definition:</h3>
            <p data-testid="definition-text">
              {definition}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
