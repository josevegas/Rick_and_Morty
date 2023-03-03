import Card from './Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className={style.divCards}>
      
         {characters.map((element)=>{
               return(
                  <div className={style.divOption}>
                  <Card name={element.name}
                        gender={element.gender}
                        image={element.image}
                        species={element.species}
                        onClose={() => window.alert('Emulamos que se cierra la card')}/>
                  </div>)
            })}
         
   </div>;
}
