import './App.css'
import {useState, useEffect} from 'react';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
// import characters, { Rick } from './data.js'

function App () {
  const [characters, setCharacters]=useState([]);
  // useEffect(()=>{

  // })
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };
  const onSearch=(character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name && characters.filter((char)=>char.id===data.id).length===0) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else if(data.name) {window.alert('Ya agregaste ése personaje')}else{
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  const onClose=(id)=>{
    const filtered=characters.filter((char)=>char.id!=Number(id))
    setCharacters(filtered);
  }
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <hr />
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
      <hr />
      
    </div>
  )
}

export default App  