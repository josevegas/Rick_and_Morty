import style from './Style.module.css';
import {NavLink} from 'react-router-dom';

export default function Card({name,species,gender,image,onClose,id}) {
   console.log(id)
   return (
      <div className={style.divContent}>
         <div className={style.divCard}>
            <div className={style.close}>
               <button onClick={onClose} className={style.closeButton}><b> X </b></button>
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
