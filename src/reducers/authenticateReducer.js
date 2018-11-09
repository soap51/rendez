import {LOGIN_SUCCESS  , LOGIN_FAIL} from '../constant/actionTypes'
const initialState = {
    token : ""
}
export default function reducer(state=initialState , action){
  
    switch (action.type) {
        case LOGIN_SUCCESS :
            console.log(action.payload)
            return {
                ...state,
                token : action.payload
            }
        case LOGIN_FAIL :
            return initialState 
        default :
            return state;

    }
}