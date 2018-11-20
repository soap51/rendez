import React from 'react'
import {View , Text , TouchableOpacity  , StyleSheet} from 'react-native'
import {Font, SizePX , Circle , Space} from '../../styles/global'
import Icon from "react-native-vector-icons/Entypo";
import SwitchOption from '../Switch/SwitchOption'
import PropTypes from 'prop-types'
class OptionButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
            option : false,
            title : props.title,
            isHaveSwitch : props.isHaveSwitch,
            icon : props.icon
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            option : nextProps.option
        })
    }
    render(){
        const {title , isHaveSwitch , icon , option} = this.state
        return(
            <TouchableOpacity style={styles.container} disabled={isHaveSwitch ? true : false} onPress={()=>this.props.onPress()}>

                <View style={styles.iconContainer}>
                    <Icon style={styles.iconText} name={icon} size={SizePX} color="#000000" />
                </View>
                <View style={{display : "flex" , justifyContent : "center" , alignItems : "center" }}>
                    <Text style={styles.titleSecondary}>{title}</Text>
                </View>
                {
                    this.props.isHaveSwitch ?
                    <SwitchOption
                        value={option}
                        thumbTintColor={option ? "#5DF146" : "#E7E7E7"}
                        onValueChange={()=> this.props.onValueChange() }
                        trackColor={{false : "#B5B5B5" , true : "#B5B5B5"}}
                    />
                    :
                    <Text style={{flex : 0.3}}></Text>
                }
              
            </TouchableOpacity>
        )
    }
}
const styles= StyleSheet.create({
    container : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        padding : Space.paddingSize,
      
        justifyContent : "space-between",
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth * 5,
    },
    iconContainer : {
        
        justifyContent : "center" , 
        alignItems : "center",
        width :Circle.sizeOfCircle ,
        height : Circle.sizeOfCircle  , 
        borderRadius : Circle.borderRadius , 
        backgroundColor : "#B5B5B5"
    },  
    titleSecondary : {
        fontSize : Font.fontSecondary,
        color : "white",
        fontWeight :"bold"
    },
    iconText: {
        textAlign :'center',
        fontSize : Font.fontHeader
    },
})
OptionButton.propTypes = {
    icon : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    isHaveSwitch : PropTypes.bool.isRequired,
    onValueChange : PropTypes.func,
    
}
export default OptionButton