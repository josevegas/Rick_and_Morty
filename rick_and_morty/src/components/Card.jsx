import style from './Card.module.css';
export default function Card(props) {
   return (
      <div className={style.divContent}>
         <div className={style.divCard}>
            <button onClick={props.onClose}>X</button>
            <img  src={props.image} alt="Card" />
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
