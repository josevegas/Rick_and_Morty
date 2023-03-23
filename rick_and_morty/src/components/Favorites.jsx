import style from './Style.module.css';
import { connect } from 'react-redux';
import Card from './Card';
import {useNavigate} from 'react-router-dom';

export function Favorites({myFavorites}){
    const navigate=useNavigate();
    const backhome=()=>{navigate('/home')};
    return (<div className={style.divCards}>
        <div className={style.divNav}>
            <div className={style.divSearching}><button onClick={backhome} className={style.buttonSearching}>Volver</button></div>
        </div>
        <br />
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
    </div>)
}

export function mapStateToProps(state){
    return{myFavorites:state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites);