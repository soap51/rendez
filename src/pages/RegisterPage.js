import React from 'react'
import {View , Text,StyleSheet,Button,TextInput,TouchableOpacity,ImageBackground,KeyboardAvoidingView,Image, } from 'react-native'
import { Space  ,Font} from '../styles/global';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import { LinearGradient } from 'expo';
import axios from 'axios'
import {loginSuccess} from '../actions/authenticateAction'
import {DOMAIN} from '../constant/environment'
import {connect} from 'react-redux'
class RegisterPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            email: "",
            pass: "",
            re_password: "",
            sex: "M",
            studentCode: "",
        };
    }
    onChangeText(text,key,){
            this.setState({[key]:text})
        
    }
    onRegister(){
        axios.post(DOMAIN + "api/user/register" , {studentCode:this.state.email,fullName : this.state.fullName,email : this.state.email+"@kmitl.ac.th", password :this.state.pass, sex:'M'})
        
        .then(response=>{
            this.props.history.push('/verification')
            })
            .catch(err=>{
                const { fullName,email,pass,re_password} = this.state;
                console.log(err)
                console.log(this.state)
                if (fullName == "" || email == "" || pass == "" || re_password == "") {
                    this.setState({ Error: 'Please fill in all required fields' });
                }
                else if (pass != re_password){
                    this.setState({ Error: 'Password does not match the Re-password' });
                }
                else if (err.response.status == 409) {
                    this.setState({ Error: 'Mail exist' });
                }

                // else if (pass.length < 8) {
                //     this.setState({ Error: 'Password Must be more than 8 Characters' })
                // }


                else {this.setState({ Error: 'Something went wrong!' });}
            })
        }
    

    render(){
        // console.warn(this.state)
        console.log(this.state)
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
                <Text style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto', marginTop: 3 * vw, fontSize: 4 * vw, fontWeight: 'bold' }}>{this.state.Error}</Text>
                <TextInput
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'10%',color:'white'}}
                    placeholder="Full Name"
                    onChangeText={(text) => this.onChangeText(text, 'fullName')}
                />
                
                <View style={{flex: 1, flexDirection: 'row',marginLeft:'auto',marginTop:'4%',marginRight:'auto'}}>
                    <TextInput
                        keyboardType='numeric'
                        underlineColorAndroid='rgba(255,255,255,1)'
                        style={{height: 10*vw,width:'47%',color:'white',}}
                        placeholder="Your code of KMITL"
                        onChangeText={(text) => this.onChangeText(text, 'email')}
                    />

                    <Text style={{color:'white',fontSize:4*vw,marginTop:2*vw,marginBottom:-7*vw}}>@kmitl.ac.th</Text>
                </View>

                <TextInput
                    secureTextEntry
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'10%',color:'white'}}
                    placeholder="Password"
                    onChangeText={(text) => this.onChangeText(text, 'pass')}
                />

                <TextInput
                    secureTextEntry
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'5%',color:'white'}}
                    placeholder="Re-Password"
                    onChangeText={(text) => this.onChangeText(text, 're_password')}
                />

                <TouchableOpacity onPress={() => this.onRegister()} style={{backgroundColor:'white',width:'70%',height:'6%',alignItems:'center',borderRadius:14,marginTop:'5%',marginBottom:5*vw}}>
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
export default connect(null , {loginSuccess})(RegisterPage)