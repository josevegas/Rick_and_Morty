import style from './Style.module.css';

export default function RandomButton(props){
    // console.log(props.onRandom)
    return(
        <div className={style.divSearching}>
            <button onClick={()=>props.onRandom()} className={style.buttonRandom}>Carta Aleatoria</button>
        </div>
    )
}