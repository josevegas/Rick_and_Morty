import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' className={style.inputSearching}/>
         <button onClick={props} className={style.buttonSearching}>Agregar</button>
      </div>
   );
}
