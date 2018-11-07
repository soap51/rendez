import React from 'react'
import {View , Text , StyleSheet  , Image , TextInput , Dimensions} from 'react-native'

import { DOMAIN } from '../constant/environment';
import setAlert from '../utils/setAlert'
import EventImage from '../../assets/imgs/football.jpg'
import { Space , Circle , Font , SizePX} from '../styles/global';
import CommentCard from '../components/Cards/CommentCard'
import Icon from "react-native-vector-icons/Ionicons";
import _ from 'lodash'
class CommentPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            commentList : [],
            comment : "",
            title : " ",
            author : " "
            
        }
    }
    onTyping(text){
        this.setState({comment : text })
    }
    onSubmit(){
        this.setState({comment : ""})
        
        console.log("hit")
        // axios.post(DOMAIN + "" , {comment : this.state.comment})
        //     .then(result=>{
                
        //     })
        //     .catch(error=>{
                
        //     })
        
    }
    componentDidMount(){
        // axios.get(DOMAIN + "" + this.props.match.params.eventId)
        //     .then(result=>{
        //         const commentList = result.commentList
        //         this.setState({commentList : commentList})
        //     })
        //     .catch(err=>{
        //         setAlert()
        //     })
    }
    render(){
        const {comment ,title , author} = this.state
        const {height , width} = Dimensions.get("window")
       
        return(
            <View style={styles.container} >
                <View style={{
                    flex : 1,
                    backgroundColor : "rgb(51,9,64)",
                    padding : Space.paddingSize,
                    minHeight : height/1.3,
                }}>
                    <View style={styles.subContainer}>
                        <Image style={styles.imageContainer} source={EventImage} />
                        <View >
                            <Text
                                style={{
                                    fontSize : Font.fontHeader,
                                    color : "white",
                                    fontWeight : "bold",
                                    textAlign : "right"
                                }}
                            >
                            {title}
                            </Text>
                            <Text 
                                style={{
                                    fontSize : Font.fontSecondary,
                                    color : "white"
                                }}    
                            >
                                By {" "+ author}
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
                   
                    
                    <CommentCard 
                        position={1}
                        comment={"Tessstsdssgodsjgodsjgosdjgosjgsodjgsdogjsdogjsdo"}
                    />
                    <CommentCard 
                        position={0}
                        comment={"Tessstsdssgodsjgodsjgosdjgosjgsodjgsdogjsdogjsdo"}
                    />
                     <CommentCard 
                        position={0}
                        comment={"Tessstsdssgodsjgodsjgosdjgosjgsodjgsdogjsdogjsdo"}
                    />
                     <CommentCard 
                        position={0}
                        comment={"Tessstsdssgodsjgodsjgosdjgosjgsodjgsdogjsdogjsdo"}
                    />
                     <CommentCard 
                        position={0}
                        comment={"Tessstsdssgodsjgodsjgosdjgosjgsodjgsdogjsdogjsdo"}
                    />
                    
                    
                    
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