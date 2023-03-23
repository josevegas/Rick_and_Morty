import { ADD_MY_FAVORITE,DELETE_MY_FAVORITE } from "./type";

const initialState={
    myFavorites:[],
}

const rootReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADD_MY_FAVORITE:
            return{
                ...state,
                myFavorites:[...state.myFavorites,payload],
            };
        case DELETE_MY_FAVORITE:
            let favFilter=state.myFavorites.filter(element=>element.id!==payload)
            return{
                ...state,
                myFavorites:favFilter,
            };
        default:
            return {...state};
    }
    
}

export default rootReducer;