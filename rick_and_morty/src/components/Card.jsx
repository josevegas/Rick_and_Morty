import style from './Style.module.css';
import {NavLink} from 'react-router-dom';
import { addMyFavorite,deleteMyFavorite} from '../redux/actions';
import { connect } from 'react-redux';
import {useState} from 'react'

export function Card({name,species,gender,image,onClose,id,addMyFavorite,deleteMyFavorite}) {
   const [isFav,setIsFav]=useState(false);
   const handleFavorite=(event)=>{
      if(isFav){
         setIsFav(false);
         deleteMyFavorite(id);
      }else{
         setIsFav(true);
         addMyFavorite({name,species,gender,image,onClose,id,addMyFavorite,deleteMyFavorite})
      }
   }
   return (
      <div className={style.divContent}>
         <div className={style.divCard}>
            <div className={style.divTop}>
            <div className={style.fav}>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>
            <div className={style.close}>
               <button onClick={onClose} className={style.closeButton}><b> X </b></button>
            </div>
            </div>
            <img  src={image} alt="Card" className={style.charImage}/>
            <NavLink to={`/detail/${id}`}><h2 className={style.divName}>{name}</h2></NavLink>
            <div className={style.divInformation}>
               <h2>{species}</h2>
               <h2>{gender}</h2>
            </div>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return{
      addMyFavorite:(character)=>{dispatch(addMyFavorite(character))},
      deleteMyFavorite:(id)=>{dispatch(deleteMyFavorite(id))},
   }
}

export default connect(null,mapDispatchToProps)(Card);