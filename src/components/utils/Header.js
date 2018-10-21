import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {withRouter} from 'react-router-native'

import ClickButton from '../Button/ClickButton'
import {Font} from '../../styles/global'
const style = StyleSheet.create({
    container : {
        flex : 0.09,
        backgroundColor : "rgb(234,203,238)",
        display : "flex",
        padding : 10,
        justifyContent : "space-between",
        flexDirection : "row"
    }
})
class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : props.match.path.slice(1 )
        }
    }
    render(){
        const {title} = this.state
        return (
            <View style={style.container}>
                <View>
                    <ClickButton 
                        iconType="arrow"
                        onPress={()=> console.log("hit")}
                    />
                </View>
                <View>
                    <Text style={{fontSize : Font.fontSize}}>{title}</Text>
                </View>
                <View>
                    <ClickButton 
                        iconType="options"
                        onPress={()=> console.log("hit")}
                    />
                </View>
            </View>
        )
       
    }
}

export default (Header)