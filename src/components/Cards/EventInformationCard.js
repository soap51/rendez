import React from 'react'
import {View , Text , StyleSheet , TextInput , Image , TouchableOpacity} from 'react-native'
import {Font, SizePX , Circle, Space} from '../../styles/global'
import EventImage from '../../../assets/imgs/football.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import Proptypes from 'prop-types'
import JoinOption from '../Switch/JoinOption'
import axios from 'axios'
import { DOMAIN } from '../../constant/environment';
import setAlert from '../../utils/setAlert'
import www from '../../../assets/imgs/www.jpg'
import { vw, vh } from 'react-native-viewport-units';
import moment from 'moment'
import {connect} from 'react-redux'
class EventInformationCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id : props.id ? props.id : "",
            author : props.author ? props.author : "",
            title : props.title ? props.title : "",
            location : props.location ? props.location : "",
            icon : props.icon ? props.icon: "",
            eventDate : props.eventDate ? props.eventDate : new Date(),
            eventStartTime : props.eventStartTime ? props.eventStartTime : new Date(),
            eventEndTime : props.eventEndTime ? props.eventEndTime : new Date(),
            currentSeat : props.currentSeat ? props.currentSeat : 0,
            limitedSeat : props.limitedSeat ? props.limitedSeat  : 0,
            detail : props.detail ? props.detail : "",
            joined : props.joined ? true : false,
            
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            id : nextProps.id,
            author : nextProps.author,
            title : nextProps.title,
            location : nextProps.location,
            icon : nextProps.icon,
            eventDate : nextProps.eventDate,
            eventStartTime : nextProps.eventStartTime,
            eventEndTime : nextProps.eventEndTime,
            currentSeat : nextProps.currentSeat,
            limitedSeat : nextProps.limitedSeat,
            detail : nextProps.detail

        })
    }
    handleJoinEvent(){
        axios.patch(DOMAIN + "api/event/" + this.props.id , {userID : this.props._id})
            .then(result=>{
                this.setState({joined : !this.state.joined})
            })
            .catch(err=>{
                setAlert()
            })
     
    }
    render(){
        const { icon,title , author , location , eventDate,eventEndTime,eventStartTime , detail, joined , currentSeat , limitedSeat} = this.state 
  
        return (
           
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.titleContainer}>
                        <View>
                            <Image style={styles.imageContainer} source={icon} /> 
                        </View>
                        <View>
                            <Text style={styles.titleHeader}>
                                {title.substring(0 , 20)}
                            </Text>
                            
                            <View style={styles.column}>
                             <Image style={styles.Circle} source={www}/>
                            
                            <Text style={{
                                 fontSize : Font.fontSecondary,
                                 marginLeft : Circle.sizeOfCircle*(-0.1),
                                 marginTop : Circle.sizeOfCircle*(-1.3),
                                 color : "white",
                                 textAlign : "right"
                            }}>
                                By {author ? author.fullName.substring(0 , 25) : ""}
                            </Text>
                            </View>
                            
                        </View>
                    </View>
                    <View>
                        <View style={styles.formWithIconContainer}>
                            <View style={styles.iconContainer}>
                                <Icon style={styles.iconText} name="ios-pin" size={SizePX} color="#F59F9F" />
                            </View>
                            <TextInput 
                                underlineColorAndroid='transparent'
                                style={styles.formContainer}
                                autoCorrect={false}
                                editable={false}
                                value={location}
                            />
                        </View>
                        <View style={styles.formWithIconContainer}>
                            <View style={styles.iconContainer}>
                                <Icon style={styles.iconText} name="md-time" size={SizePX} color="#F7E365" />
                            </View>
                            <View style={{flex : 4.5}}>
                                <TextInput 
                                    underlineColorAndroid='transparent'
                                    style={styles.formContainer}
                                    autoCorrect={false}
                                    editable={false}
                                    value={moment(eventDate).format('Do MMMM')}
                                />
                                <View>
                                    <View style={styles.timeContainer}>
                                        <View>
                                            <View style={styles.timeForm}>
                                                <Text style={styles.timeText}>
                                                {moment(eventStartTime).format('LT')}
                                                </Text>
                                            </View>
                                            <Text style={styles.timeText}>Start</Text>
                                        </View>
                                        <View>
                                            <View style={styles.timeForm}>
                                                <Text style={styles.timeText}>
                                                {moment(eventEndTime).format('LT')}
                                                </Text>
                                            </View>
                                            <Text style={styles.timeText}>End</Text>
                                        </View>
                                    </View>                                                  
                                </View>
                            </View>
                        </View>
                        <View style={styles.seatContainer}>
                            <View style={{
                                flex : .4,
                                display : 'flex',
                                justifyContent :"center",
                                alignItems : "center"
                            }}>
                                <Icon style={{
                                      textAlign :'center',
                                      fontSize : Font.fontHeader,
                                      color : "#4AF6F1"
                                }} name="md-contacts" size={SizePX} color="#F7E365" />
                            </View>
                            <View style={styles.textForm} >
                                <Text style={styles.Label}>Current : </Text>
                                <View>
                                    <TextInput 
                                        underlineColorAndroid='transparent'
                                        style={styles.textInput}
                                        autoCorrect={false}
                                        editable={false}
                                        value={""+currentSeat}
                                    />
                                </View>
                               
                            </View>
                            <View style={styles.textForm} >
                                <Text style={styles.Label }>limited Seat : </Text>
                                <View>
                                    <TextInput 
                                        underlineColorAndroid='transparent'
                                        style={styles.textInput}
                                        autoCorrect={false}
                                        editable={false}
                                        value={""+limitedSeat}
                                    />
                                </View>
                               
                            </View>
                        </View>
                        <View style={{
                            backgroundColor : "rgba(223,188,216,0.3)",
                            borderWidth : 0,
                            borderColor : "black",
                            borderRadius : 10,
                            padding : 10,
                            margin : 10,
                        }}>
                            <View style={{
                                display : "flex",
                                flexDirection : "row",
                                justifyContent : "space-around"
                            }} >
                               
                                <View style={{
                                    flex : 0.5,
                                    justifyContent : "flex-start",
                                    alignItems : "center"
                                }}>
                                    <Icon style={styles.iconText} name="md-create" size={SizePX} color="#55CB97" />
                                </View>
                                <View style={{
                                    flex : 1,
                                    alignItems : "center",
                                    justifyContent : "center"
                                }}>
                                    <Text style={{
                                        fontSize : Font.fontSecondary,
                                        color : "white"
                                    }}>
                                        Detail
                                    </Text>
                                </View>
                                <View style={{
                                    flex : 3,
                                    alignItems : "center"
                                }}>
                                    
                                </View>
                                
                            </View>
                            <View style={{
                                flexDirection : "row",
                                justifyContent : "center",
                                alignItems : "center"
                            }}>
                                <View  style={{
                                    flex : 0.5,
                                }}>
                                    
                                </View>
                                <View style={{
                                    flex : 3
                                }}>
                                    <Text style={{
                                        color : "white"
                                    }}>
                                        {detail}
                                    </Text>
                                </View>

                            </View>
                           
                        </View>
                        <View>
                             <Image style={styles.Circle} source={www}/>
                             </View>
                        <View style={{
                            display : "flex",
                            flexDirection : "row",
                            justifyContent : "space-around",
                            alignItems : "center",
                            marginTop : 20
                        }}>
                            <JoinOption 
                                joined={joined}
                                handleJoinEvent={()=>this.handleJoinEvent()}
                            />
                            
                            <TouchableOpacity onPress={()=>this.props.history.push('/event/'+this.props.id+'/comment')} style={{
                                paddingTop :  Space.paddingSize/5,
                                paddingLeft :  Space.paddingSize/1.8,
                                paddingRight :  Space.paddingSize/1.8,
                                paddingBottom :  Space.paddingSize/5,
                                borderWidth : 2,
                                backgroundColor : '#4FF554',
                                borderColor :"white",
                                borderRadius : 17,
                            
                            }}>
                                <Icon style={styles.iconText} name="ios-chatboxes" size={SizePX} color="#00000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Circle : {
        
        width :  Circle.sizeOfCircle*1.2,
        height :  Circle.sizeOfCircle*1.2,
        borderRadius : Circle.sizeOfCircle*1.9,
        marginLeft : Circle.sizeOfCircle*(-5),
        marginBottom : Circle.sizeOfCircle*0.7,
        marginTop : Circle.sizeOfCircle*(-0.1),
        borderWidth : Circle.sizeOfCircle*0.07,
        borderColor : "white",
    },
    column : {
        
    },
    titleSecondary : {
        fontSize : Font.fontSecondary,
        marginLeft : Circle.sizeOfCircle*(-0.1),
        marginTop : Circle.sizeOfCircle*(-1.3),
        color : "white"
    },
    container : {
        display : 'flex',
        
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 15,
        marginBottom : 20,
        backgroundColor : "rgb(51,9,64)"
    },
    titleContainer : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingBottom : 20,
        flexWrap : "wrap"

    },
    titleHeader : {
        fontSize : Font.fontHeader,
        color : 'white',
        textAlign : 'right',
        
    },
   
    subContainer : {
        padding : Space.paddingSize
    },
    imageContainer : {
        display : "flex",
        justifyContent : "center",
        alignItems :"center",
        width : Circle.sizeOfCircle*1.5,
        height : Circle.sizeOfCircle*1.5,
        borderRadius : Circle.borderRadius*1.5
    },
    formWithIconContainer :{
        backgroundColor : "rgba(223,188,216,0.3)",
        borderWidth : 0,
        borderColor : "black",
        borderRadius : 10,
        padding : 10,
        margin : 10,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around"
    },
    iconContainer : {
        flex : 1,
        display : 'flex',
        justifyContent :"center",
        alignItems : "center"
    },  
    iconText: {
      
    },
    formContainer : {
        flex : 4.5,
        borderBottomColor : 'white',
        borderBottomWidth : 4,
        paddingLeft : 10,
        paddingRight: 10,
        marginBottom  :10,
        color : "white",
        fontSize : Font.fontParagraph,
        textAlign : 'center'
        
    },
    timeContainer : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-around",
    },
    timeForm : {
        backgroundColor : "rgba(0,0,0,0.28)",
        borderRadius : 10,
      
        padding : 10,
        
    },
    timeText : {
        textAlign : 'center',
        fontSize : Font.fontParagraph,
        color : 'white'
    },
    seatContainer: {
        backgroundColor : "rgba(223,188,216,0.3)",
        borderRadius : 10,
        display : "flex",
        justifyContent :"space-around",
        flexDirection : "row",
        margin : Space.paddingSize /2,
        padding : Space.paddingSize/2
    },
    Label : {
        color : "white"
    },
    textForm : {
        flex : 1,
        flexDirection : "row",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    textInput : {
        backgroundColor : "rgba(0,0,0,0.28)",
        borderRadius : 10,
        
        color : "white",
        textAlign : "center",
        padding : Space.paddingSize /4
    },
    


})

EventInformationCard.propTypes = {
    id : Proptypes.number.isRequired,
    author :  Proptypes.string.isRequired,
    title : Proptypes.string.isRequired,
    location : Proptypes.string.isRequired,
    icon : Proptypes.string.isRequired,
    eventDate : Proptypes.string.isRequired,
    eventStartTime : Proptypes.string.isRequired,
    eventEndTime : Proptypes.string.isRequired  ,
    currentSeat : Proptypes.number.isRequired,
    limitedSeat : Proptypes.number.isRequired,
    detail : Proptypes.string
}
function mapStateToProps(state){
    return {
        _id : state.AuthenticateReducer._id
    }
}
export default connect(mapStateToProps)(EventInformationCard)