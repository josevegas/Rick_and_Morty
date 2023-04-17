import { ADD_MY_FAVORITE,DELETE_MY_FAVORITE,FILTER,ORDER} from "./type";
import axios from 'axios';

const addMyFavorite = (character) => {
//     return{
//         type: ADD_MY_FAVORITE,
//         payload: character,
//     };
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_MY_FAVORITE,
                payload: data,
            });
        });
    };
 };
const deleteMyFavorite=(value)=>{
    // return{
    //     type: DELETE_MY_FAVORITE,
    //     payload: value,
    // }
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: DELETE_MY_FAVORITE,
                payload: data,
        });
        });
    };
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