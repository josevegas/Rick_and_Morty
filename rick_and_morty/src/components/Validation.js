const regexEmail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword=new RegExp(/(?=(.*[0-9]))(?=(.*[a-z]))(?=(.*[A-Z])).{6,10}/);
export const validation=(inputs)=>{
    const errors={};
    if(!regexEmail.test(inputs.userName)){
        errors.userName="Debe ser un email";
    }
    if(!inputs.userName){
        errors.userName="No puede ser vacío";
    }
    if(inputs.userName.length>35){
        errors.userName="No puede tener más de 35 caracteres";
    }
    if(!regexPassword.test(inputs.password)){
        errors.password="La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y entre 6 a 10 caracteres";
    }
    return errors;
}