import style from './Style.module.css';

export default function About(){
    return(
        <div className={style.divAbout}>
            <h1 className={style.h1About}>Sobre el Autor</h1>
            <p className={style.pAbout1}>Hola, me llamo José Vegas, soy un estudiante del curso Full Stack - Part Time, ésta es mi primera app dise&nacute;ada e implementada en React. Me apasiona la programación y todo lo aprendido hasta el momento en el curso de Henry me ha permitido cumplir con ésta meta.</p>
            <p className={style.pAbout2}>Seguiré investigando más para poder mejorar mis conocimientos y perfeccionar mi estilo de diseño.</p>
            <img className={style.imgAbot} src="https://scontent.fpiu1-1.fna.fbcdn.net/v/t1.6435-9/198863587_10159341059361740_2353617559994962899_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGtJaP0ujW8q7eFmEGikvpmqSRJb4p2BV-pJElvinYFXzBym1oZuInGf0HQcTV9beM&_nc_ohc=4Z9dDbyLJuQAX86wkew&_nc_oc=AQkerrjgzYrkuTFNq7KOpntndh7Zz5J2AaTHiGswsZ0Ctw1CUDFRf_Dvkd3M13T789WWCtm2jZJ4mI-xPPYqChPW&_nc_ht=scontent.fpiu1-1.fna&oh=00_AfBq3vc7R29jW2iReuKKQEjpKkCLF55nVLnrJtpHVV3sww&oe=64371CA8" alt="Foto de José Vegas" width= '300px' />
        </div>
    )
}