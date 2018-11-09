import React from 'react'
import {withRouter , Redirect} from 'react-router-native'
import {connect} from 'react-redux'
import _ from 'lodash'
export default function WrappedComponent(ChildComponent){
    class GuestComponent extends React.Component{
        constructor(props){
           super(props) 
        }
        render(){
            console.log(this.props)
            if(!_.isEmpty(this.props.token) )    return <Redirect to="/event" />
            else return <ChildComponent />
        }
    } 
    function mapStateToProps(state){
        console.log(state)
        return {
            token : state.AuthenticateReducer.token
        }
    }
    return (connect(mapStateToProps)(withRouter(GuestComponent)))
}