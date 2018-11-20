import React from 'react'
import {View , Text , StyleSheet} from 'react-native'

import FooterClickButton from '../Button/FooterClickButton'
const style = StyleSheet.create({
    container : {
        
       
        backgroundColor : "rgb(234,203,238)",
        display : "flex",
        padding : 10,
        flex : 0.13,
        justifyContent : "space-around",
        flexDirection : "row"
    }
})

class Footer extends React.Component {
    render(){
       
        return (
            <View style={style.container}>
                <View style={{flex : 0.7 , paddingRight : 5}}>
                    <FooterClickButton
                        iconType="feed"
                        onPress={()=>this.props.history.push('/')}
                        titleButton="Feed"
                    />
                </View>
                {/* <View style={{flex : 0.7 , paddingLeft : 5 , paddingRight : 5}}>
                    <FooterClickButton
                        iconType="noti"
                        onPress={()=>this.props.history.push('/Notifications')}
                        titleButton="Notifications"
                    />
                </View> */}
                <View style={{flex : 0.7 , paddingLeft : 5}}>
                    <FooterClickButton
                        iconType="home"
                        onPress={()=>this.props.history.push('/home')}
                        titleButton="Profile"
                    />
                </View>
            </View>
        )
    }
}

export default Footer