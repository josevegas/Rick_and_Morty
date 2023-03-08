import SearchBar from './SearchBar';
import style from './Style.module.css';

export default function Nav(props){
    
    return(
        <div className={style.divNav}>
            <SearchBar onSearch={(characterID) =>props.onSearch(characterID)} />
        </div>
    )
}