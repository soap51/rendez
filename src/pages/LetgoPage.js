import React from 'react'
import {View , Text ,StyleSheet,TouchableOpacity,Image,ImageBackground } from 'react-native'
import DFD from '../../assets/icon/DSD.png'
import tudpai from '../../assets/imgs/tudpai.jpg'
import { Circle, SizePX, Font } from '../styles/global';

class LetgoPage extends React.Component{
    render(){
        return(
            <ImageBackground source={DFD} style={{width:'100%',height:"100%"}}>
            <View style={{justifyContent:'center',alignItems:'center' , backgroundColor :"rgba(51,9,64,0.8)" ,flex : 1, }}>
            <TouchableOpacity onPress={()=>this.props.history.push("/home")} >
            <Image style ={styles.imgs} source = {tudpai}/>
                </TouchableOpacity>
             <Text style={{color: "white",fontSize : 45,marginTop : "30%"} }>
               Let's get start!!!
             </Text>
              <TouchableOpacity onPress={()=>this.props.history.push("/login")} >
                <Text style={{color: "white",fontSize : 15, borderBottomColor : "white",marginTop : "10%" }}  >
                back to log in
                </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            
        )
    }
}
const styles = StyleSheet.create({

    imgs: {
        width : Circle.sizeOfCircle*2,
        height : Circle.sizeOfCircle*2,
        borderRadius : Circle.sizeOfCircle,
           marginTop : "35%"
         
    }

   
 
})

export default LetgoPage