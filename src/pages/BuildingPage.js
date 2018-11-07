import React from 'react'
import {  Circle} from '../styles/global';
import {TouchableOpacity} from 'react-native'
import bad from '../../assets/imgs/bad.jpg'
import Ball from '../../assets/imgs/football.jpg'
import pinpong from '../../assets/imgs/pinpong.jpg'
import luxby from '../../assets/imgs/luxby.jpg'
import bas from '../../assets/imgs/bas.jpg'
import art from '../../assets/imgs/art.png'
import ball2 from '../../assets/imgs/ball2.jpg'
import dic from '../../assets/imgs/dic.jpg'
import movie from '../../assets/imgs/movie.png'
import shoes from '../../assets/imgs/shoes.jpg'
import boling from '../../assets/imgs/boling.jpg'
import {View , Text , StyleSheet,TextInput,Image} from 'react-native'
class BuildingPage extends React.Component{
   
    render(){
        return(
            <View style ={styles.background} >
            <View style ={styles.column1} >
                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                    <Image style={styles.Image} source={Ball} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                <Image style={styles.Image} source={pinpong} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                <Image style={styles.Image} source={bad} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                <Image style={styles.Image} source={luxby} />
                </TouchableOpacity>
                </View>

                <View style ={styles.column2} >
                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                <Image style={styles.Image} source={bas} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                <Image style={styles.Image} source={art} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                <Image style={styles.Image} source={ball2} />
                </TouchableOpacity>

                 <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                 <Image style={styles.Image} source={dic} />
                </TouchableOpacity>
                </View>

                <View style ={styles.column3} >
                  <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                  <Image style={styles.Image} source={movie} />
                </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                  <Image style={styles.Image} source={shoes} />
                </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.props.history.push("/CreateEventPage")} >
                  <Image style={styles.Image} source={boling} />
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    background : { 
        backgroundColor :"rgb(51,9,64)",
        marginTop : "5%", 
        marginLeft : "5%",
        marginRight : "5%",
        marginBottom : "5%",
        borderRadius : 20,
        flex: 1, 
        flexDirection: 'row'
    


    },
    column1 : {
        flexDirection: 'column',
    },
    column2 : {
        flexDirection: 'column',
    },
    column3 : {
        flexDirection: 'column'
    },
   
     Image : {
        width : Circle.sizeOfCircle*0.6,
        height : Circle.sizeOfCircle*0.6,
        borderWidth : 5,
        borderColor : "white",
        borderRadius : Circle.borderRadius*1.5,
        marginTop : Circle.sizeOfCircle*0.2, 
        marginLeft :Circle.sizeOfCircle*0.2,
        marginBottom :Circle.sizeOfCircle*0.15,
     
    },
    
 })

export default BuildingPage