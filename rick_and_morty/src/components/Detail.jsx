import style from './Style.module.css'
import {useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom'

export default function Detail(props){
    const {id}=useParams();
    const navigate=useNavigate();
    const [character,setCharacter]=useState({});
    console.log(id);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
    }, [id]);
    const backhome=()=>{navigate('/home')};
    return(
        <div className={style.divDetail}>
            <div className={style.divData}>
                <h1>Nombre: {character.name}</h1>
                <h3>Status: {character.status}</h3>
                <h3>Especie: {character.species}</h3>
                <h3>Género: {character.gender}</h3>
                <h3>Origen: {character.origin?.name}</h3>
            </div>
            <img src={character.image} alt={character.name} className={style.divImage}/>
            
            <div className={style.divNav}>
                <div className={style.divSearching}><button onClick={backhome} className={style.buttonSearching}>Volver</button></div>
            </div>
        </div>
        
    )
}