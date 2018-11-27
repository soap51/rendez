import {LOGIN_SUCCESS  , LOGIN_FAIL , VERIFY_SUCCESS , JOIN_SUCCESS,LOGOUT_SUCCESS , UNJOIN_SUCCESS} from '../constant/actionTypes'
const initialState = {
    token : "",
    _id : "",
    confirmationToken : false,
    myJoinEvent : [],
    myCreateEvent : []
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
            return {
                ...state,
                confirmationToken : action.payload
            }
        case LOGOUT_SUCCESS:{
            
            return initialState
        }
        case JOIN_SUCCESS : 
            
            return {
                ...state,
                myJoinEvent : action.payload
            }
        case UNJOIN_SUCCESS:
            const index = state.myJoinEvent.indexOf(action.payload)
            return {
                ...state,
                myJoinEvent : [...state.myJoinEvent.slice(0 , index) , ...state.myJoinEvent.slice(index + 1)]
            }
        case LOGIN_FAIL :
            return initialState 
        default :
            return state;

    }
}