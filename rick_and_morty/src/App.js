import './App.css'
import {useState, useEffect} from 'react';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'

function App () {
  const [characters, setCharacters]=useState([]);
  // useEffect(()=>{

  // })
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
  function onRandom(){
    let id=Math.ceil(Math.random()*825)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=>response.json())
    .then((data) =>{
      if (characters.filter((char)=>char.id===data.id).length===0) {
          setCharacters((oldChars) => [...oldChars, data]);
          console.log('random card')
        }else{console.log('falló')}
      }
    )
  }
  const onClose=(id)=>{
    const filtered=characters.filter((char)=>char.id!==Number(id))
    setCharacters(filtered);
  }
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} onRandom={onRandom}/>
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