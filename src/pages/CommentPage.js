import React from 'react'
import {View , Text , StyleSheet  , Image , TextInput , Dimensions} from 'react-native'

import { DOMAIN } from '../constant/environment';
import setAlert from '../utils/setAlert'
import EventImage from '../../assets/imgs/football.jpg'
import { Space , Circle , Font , SizePX} from '../styles/global';
import CommentCard from '../components/Cards/CommentCard'
import Icon from "react-native-vector-icons/Ionicons";
import _ from 'lodash'
import axios from 'axios'
class CommentPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            commentList : [],
            comment : "",
            title : " ",
            author : " ",
            loading : false
            
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
                      
                        this.setState({commentList  , comment : "" , loading : false})
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
                const commentList = data.comment.reverse()
                this.setState({commentList })
            })
            .catch(err=>{
                setAlert(this.props.history , 400 , "Error" , "network error")
                
            })
    }
    render(){
        const {comment ,title,loading , author , commentList} = this.state
        const {height , width} = Dimensions.get("window")
       
        const comments = !loading && commentList && commentList.length != 0 ? commentList.map((data , key )=>
            <CommentCard 
                position={key % 2}
                comment={data.detail}
            />
        ) :
        <View><Text></Text></View>
     
        return(
            <View style={styles.container} >
                <View style={{
                    flex : 1,
                    backgroundColor : "rgb(51,9,64)",
                    padding : Space.paddingSize,
                    minHeight : height/1.3,
                }}>
                    
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