import React from 'react'
import {View , Text , StyleSheet , PixelRatio} from 'react-native'
import {withRouter} from 'react-router-native'

import ClickButton from '../Button/ClickButton'
import {Font} from '../../styles/global'
const style = StyleSheet.create({
    container : {
        flex :  0.11 ,
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
        console.log(this.props.history)
        return (
            <View style={style.container}>
                <View>
                    {this.props.history.location.pathname != "/event" ?
                    <View>
                   
                    { this.props.history.index != 0 ?
                        <ClickButton 
                            iconType="arrow"
                            onPress={()=> this.props.history.goBack()}
                        />
                        :
                        <View></View>
                    }
                    </View>
                        :  <ClickButton 
                              
                                onPress={()=> this.props.history.push('/createevent')}
                            />
                    }
                </View>
                {/* <View style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                    <Text style={{fontSize : Font.fontHeader , fontWeight : "bold"}}>{title}</Text>
                </View> */}
                <View>
                    {
                        title != "Others" ?
                        <ClickButton 
                            iconType="options"
                            onPress={()=> this.props.history.push('/Others')}
                        />
                        :
                        <View></View>
                    }
                
                </View>
            </View>
        )
       
    }
}

export default (Header)