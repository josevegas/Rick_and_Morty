import style from './Style.module.css';
import { connect, useDispatch } from 'react-redux';
import Card from './Card';
import {useNavigate} from 'react-router-dom';
import {orderCards,filterCards} from '../redux/actions'

export function Favorites({myFavorites}){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleClick=(e)=>{
        const {name,value}=e.target;
        switch(name){
            case "order":
                return dispatch(orderCards(value));
            case "filter":
                return dispatch(filterCards(value));
            default:
                break;
        }
    }
    const backhome=()=>{navigate('/home')};
    return (<div>
        <div>
            <select name="order" onClick={handleClick}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" onClick={handleClick}>
                <option value="All">Selecciona el género</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
        <div className={style.divNav}>
            <div className={style.divSearching}><button onClick={backhome} className={style.buttonSearching}>Volver</button></div>
        </div>
        <div className={style.divCards}>
        {
            myFavorites?.map(({id,name,gender,image,species})=>{
            
                return(
                <div className={style.divOption}>
                <Card id={id}
                      name={name}
                      gender={gender}
                      image={image}
                      species={species}/>
                </div>)
          })
        }
        </div>
    </div>)
}

export function mapStateToProps(state){
    return{myFavorites:state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites);