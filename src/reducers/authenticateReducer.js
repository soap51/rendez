import {LOGIN_SUCCESS  , LOGIN_FAIL} from '../constant/actionTypes'
const initialState = {
    token : "",
    _id : ""
}
export default function reducer(state=initialState , action){
  
    switch (action.type) {
        case LOGIN_SUCCESS :
            console.log(action.payload)
            return {
                ...state,
                token : action.payload.token,
                _id : action.payload._id
            }
        case LOGIN_FAIL :
            return initialState 
        default :
            return state;

    }
}