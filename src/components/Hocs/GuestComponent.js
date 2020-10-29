import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-native'
export default function WrappedComponent(ChildComponent) {
    class GuestComponent extends React.Component {
        constructor(props) {

        }
        render() {
            if (!_.isEmpty(this.props.token)) return <Redirect to="/event" />
            else return <ChildComponent />
        }
    }
    function mapStateToProps(state) {
        console.log(state)
        return {
            token: state.AuthenticateReducer.token,
            confirmationToken: state.AuthenticateReducer.confirmationToken
        }
    }
    return (connect(mapStateToProps)(withRouter(GuestComponent)))
}