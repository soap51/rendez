import React from 'react'
import {View , Text , StyleSheet , Image} from 'react-native'
import { Space, Circle, Font } from '../../styles/global';
import Ball from '../../../assets/imgs/football.jpg'
import PropTypes from 'prop-types'
class NotificationCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            author : props.author ? props.author : "",
            typeNotification : props.typeNotification ? props.typeNotification : "",
            createAt : props.createAt ? props.createAt : ""
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            author : nextProps.author,
            typeNotification : nextProps.typeNotification,
            createAt : nextProps.createAt
        })
    }
    render(){
        const { author , typeNotification ,createAt} = this.state
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={Ball} />
                </View>
                <View style={styles.authorContainer}>
                    <Text style={{
                        fontSize : Font.fontSecondary,
                        fontWeight : "bold",
                        color : "white"
                    }}>{author}</Text>
                    <Text style={{ color : "white"}}>{typeNotification}</Text>
                </View>
                <View style={styles.timeContainer} >
                    <Text style={{ color : "white"}}>{createAt}</Text>
                </View>
            </View>
        )
    }
}
NotificationCard.propTypes = {
    author : PropTypes.string.isRequired,
    typeNotification : PropTypes.string.isRequired,
    createAt : PropTypes.string.isRequired
}
const styles= StyleSheet.create({
    container : {
        backgroundColor : "rgba(112,112,112 , 0.43)",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        padding : Space.paddingSize / 3,
        margin : Space.marginSize / 4,
        borderRadius : 2
    },
    imageContainer : {
        flex : 0.3,
        display :"flex",
        justifyContent : "center",
        alignItems : "center"
    },
    image : {
        width : Circle.sizeOfCircle,
        height : Circle.sizeOfCircle,
        borderRadius : Circle.borderRadius
    },
    authorContainer: {
        flex : 0.6,
        justifyContent : "center",
        alignItems : "flex-start",
        display : "flex"
    },
    timeContainer : {
        flex : 0.3,
        justifyContent : "flex-end",
        alignItems : "center",
        display : "flex"
    }
})

export default NotificationCard