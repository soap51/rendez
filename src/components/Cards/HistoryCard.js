import React from 'react'
import {View ,Text ,Image , TouchableOpacity} from 'react-native'
import { Font, Space, Circle , SizePX } from '../../styles/global';
import bad from '../../../assets/imgs/bad.jpg'
import ball from '../../../assets/imgs/football.jpg'
import pingpong from '../../../assets/imgs/pingpong.jpg'
import luxby from '../../../assets/imgs/luxby.jpg'
import bas from '../../../assets/imgs/bas.jpg'
import art from '../../../assets/imgs/art.png'
import ball2 from '../../../assets/imgs/ball2.jpg'
import dic from '../../../assets/imgs/dic.jpg'
import movie from '../../../assets/imgs/movie.png'
import shoes from '../../../assets/imgs/shoes.jpg'
import boling from '../../../assets/imgs/boling.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import moment from 'moment'
class HistoryCard extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            eventName : props.eventName ? props.eventName : "",
            iconType : props.iconType ? props.iconType : -1,
            eventDate : props.eventDate ? props.eventDate : new Date(),
            startTime : props.startTime ? props.startTime : new Date(),
            endTime : props.endTime ? props.endTime : new Date(),
            place : props.place ? props.place : ""
        }
    }
    render(){
        const {eventName , iconType , startTime , endTime , place , eventDate} = this.state
        return(
            <TouchableOpacity
                onPress={()=>this.props.goToEventPage()}
                style={{
                flexDirection : "row",
                backgroundColor : "rgba(255,255,255,0.3)",
                marginLeft : 'auto',
                marginRight : 'auto',
                borderRadius : 8,
                marginBottom : Space.marginSize,
                padding : 5*vw,
                display : "flex",
                justifyContent : 'center',
                width : 70*vw,
                height : 28*vw,
            }}>
                <View style={{  
                    flex : 0.3,
                    justifyContent : "center",
                    alignItems : "center"
                }}>
                    <Image style={{
                        borderWidth : 3,
                        borderColor : "white",
                        
                        borderRadius :Circle.borderRadius*vw,
                        width : 13*vw,
                        height : 13*vw
                    }} source={
                        iconType == 1 ? ball : (
                            iconType == 2 ? bad : (
                                iconType == 3 ? luxby : (
                                    iconType == 4 ? bas : (
                                        iconType == 5 ? art : (
                                            iconType == 6 ? ball2 : (
                                                iconType == 7 ? dic : (
                                                    iconType == 8 ? pingpong : (
                                                        iconType == 9 ? movie : (
                                                            iconType == 10 ? shoes : (
                                                                iconType == 11 ? boling : ""
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    } />
                </View>
                <View style={{
                    flex : .7
                }}>
                    <View>
                        <Text style={{
                            fontSize : Font.fontParagraph,
                            color : "white",
                            fontWeight : "bold"
                        }}
                        >
                            {eventName}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection : "row",

                    }}>
                        <View style={{
                            flex : 0.15
                        }}>
                            <Icon  name="md-time" size={SizePX/6*vw} color="#F7E365" />
                        </View>
                        <View style={{
                            flex : 0.4,
                            backgroundColor :"rgba(0,0,0,.4)",
                            borderRadius : 10,
                            justifyContent : "center",
                            alignItems : "center",
                            marginRight : 1*vw,
                        }}>
                            <Text style={{
                                color: "white",
                                fontWeight : "bold",
                                textAlign : "center"
                            }}>
                            {moment(eventDate).format('Do MMM YYYY')}
                            </Text>
                        </View>
                        <View style={{
                            flex : 0.4,
                            backgroundColor :"rgba(0,0,0,.4)",
                            borderRadius : 10,
                            justifyContent : "center",
                            alignItems : "center"
                        }}>
                            <Text style={{
                                color: "white",
                                fontWeight : "bold",
                                textAlign : "center"
                            }}>
                            {moment(startTime).format("LT")+" "+moment(endTime).format('LT')}
                            </Text>
                        </View>
                    </View> 
                    <View style={{
                        flexDirection : "row",
                        marginTop : 1*vw
                    }}>
                        <View style={{
                            flex : 0.15,
                            
                        }}>
                            <Icon  name="ios-pin" size={SizePX} color="#F59F9F" />
                        </View>
                        <View style={{
                            flex : 0.80,
                            backgroundColor :"rgba(0,0,0,.4)",
                            borderRadius : 10,
                            justifyContent : "center",
                            alignItems : "center"
                        }}>
                            <Text style={{
                                color: "white",
                                fontWeight : "bold",
                                textAlign : "center"
                            }}>{place}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default HistoryCard