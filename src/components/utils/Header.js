import React from 'react'
import {View , Text , StyleSheet , PixelRatio} from 'react-native'
import {withRouter} from 'react-router-native'
import { vw } from 'react-native-viewport-units';
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
        console.log('title ' , title)
        console.log( title == 'event' ? ("Feed") : (
            title == 'event/:eventId' ? "More Detail" : (
                title == "event/:eventId/comment" ? "Comment" : title
                )
            ))
        return (
            <View style={style.container}>
                <View >
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
                                iconType="plus"
                                onPress={()=> this.props.history.push('/CreateEventPage')}
                            />
                    }
                </View>
                <View style={{  display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection :"row"}}>
                    <Text style={{fontSize :  5*vw , fontWeight : "bold"}}>{
                       title == 'event' ? ("Feed") : (
                        title == 'event/:eventId' ? "More Detail" : (
                            title == "event/:eventId/comment" ? "Comment" : (title == 'Home'? "Profile" :(title== "CreateEventPage" ? "Create" : title))
                        )
                       )
                    }</Text>
                </View>
                <View >
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