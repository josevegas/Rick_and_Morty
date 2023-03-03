import style from './Card.module.css';
export default function Card(props) {
   return (
      <div className={style.divContent}>
         <div className={style.divCard}>
            <div className={style.close}>
               <button onClick={props.onClose} className={style.closeButton}><b>X</b></button>
            </div>
            <img  src={props.image} alt="Card" className={style.charImage}/>
            <h2 className={style.divName}>{props.name}</h2>
            <div className={style.divInformation}>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </div>
         </div>
      </div>
   );
}
