import style from './Style.module.css';
import {useState} from 'react';

export default function SearchBar(props) {
   const [character,setCharacter]=useState("");
   const handleInput=(event)=>{
      const {value}=event.target;
      setCharacter(value)
   }
   return (
      <div className={style.divSearching}>
         <input type='search' onChange={handleInput} className={style.inputSearching}/>
      <button onClick={()=>props.onSearch(character)} className={style.buttonSearching}>Agregar</button>
      </div>
   );
}