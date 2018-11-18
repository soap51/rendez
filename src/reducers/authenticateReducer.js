import {LOGIN_SUCCESS  , LOGIN_FAIL , VERIFY_SUCCESS} from '../constant/actionTypes'
const initialState = {
    token : "",
    _id : "",
    confirmationToken : false,
}
export default function reducer(state=initialState , action){
  
    switch (action.type) {
        case LOGIN_SUCCESS :
            console.log(action.payload)
            return {
                ...state,
                token : action.payload.token,
                _id : action.payload._id,
                confirmationToken : action.payload.confirmationToken,
                myJoinEvent : action.payload.myJoinEvent,
                myCreateEvent : action.payload.myCreateEvent
            }
        case VERIFY_SUCCESS : 
            console.log("payload : " , action.payload)
            console.log({
                ...state,
                confirmationToken : action.payload
            })
            return {
                ...state,
                confirmationToken : action.payload
            }
        case LOGIN_FAIL :
            return initialState 
        default :
            return state;

    }
}