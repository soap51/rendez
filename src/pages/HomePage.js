import React from 'react'
import {View , Text , StyleSheet , Dimensions ,Image} from 'react-native'
import { Space, Circle, Font , SizePX } from '../styles/global';
import Ball from '../../assets/imgs/football.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import FilterEventCard from '../components/Cards/FilterEventCard'
import axios from 'axios'
import HistoryCard from '../components/Cards/HistoryCard'
class HomePage extends React.Component{
    constructor(){
        super()
        this.state = {
            age : 0,
            author : '',
            email : '',
            typeActivity : 0
        }
    }
    _onChangeActivity(typeActivity){
        this.setState({typeActivity})
    }
    render(){
        const {age , author , email , typeActivity} = this.state 
        const {width , height} = Dimensions.get('window')
        return(
            <View style={styles.container}>
                <View style={{
                    borderRadius : 17,
                    backgroundColor : "rgb(51,9,64)",
                    minHeight : height /1.4,
                    padding : Space.paddingSize 
                }}>
                    <View style={styles.infoBoard}>
                        <View style={{
                            flexDirection : "row",
                            justifyContent : "flex-end",
                            alignItems : "center"
                          
                        }}>
                            <Image style={styles.imageContainer} source={Ball} />
                        </View>
                        <View style={styles.textInfoContainer}>
                            <Text style={{
                                fontSize : Font.fontHeader / 2,
                                color : 'white',
                                fontWeight : "bold",
                                textAlign : "right"
                            }}>Poramet Thawinkarn</Text>
                              <Text style={{
                                fontSize : Font.fontSecondary / 1.5,
                                color : 'white',
                                fontWeight : "bold",
                                textAlign : "right"
                            }}>Poramet Thawinkarn</Text>
                            <View style={{
                                flexDirection : "row",
                                flexWrap :"nowrap",
                                justifyContent : "flex-end"
                            }}> 
                                <View style={{
                                    padding : Space.paddingSize/3
                                }}>
                                    <Icon name="md-male" size={SizePX} color="#3CCAF6" />
                                </View>
                                <View style={{
                                    justifyContent : "center",
                                    alignItems : "center"
                                }}>
                                    <Text style={{
                                           fontSize : Font.fontSecondary / 1.5,
                                           color : 'white',
                                           fontWeight : "bold",
                                           textAlign : "right"
                                    }}>Age : {"50"}</Text>
                                </View>
                               
                            </View>
                         
                        </View>
                       
                    </View>
                    <View style={{
                        margin : Space.marginSize
                    }}>
                        <FilterEventCard 
                            typeActivity={typeActivity}
                            _onChangeActivity={(id)=>this._onChangeActivity(id)}
                        />
                    </View>
                    <View>
                        <HistoryCard 
                        />
                         <HistoryCard 
                        />
                         <HistoryCard 
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container : {
        padding : Space.paddingSize
    },
    infoBoard : {
        flexDirection : 'row',
        justifyContent : "space-around",
       
    },
    imageContainer: {
        width : Circle.sizeOfCircle*1.5,
        height : Circle.sizeOfCircle*1.5,
        borderWidth : 5,
        borderColor : "white",
        borderRadius : Circle.borderRadius*1.5,
     
    },
    textInfoContainer :{
        flexWrap : "nowrap",
      
    }
   
})
export default HomePage