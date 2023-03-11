import style from './Style.module.css';

export default function About(){
    return(
        <div className={style.divAbout}>
            <h1 className={style.h1About}>Sobre el Autor</h1>
            <p className={style.pAbout1}>Hola, me llamo José Vegas, soy un estudiante del curso Full Stack - Part Time, ésta es mi primera app dise&nacute;ada e implementada en React. Me apasiona la programación y todo lo aprendido hasta el momento en el curso de Henry me ha permitido cumplir con ésta meta.</p>
            <p className={style.pAbout2}>Seguiré investigando más para poder mejorar mis conocimientos y perfeccionar mi estilo de diseño.</p>
            <img scr="" alt="Foto de José Vegas" />
        </div>
    )
}