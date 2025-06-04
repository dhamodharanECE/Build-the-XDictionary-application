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
  return (
    <>
    <div>
      <h1>Dictionary</h1>
    </div>
     <div>
      <input type="text"  placeholder='Write a Something...' value={val} onChange={handleInput}/>
      <button onClick={handleSearch}>Search</button>
    </div>

    <div>
      { definition !== null && ( 
         definition === 'Word not found in the dictionary.' ? (
          <p>{definition}</p>
        ) : (
          <>
          <h3>Definition:</h3> <p>{definition}</p>
          </>
        )
        )}
      </div>
    </>
  )
}

export default App
