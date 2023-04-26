import style from './Style.module.css';
import {NavLink} from 'react-router-dom';
import { addMyFavorite,deleteMyFavorite} from '../redux/actions';
import { connect } from 'react-redux';
import {useState,useEffect} from 'react';
import heartsolid from '../image/heartsolid.svg';
import heart from '../image/heart.svg';
import trash from '../image/trash.svg';


export function Card({name,species,gender,image,onClose,id,addMyFavorite,deleteMyFavorite,myFavorites}) {
   const [isFav,setIsFav]=useState(false);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   const handleFavorite=(event)=>{
      if(isFav){
         setIsFav(false);
         deleteMyFavorite(id);
      }else{
         setIsFav(true);
         addMyFavorite({name,species,gender,image,onClose,id,addMyFavorite,deleteMyFavorite,myFavorites})
      }
   }
   return (
      <div className={style.divContent}>
         <div className={style.divCard}>
            <div className={style.divTop}>
            <div className={style.fav}>
               {
                  isFav ? (
                     <button className={style.favButton} onClick={handleFavorite}><img src={heartsolid} /></button>
                  ) : (
                     <button className={style.favButton} onClick={handleFavorite}><img src={heart} /></button>
                  )
               }
            </div>
            <div className={style.close}>
               {isFav?null:(<button onClick={onClose} className={style.favButton}><img src={trash} /></button>)}
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
export function mapStateToProps(state){
   return {myFavorites:state.myFavorites}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);