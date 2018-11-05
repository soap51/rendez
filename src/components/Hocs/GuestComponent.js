import React from 'react'
import {withRouter , Redirect} from 'react-router-native'
import {connect} from 'react-redux'
export default function WrappedComponent(ChildComponent){
    class GuestComponent extends React.Component{
        constructor(){
            
        }
        render(){
            if(this.props.token)    return <Redirect to="/event" />
            else return <ChildComponent />
        }
    } 
    function mapStateToProps(state){
        return {
            token : state.authenticateReducer.token
        }
    }
    export default connect(mapStateToProps)(withRouter(GuestComponent))
}