import {LOGIN_SUCCESS  , LOGIN_FAIL ,LOGOUT_SUCCESS} from '../constants/actionType'
import {DOMAIN} from '../constants/environment'
import axios from 'axios'
import { AsyncStorage } from "react-native"
import SetAlert from '../utils/setAlert'
import setAuthorizationHeader from '../utils/setAuthorizationHeader'
export function loginRequest(payload){
    return (dispatch) =>{
        axios.post(DOMAIN + "/login").then(response=>{
            const data = response.data
            const token = data.token 
            AsyncStorage.setItem('token' , token).then(result=>{
                console.log(result)
            })
            .catch(err=>{
                console.log(err)
            })
            setAuthorizationHeader(token)
            return dispatch({
                type : LOGIN_SUCCESS,
                payload : token
            })
        })
        .catch(err=>{
            SetAlert()
            return dispatch({
                type : LOGIN_FAIL
            })
        })
    }
}

export function loginSuccess(token){
    setAuthorizationHeader(token)
    return (dispatch) => dispatch({
        type : LOGIN_SUCCESS,
        payload : token
    })
}

export function logout(token){
    setAuthorizationHeader(token)
    return (dispatch) => dispatch({
        type : LOGOUT_SUCCESS,
    })
}