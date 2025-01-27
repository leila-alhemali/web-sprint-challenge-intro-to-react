import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterName from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    const fetchCharacter = () => {
      axios.get(`https://swapi.dev/api/people`)
      .then(resp => {
        console.log(resp.data)
        setCharacters(resp.data)
      })
      .catch( err => {
        setCharacters(err)
      })
    }
  
  fetchCharacter()
  
  },[])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2 className="Header">Dune is Better</h2>
      <CharacterName characters={characters} />
    </div>
  );
}

export default App;
