import React from 'react'
import {View , Text , StyleSheet  , Image} from 'react-native'
import axios from 'axios';
import { DOMAIN } from '../constant/environment';
import setAlert from '../utils/setAlert'
import EventImage from '../../assets/imgs/football.jpg'
import { Space , Circle , Font} from '../styles/global';
// import CommentCard from '../components/Cards/CommentCard'
class CommentPage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            commentList : []
        }
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
        console.log(this.props)
        return(
            <View style={styles.container}>
                <View style={styles.viewContainer}>
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
                            >Header
                            </Text>
                            <Text 
                                style={{
                                    fontSize : Font.fontSecondary,
                                    color : "white"
                                }}    
                            >
                                By {"Babababaaba"}
                            </Text>
                        </View>
                    </View>
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
        backgroundColor : "rgb(51,9,64)",
        padding : Space.paddingSize,
    
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
    }
})
export default CommentPage