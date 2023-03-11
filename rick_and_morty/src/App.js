import './App.css'
import {useState} from 'react';
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail';
import {Route,Routes} from 'react-router-dom';

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
  console.log('no me carga')
  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} onRandom={onRandom}/>
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} /> 
      </Routes>
    </div>
  )
}

export default App  