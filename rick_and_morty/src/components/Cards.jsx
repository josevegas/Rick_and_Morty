import Card from './Card';
import style from './Style.module.css'

export default function Cards(props) {
   const { characters } = props;
   
   return <div className={style.divCards}>
      
         {characters.map(({id,name,gender,image,species})=>{
               return(
                  <div className={style.divOption}>
                  <Card key={id}
                        name={name}
                        gender={gender}
                        image={image}
                        species={species}
                        onClose={()=>props.onClose(id)}/>
                  </div>)
            })}
         
   </div>;
}
