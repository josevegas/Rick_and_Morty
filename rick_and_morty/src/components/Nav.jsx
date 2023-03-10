import SearchBar from './SearchBar';
import RandomButton from './RandomButton';
import style from './Style.module.css';

export default function Nav(props){
    console.log(props.onRandom)
    return(
        <div className={style.divNav}>
            <SearchBar onSearch={(characterID) =>props.onSearch(characterID)} />
            <RandomButton onRandom={()=>props.onRandom()} />
        </div>
    )
}