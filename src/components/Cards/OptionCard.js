import React from 'react'
import {View , Text , StyleSheet , TextInput , Image , Switch , Button } from 'react-native'
import {Font, SizePX , Circle , Space} from '../../styles/global'
import OptionButton from '../Button/OptionButton'
import { vw, vh } from 'react-native-viewport-units';

import Icon from "react-native-vector-icons/Ionicons";
class EventCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notiOption : false,
            feedOption : false
        }
    }
    onNotiChange(){
        this.setState({notiOption : !this.state.notiOption})
    }
    onFeedChange(){
        this.setState({feedOption : !this.state.notiOption})
    }
    render(){
        const {notiOption , feedOption} = this.state 
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <OptionButton
                        icon="ios-notifications-outline"
                        title="Notifications"
                        isHaveSwitch={true}
                        option={notiOption}
                        onValueChange={()=>this.onNotiChange()}
                    />
                    <OptionButton
                        icon="md-browsers"
                        title="Feed"
                        isHaveSwitch={true}
                       
                        
                        onValueChange={()=>this.onFeedChange()}
                        option={feedOption}
                    />
                </View>
                <View style={styles.logout}>
                    <OptionButton
                        icon="ios-log-out"
                        title="Logout"
                        isHaveSwitch={false}
                    />
                  
                </View>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
       
        justifyContent : "center",
        flexDirection : "column",
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 15,
        marginBottom : 20*vw,
        backgroundColor : "rgb(51,9,64)",
        marginRight: 2*vw,
        marginLeft: 2*vw
    },
    subContainer : {
        padding : Space.paddingSize
    },
    logout : {
        padding : Space.paddingSize,
        marginTop :24*vw
    }
   

})
export default EventCard