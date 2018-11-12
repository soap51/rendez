import React from 'react'
import {View , Text ,StyleSheet,TouchableOpacity,Image,ImageBackground,TextInput,KeyboardAvoidingView } from 'react-native'
import DFD from '../../assets/icon/DSD.png'
import smile from '../../assets/imgs/smile.png'
import { Circle, SizePX, Font} from '../styles/global';
import OptionButton from '../components/Button/OptionButton';


class ConfirmPage extends React.Component{
    render(){
        return(
            <ImageBackground source={DFD} style={{width:'100%',height:"100%"}}>
            <View style={styles.back}>
            <KeyboardAvoidingView behavior="position" enabled>
            <Text style={{color: "white",fontSize :Circle.sizeOfCircle*0.6,marginTop : Circle.sizeOfCircle*(0.01),textAlign : 'center' } }>
               Verification
             </Text>
            <View style={styles.pink}>
                <Image style ={styles.imgs} source = {smile}/>
            </View>
             <Text style={{color: "white",fontSize : Circle.sizeOfCircle*0.5,
             marginTop : Circle.sizeOfCircle*0.3,textAlign : 'center'} }>
               Enter the verification code 
               we just you on your E-mail address.
             </Text>
                <View style = {styles.texti}>
                <TextInput style={{fontSize : 50,color:"white",flex:0.6,textAlign : 'center', }}></TextInput>
              
              
            </View>
            <TouchableOpacity onPress={() => this.onConfirmPage()}>
            <Text style={styles.buttom}>
                Verify
            </Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onConfirmPage()}>
            <Text style={styles.resend}>
            If you didn't recieve a code! Resend
            </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView> 
            </View> 
            </ImageBackground>
            
            
        )
    }
}
const styles = StyleSheet.create({
    buttom :
    {
        fontWeight : "bold",
        backgroundColor :"white",
        marginTop : Circle.sizeOfCircle*0.4,
        marginLeft : Circle.sizeOfCircle*2,
        fontSize : 30,
        width : Circle.sizeOfCircle*3,
        height : Circle.sizeOfCircle*0.65,
        borderRadius : Circle.sizeOfCircle,
        textAlign : 'center' 
    },


    texti : {
        flexDirection : 'row',
        marginLeft : Circle.sizeOfCircle*2,
    },
    imgs: {
        width : Circle.sizeOfCircle*2,
        height : Circle.sizeOfCircle*2,
       borderRadius : Circle.sizeOfCircle,
    },
    pink : {
        justifyContent:'center',
        alignItems:'center' ,
         backgroundColor :"pink" ,
         width : Circle.sizeOfCircle*2.8,
        height : Circle.sizeOfCircle*2.8,
         borderRadius : Circle.sizeOfCircle*1.5,
         marginTop : Circle.sizeOfCircle*0.4,
         marginLeft : Circle.sizeOfCircle*2,
         
    },
    back : {
        justifyContent:'center',
        alignItems:'center' ,
         backgroundColor :'rgba(51,9,64,0.6)' ,
         flex : 1,
         
    },
    resend:{

        textAlign : 'center' ,
        marginTop : Circle.sizeOfCircle*0.4,
        color : 'red' 
    },
   
 
})

export default ConfirmPage





