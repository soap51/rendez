import React from 'react'
import {View , Text , StyleSheet , TextInput , Image} from 'react-native'
import {Font, SizePX} from '../../styles/global'
import EventImage from '../../../assets/imgs/football.jpg'
import Icon from "react-native-vector-icons/Ionicons";
class EventCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            author : "Poramet Thawinkarn ",
            title : "Football",
            location : "Kmitl",
            icon : "",
            eventDate : '',
            eventStartTime : '',
            eventEndTime : ''
        }
    }
   
    render(){
        const {icon,title , author , location , eventDate,eventEndTime,eventStartTime} = this.state 
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.titleContainer}>
                        <View>
                            <Image source={EventImage} />
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
                                value={"Lorem Imsum"}
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
                                    value={"Lorem Imsum"}
                                />
                                <View>
                                   
                                        <View style={styles.timeContainer}>
                                        <View>
                                                <View style={styles.timeForm}>
                                                    <Text style={styles.timeText}>
                                                        04:00 PM
                                                    </Text>
                                                    
                                                    
                                                </View>
                                                
                                                <Text style={styles.timeText}>Start</Text>
                                            </View>
                                            
                                            <View>
                                                <View style={styles.timeForm}>
                                                    <Text style={styles.timeText}>
                                                        04:00 PM
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
                
            </View>
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
        color : "white"
    },
    subContainer : {
        padding : 20
    },
    imageContainer : {
        
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
export default EventCard