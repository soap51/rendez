import React from 'react'
import {View , Text,StyleSheet,Button,TextInput,TouchableOpacity,ImageBackground,KeyboardAvoidingView,Image, } from 'react-native'
import { Space  ,Font} from '../styles/global';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import { LinearGradient } from 'expo';
class RegisterPage extends React.Component{
    render(){
        return(
                    <ImageBackground source={require('../../assets/imgs/dpho4.png' )} style={styles.background}>
            <View style={{backgroundColor:'rgba(128,0,128,0.8)',height:'100%',width:'100%'}}>
            <KeyboardAvoidingView behavior="position" enabled>
            <View style={{display : "flex" , alignItems : "center" ,}}>
            <TouchableOpacity onPress={()=> this.props.history.goBack()} style={{marginRight:'auto',marginLeft:5*vw}}>
                                <View style={{backgroundColor:'rgba(255,255,255,0.26)',height:10*vw,width:15*vw,marginTop:8*vw,
                                justifyContent:'center',borderRadius:23}}>
                                    <Image source={require('../../assets/icon/leftarrow.png' ) }  
                                        style={{height:5*vw,width:5*vw,justifyContent:'center'
                                        ,marginLeft:'auto',marginRight:'auto'}}
                                    /> 
                                </View>
                            </TouchableOpacity>
                <Text style={{fontSize : 50,color:'white',marginTop:'30%'}}>Register</Text>
                
                <TextInput
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'10%',color:'white'}}
                    placeholder="Full Name"
                    onChangeText={(text) => this.setState({text})}
                />
                
                <View style={{flex: 1, flexDirection: 'row',marginLeft:'auto',marginTop:'4%',marginRight:'auto'}}>
                    <TextInput
                        underlineColorAndroid='rgba(255,255,255,1)'
                        style={{height: 10*vw,width:'47%',color:'white',}}
                        placeholder="Your code of KMITL"
                        onChangeText={(text) => this.setState({text})}
                    />

                    <Text style={{color:'white',fontSize:4*vw,marginTop:2*vw,marginBottom:-7*vw}}>@kmitl.ac.th</Text>
                </View>

                <TextInput
                    secureTextEntry
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'10%',color:'white'}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    secureTextEntry
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'5%',color:'white'}}
                    placeholder="Re-Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <TouchableOpacity style={{backgroundColor:'white',width:'70%',height:'6%',alignItems:'center',borderRadius:14,marginTop:'5%',marginBottom:5*vw}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:4*vw,marginTop:1*vw}}>
                        Register
                    </Text>
                </TouchableOpacity>

                {/* <Button
                    // onPress={onPressLearnMore}
                    title="Sign in"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                
            </View>
            </KeyboardAvoidingView>
                </View>
        </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        padding : Space.paddingSize
         
        
     },
     background :{
         height:'120%',
         width:'100%',
     },
     Textwhite : {
 
     }
     
 })
export default RegisterPage