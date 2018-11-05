import React from 'react'
import {withRouter , Redirect} from 'react-router-native'
import {connect} from 'react-redux'
export default function WrappedComponent(ChildComponent){
    class AuthComponent extends React.Component{
        constructor(){

        }
        render(){
            if(this.props.token)    return <ChildComponent />
            else return <Redirect to="/"/>
        }
    } 
    function mapStateToProps(state){
        return {
            token : state.authenticateReducer.token
        }
    }
    export default connect(mapStateToProps)(withRouter(AuthComponent))
}