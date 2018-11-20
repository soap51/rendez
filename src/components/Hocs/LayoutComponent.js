import React from 'react'
import {View , Text , StyleSheet , ScrollView , ActivityIndicator} from 'react-native'
import {withRouter} from 'react-router-native'

import Header from '../utils/Header'
import Footer from '../utils/Footer'
import {connect} from 'react-redux'
const style = StyleSheet.create({
    container :{
        width : "100%",
        height : "100%",
        display : "flex"
    }
    
})

export default function Layout(WrappedComponent ){
    function mapStateToProps(state){
        return {
            token : state.AuthenticateReducer.token
        }
    }
    return connect(mapStateToProps)(withRouter(class LayoutComponent extends React.Component{
        
        render(){
        
            return(
                <View style={style.container}>
                   <Header {...this.props} style={{flex : 0.01}}/> 
                    <ScrollView style={{flex : 5 , backgroundColor : "rgb(255,174,201)"}}>
                          <WrappedComponent {...this.props}  /> 
                    </ScrollView>
                    
                    <Footer {...this.props} style={{flex : 0.1}}/>
                </View>
            )
        }
    }))
}