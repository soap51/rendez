import React from 'react'
import {View , Text , StyleSheet , TextInput , Image , TouchableOpacity} from 'react-native'
import {Font, SizePX , Circle} from '../../styles/global'
import EventImage from '../../../assets/imgs/football.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import Proptypes from 'prop-types'

class EventCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            author : props.author ? props.author : "",
            title : props.title ? props.title : "",
            location : props.location ? props.location : "",
            icon : props.icon ? props.icon: "",
            eventDate : props.eventDate ? props.eventDate : new Date(),
            eventStartTime : props.eventStartTime ? props.eventStartTime : new Date(),
            eventEndTime : props.eventEndTime ? props.eventEndTime : new Date()
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            author : nextProps.author,
            title : nextProps.title,
            location : nextProps.location,
            icon : nextProps.icon,
            eventDate : nextProps.eventDate,
            eventStartTime : nextProps.eventStartTime,
            eventEndTime : nextProps.eventEndTime

        })
    }
 
    render(){
        const {icon,title , author , location , eventDate,eventEndTime,eventStartTime} = this.state 
     
        return (
            <TouchableOpacity onPress={()=>this.props.enterEventInformation()} style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.titleContainer}>
                        <View>
                            <Image style={styles.imageContainer} source={icon} /> 
                        </View>
                        <View>
                            <Text style={styles.titleHeader}>
                                {title.substring(0 , 20)}
                            </Text>
                            <Text style={styles.titleSecondary}>
                                By {author.substring(0 , 25)}
                            </Text>
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
                                    value={eventDate}
                                />
                                <View>
                                   
                                        <View style={styles.timeContainer}>
                                        <View>
                                                <View style={styles.timeForm}>
                                                    <Text style={styles.timeText}>
                                                        {/* {eventStartTime} */}
                                                    </Text>
                                                    
                                                    
                                                </View>
                                                
                                                <Text style={styles.timeText}>Start</Text>
                                            </View>
                                            
                                            <View>
                                                <View style={styles.timeForm}>
                                                    <Text style={styles.timeText}>
                                                       {/* {eventEndTime} */}
                                                    </Text>
                                                   
                                                </View>
                                               
                                                <Text style={styles.timeText}>End</Text>
                                            </View>
                                            
                                        </View>
                                       
                                   
                                                                               
                                </View>
                                
                            </View>
                          
                           
                               
                        </View>
                        
                        
                    </View>
                </View>
                
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
    titleSecondary : {
        fontSize : Font.fontSecondary,
        color : "white",
        textAlign :"right"
    },
    subContainer : {
        padding : 20
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
        textAlign :'center',
        fontSize : Font.fontHeader
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
    }

})

EventCard.propTypes = {
    id : Proptypes.number.isRequired,
    author :  Proptypes.string.isRequired,
    title : Proptypes.string.isRequired,
    location : Proptypes.string.isRequired,
    icon : Proptypes.string.isRequired,
    eventDate : Proptypes.string.isRequired,
    eventStartTime : Proptypes.string.isRequired,
    eventEndTime : Proptypes.string.isRequired  ,
    enterEventInformation : Proptypes.func.isRequired
}
export default EventCard