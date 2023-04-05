import { ADD_MY_FAVORITE,DELETE_MY_FAVORITE,FILTER,ORDER} from "./type";

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
const filterCards=(status)=>{
    return{
        type: FILTER,
        payload: status,
    }
}
const orderCards=(order)=>{
    return{
        type: ORDER,
        payload: order,
    }
}

export {addMyFavorite,deleteMyFavorite,filterCards,orderCards}