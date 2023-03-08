import style from './Style.module.css';
export default function Card({name,species,gender,image,onClose}) {
   console.log(onClose)
   return (
      <div className={style.divContent}>
         <div className={style.divCard}>
            <div className={style.close}>
               <button onClick={onClose} className={style.closeButton}><b> X </b></button>
            </div>
            <img  src={image} alt="Card" className={style.charImage}/>
            <h2 className={style.divName}>{name}</h2>
            <div className={style.divInformation}>
               <h2>{species}</h2>
               <h2>{gender}</h2>
            </div>
         </div>
      </div>
   );
}
