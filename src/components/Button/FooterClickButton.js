import React from 'react'
import {View , Text , TouchableOpacity  , StyleSheet} from 'react-native'
import {Font , SizePX} from '../../styles/global'
import PropTypes from 'prop-types'; 

import Icon from "react-native-vector-icons/Ionicons";
class ClickButton extends React.Component { 
    constructor(props){
        super(props)
        this.state={
            ImageButton : props.iconType == "feed" ? "md-list-box" : (props.iconType == "noti" ? "md-notifications" : "md-home"),
        }
    }
    render(){
        const {ImageButton} = this.state
   
        return (
            <TouchableOpacity style={style.container} onPress={()=>this.props.onPress()}>
                <View style={style.subContainer}>
                    <Icon style={{ textAlign: "center"}}  name={ImageButton} color="#FFFFFF" size={SizePX}/>
                </View>
              
                <View style={style.subContainer}>
                    <Text style={{
                          color : this.props.iconType == "feed" ? "#22E4DE" : (this.props.iconType == "noti" ? "#FFFF00" : "#F59DE9"),
                          textAlign: "center",
                          fontWeight : "bold",
                          fontSize : Font.fontSize
                          
                    }}>
                        {this.props.titleButton}
                    </Text>
                </View>
               

            </TouchableOpacity>
               
        )
    }
}
ClickButton.propTypes = {
    iconType  : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired,
    titleButton : PropTypes.string.isRequired
}
const style= StyleSheet.create({
    container : {
        backgroundColor : "#67306F",
        borderRadius : 10,
        padding : 15,
        paddingLeft : 20,
        paddingRight : 20,
        display : "flex",
        flex : 2,
        justifyContent : "center",
        alignContent : "center"
    },
    subContainer : {
        display : "flex",
        justifyContent : "center",
        alignContent : "center",
        
    },
    
})

export default ClickButton