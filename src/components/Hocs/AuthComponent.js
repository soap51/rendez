import React from 'react'
import {withRouter , Redirect} from 'react-router-native'
import {connect} from 'react-redux'
export default function WrappedComponent(ChildComponent){
    class AuthComponent extends React.Component{
        constructor(){
            super()
        }
        render(){
            console.log("orios",this.props)
            if(this.props.token)    return <ChildComponent />
            else return <Redirect to="/"/>
        }
    } 
    function mapStateToProps(state){
        console.log(state)
        return {
            token : state.AuthenticateReducer.token
        }
    }
    return connect(mapStateToProps)((AuthComponent))
}