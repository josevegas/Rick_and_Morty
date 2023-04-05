import {useState, useEffect} from 'react'
import style from './Style.module.css'
import {validation} from './Validation'

export default function Form(props){
    

  const [userData,setUserData]=useState({
    userName:"",
    password:"",
  })
  const [errors,setErrors]=useState({
    userName:"",
    password:"",
  })
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUserData(
      {
        ...userData,
        [name]:value,
      }
    )
    setErrors(
        validation({
            ...userData,
            [name]:value,
        })
    )
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    props.login(userData);
  }
  return(
    <form className={style.contentForm} onSubmit={handleSubmit}>
        <div className={style.divInput}>
          <label htmlFor="" className={style.labelForm}>Usuario:</label>
          <input type="text" name="userName" value={userData.userName} onChange={handleChange} className={errors.userName&&style.input}/>
        </div>
        <div className={style.divError}>
          {errors.userName? <p className={style.error}>{errors.userName}</p>: null}
        </div>
        <div className={style.divInput}>
        <label htmlFor="" className={style.labelForm}>Contraseña:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} className={errors.password&&style.input}/>
        </div>
        <div className={style.divError}>
          {errors.password? <p className={style.error}>{errors.password}</p>: null}
        </div>
        <button type="submit" className={style.buttonForm}>Ingresar</button>
    </form>
  )
}