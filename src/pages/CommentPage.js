import React from 'react'
import {View , Text , StyleSheet  , Image , TextInput , Dimensions , ActivityIndicator} from 'react-native'

import { DOMAIN } from '../constant/environment';
import {vw , vh} from 'react-native-viewport-units'
import setAlert from '../utils/setAlert'
import EventImage from '../../assets/imgs/football.jpg'
import { Space , Circle , Font , SizePX} from '../styles/global';
import CommentCard from '../components/Cards/CommentCard'
import Icon from "react-native-vector-icons/Ionicons";
import bad from '../../assets/imgs/bad.jpg'
import Ball from '../../assets/imgs/football.jpg'
import pingpong from '../../assets/imgs/pingpong.jpg'
import luxby from '../../assets/imgs/luxby.jpg'
import bas from '../../assets/imgs/bas.jpg'
import art from '../../assets/imgs/art.png'
import ball2 from '../../assets/imgs/ball2.jpg'
import dic from '../../assets/imgs/dic.jpg'
import movie from '../../assets/imgs/movie.png'
import shoes from '../../assets/imgs/shoes.jpg'
import boling from '../../assets/imgs/boling.jpg'
import _ from 'lodash'
import axios from 'axios'
class CommentPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            commentList : [],
            comment : "",
            title : " ",
            fullName : "",
            eventName : "",
            iconType : "",
            author : " ",
            loading : true
            
        }
    }
    onTyping(text){
        this.setState({comment : text })
    }
    onSubmit(){
        this.setState({loading : true})
        
     
        axios.post(DOMAIN + "api/event/" + this.props.match.params.eventId + "/comment" , {eventID : this.props.match.params.eventId , detail : this.state.comment})
            .then(result=>{
                
                axios.post(DOMAIN + "api/event/" + this.props.match.params.eventId + "/comment/" +  this.props.match.params.eventId , {eventID : this.props.match.params.eventId})
                    .then( newComment =>{
                       
                        const data = newComment.data
                       
                        const commentList = data.comment.reverse()
                      
                        this.setState({commentList , comment : "" , loading : false})
                    })
                    .catch(err=>{
                        setAlert(this.props.history , 400 , "Error" , "network error")
                    })
            })
            .catch(error=>{
                console.log(error)
            })
        
    }
    componentDidMount(){
 
        axios.post(DOMAIN + "api/event/" + this.props.match.params.eventId + "/comment/" +  this.props.match.params.eventId , {eventID : this.props.match.params.eventId})
            .then(result=>{
                
                const data = result.data
                console.log(data)
                const fullName = data.fullName
                const eventName = data.eventName
                const iconType = data.iconType
                const commentList = data.comment.reverse()
                this.setState({commentList, fullName, eventName ,iconType  , loading : false })
            })
            .catch(err=>{
                setAlert(this.props.history , 400 , "Error" , "network error")
                
            })
    }
    render(){
        const {comment , iconType,title,loading , author,fullName , eventName , commentList} = this.state
        const {height , width} = Dimensions.get("window")
        if(this.state.loading) return <ActivityIndicator size="large" color="rgb(255,255,255)" style={{marginTop : height / 3}}/>
        let icon = 0
        let iconImage = "";
        if(iconType == 1){
            iconImage = Ball
        }
        else if (iconType == 2){
            iconImage = bad
        }
        else if (iconType == 3){
            iconImage = luxby
        }
        else if (iconType == 4){
            iconImage = bas
        }
        else if (iconType == 5){
            iconImage = art
        }
        else if (iconType == 6){
            iconImage = ball2
        }
        else if (iconType == 7){
            iconImage = dic
        }
        else if (iconType == 8){
            iconImage = pingpong
        }
        else if (iconType == 9){
            iconImage = movie
        }
        else if (iconType == 10){
            iconImage = shoes
        }
        else if (iconType == 11){
            iconImage = boling
        }
        const comments = !loading && commentList && commentList.length != 0 ? commentList.map((data , key )=>
            <CommentCard 
                position={key % 2}
                comment={data.detail}
            />
        ) :
        <View><Text></Text></View>
        console.log("iconType : " , iconType)
        console.log("icon : ",icon)
        return(
            <View style={styles.container} >
                <View style={{
                    flex : 1,
                    backgroundColor : "rgb(51,9,64)",
                    padding : Space.paddingSize,
                    minHeight : height/1.3,
                }}>
                    <View style={{
                        display : "flex",
                        flexDirection : "row",
                        justifyContent :"space-around"
                    }}>
                        <View>
                            <Image style={{
                                width : vw*15,
                                height : vw*15,
                                borderRadius : 15*vw/2
                            }} source={iconImage} />
                        </View>
                        <View>
                            <Text style={{
                                fontSize : 6 * vw,
                                color :"white"
                            }}>
                                {eventName}
                            </Text>
                            <Text style={{
                                fontSize : 4 *vw,
                                textAlign :"right",
                                color :"white"
                            }}>
                                {!loading ? "By "+fullName : ""}
                            </Text>
                        </View>
                    </View>
                    <View  style={styles.addCommentContainer} >
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Write a comment..."
                        value={comment}
                        style={{flex : 0.9}}
                        onChangeText={(text)=>this.onTyping(text)}
                        onSubmitEditing={()=>this.onSubmit()}
                    />
                        <View 
                            style={{flex : 0.1 , marginLeft : 5}}
                        >
                             <Icon  name={_.isEmpty(comment)? "ios-checkmark-circle-outline" : "ios-checkmark-circle"} size={SizePX} color={_.isEmpty(comment) ? "#707070" : "#4FF554"} />
                        </View>
                      
                    </View>
                   
                    
                    {comments}
                    
                    
                </View>    
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container : {
        flex :1,
        
        paddingLeft : Space.paddingSize,
        paddingRight : Space.paddingSize,
    },
    viewContainer : {
     
    },
    subContainer : {
        display : "flex",
        flexDirection  : "row",
        justifyContent : 'space-between',
        flexWrap : "wrap"
    },
    imageContainer: {
        display : "flex",
        justifyContent : "center",
        alignItems :"center",
        width : Circle.sizeOfCircle*1.5,
        height : Circle.sizeOfCircle*1.5,
        borderWidth : 4,
        borderColor : "white",
        borderRadius : Circle.borderRadius*1.5
    },
    addCommentContainer : {
        margin : Space.marginSize,
        borderRadius : 17,
        backgroundColor : "white",
        padding : Space.paddingSize / 2,
        paddingLeft : Space.paddingSize ,
        paddingRight : Space.paddingSize,
      
        flexDirection : "row"
    }
})
export default CommentPage