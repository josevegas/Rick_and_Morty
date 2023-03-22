import { ADD_MY_FAVORITE,DELETE_MY_FAVORITE } from "./type";

const addMyFavorite=(character)=>{
    return{
        type: ADD_MY_FAVORITE,
        payload: character,
    };
}
const deleteMyFavorite=(value)=>{
    return{
        type: DELETE_MY_FAVORITE,
        payload: value,
    }
}

export {addMyFavorite,deleteMyFavorite}