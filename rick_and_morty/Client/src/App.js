import './App.css'
import {useState,useEffect} from 'react';
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'
import {Route,Routes,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';

function App () {
  const [characters, setCharacters]=useState([]);
  const [access,setAccess]=useState(false);
  const userName="josevegas@gmail.com";
  const password="Jlvm2612";
  const navigate=useNavigate();
  const location=useLocation();
  const onSearch=(id)=>{
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name && characters.filter((char)=>char.id===data.id).length===0) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else if(data.name) {window.alert('Ya agregaste ése personaje')}else{
            window.alert(data.error);
         }
      })
      .catch((error)=>window.alert('Server caído'));
  }
  function onRandom(){
    let id=Math.ceil(Math.random()*825)
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response)=>response.json())
    .then((data) =>{
      if (characters.filter((char)=>char.id===data.id).length===0) {
          setCharacters((oldChars) => [...oldChars, data]);
        }else{console.log('falló')}
      }
    )
  }
  const onClose=(id)=>{
    const filtered=characters.filter((char)=>char.id!==Number(id))
    setCharacters(filtered);
  }
  // const login=(userData)=>{
  //   console.log(userData)
  //   if(userData.userName===userName&&userData.password===password){
  //     console.log('si son')
  //     setAccess(true);
  //     navigate('/home')
  //   }
  // }
  function login(userData) {
    const { userName, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?userName=${userName}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }
  useEffect(()=>{
    !access&&navigate('/');
  },[access,navigate]);
  
  return(
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !=="/" && <NavBar onSearch={onSearch} onRandom={onRandom}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:id" element={<Detail characters={characters}/>} /> 
      </Routes>
    </div>
  )
}

export default App  