import SearchBar from './SearchBar';
import style from './SearchBar.module.css'

export default function Nav(props){
    return(
        <div className={style.divConten}>
            <div className={style.divSearching}>
                <SearchBar onSearch={(characterID) => window.alert(characterID)} />
            </div>
        
      </div>
    )
}