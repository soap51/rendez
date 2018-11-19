import React from 'react'
import {View , Text , StyleSheet , Dimensions ,Image} from 'react-native'
import { Space, Circle, Font , SizePX } from '../styles/global';
import Ball from '../../assets/imgs/football.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import FilterEventCard from '../components/Cards/FilterEventCard'
import axios from 'axios'
import HistoryCard from '../components/Cards/HistoryCard'
import { DOMAIN } from '../constant/environment';
import {connect} from 'react-redux'
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            age : 0,
            historys : [],
            author : '',
            email : '',
            typeActivity : 0,
        }
    }
    _onChangeActivity(typeActivity){
        
        axios.post(DOMAIN + "api/user" , {userId : this.props._id , typeEvent : typeActivity})
        .then(response=>{
            const data = response.data
            const result = data.result
            if(typeActivity == 0){
                const historys = result.myJoinEvent
                this.setState({historys , typeActivity})
            }else if(typeActivity == 1){
                const historys = result.myCreateEvent
                this.setState({historys , typeActivity})
            }
        })
        .catch(err=>{
            console.log(err.response)
        })
    }
    
    componentDidMount(){
        axios.post(DOMAIN + "api/user" , {userId : this.props._id , typeEvent : this.state.typeActivity})
            .then(response=>{
                const data = response.data
                const result = data.result
                if(this.state.typeActivity == 0){
                    const historys = result.myJoinEvent
                    this.setState({historys})
                }else if(this.state.typeActivity == 1){
                    const historys = result.myCreateEvent
                    this.setState({historys})
                }
            })
            .catch(err=>{
                console.log(err.response)
            })
    }
    render(){
        const {age , author , email , typeActivity,typeActivity2 , historys} = this.state 
        const {width , height} = Dimensions.get('window')
    
        const history = historys && historys.length != 0 ? historys.map(data=>
            <HistoryCard 
                eventName={data.eventName}
                iconType={data.iconType}
                startTime={data.startTime}
                endTime={data.endTime}
                place={data.place}
            />
        )
        :
        <View><Text></Text></View>
        console.log(history)
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
                        
                    
                    <View>
                       {history}
                    </View>
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
    join : {
        borderColor :"rgb(245,145,145)", 
        borderWidth : 0.1,
        width : Circle.sizeOfCircle*3,
        height : Circle.sizeOfCircle*1,
        backgroundColor :"rgb(245,145,145)", 
        borderRadius : Circle.borderRadius*0.1,
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
function mapStateToProps(state){
    return {
        _id : state.AuthenticateReducer._id
    }
}
export default connect(mapStateToProps)(HomePage)