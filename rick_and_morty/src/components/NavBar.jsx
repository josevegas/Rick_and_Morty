import SearchBar from './SearchBar';
import RandomButton from './RandomButton';
import style from './Style.module.css';
import {NavLink} from 'react-router-dom';

export default function NavBar(props){
    
    return(
        <div className={style.divNav}>
            <div className={style.divSearching}><NavLink to='/home'>Home</NavLink></div>
            <div className={style.divSearching}><NavLink to='/about'>About</NavLink></div>
            <div className={style.divSearching}><NavLink to='/favorites'>Favorites</NavLink></div>
            <SearchBar onSearch={(characterID) =>props.onSearch(characterID)} />
            <RandomButton onRandom={()=>props.onRandom()} />
            <div className={style.divSearching}><NavLink to='/'>Close</NavLink></div>
        </div>
    )
}