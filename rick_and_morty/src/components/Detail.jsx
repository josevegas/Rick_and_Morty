import style from './Style.module.css'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'

export default function Detail(props){
    const {id}=useParams();
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
    return(
        <div className={style.divSearching}>
            Aquí se renderiza los detalles de carta {character.name}.
        </div>
    )
}