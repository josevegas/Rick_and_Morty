import { ADD_MY_FAVORITE,DELETE_MY_FAVORITE,FILTER,ORDER } from "./type";

const initialState={
    myFavorites:[],
    allCharacters:[],
}

const rootReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADD_MY_FAVORITE:
            return{
                ...state,
                allCharacters:payload,
                myFavorites:payload,
            };
        case DELETE_MY_FAVORITE:
            // let favFilter=state.allCharacters.filter(element=>element.id!==payload)
            return{
                ...state,
                myFavorites:payload,
                allCharacters:payload,
            };
        case FILTER:
            let cardsFilter
            if(payload==='All'){cardsFilter=[...state.allCharacters]}else{cardsFilter=[...state.allCharacters].filter(element=>element.gender===payload)}
            return{
                ...state,
                myFavorites:cardsFilter,
            }
        case ORDER:
            let favOrder=[...state.allCharacters].sort((a,b)=>{
                if(a.id>b.id){
                    return payload==="Ascendente"? 1: -1
                }else{
                    return payload==="Descendente"? 1: -1
                }
            })
            return{
                ...state,
                myFavorites:favOrder,
            }
        default:
            return {...state};
    }
    
}

export default rootReducer;