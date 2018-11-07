import React from 'react'
import {View , Text,StyleSheet,Button,TextInput,TouchableOpacity,ImageBackground,KeyboardAvoidingView} from 'react-native'
import { Space  ,Font} from '../styles/global';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import { loginRequest } from '../actions/authenticateAction'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-native'
import axios from 'axios'
class LoginPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            email : "59050230@kmitl.ac.th" , password : "12345",
            data: {
                email: "",
                password: ""
            },
            errors: {},
        }
    }
    onChangeText(text, field) {

        if (field == 'email') {
            this.setState({ [field]: text });


        }
        else if (field == 'password') {
            this.setState({ [field]: text });

        }


    }
    async onForgot() {
        this.props.history.push("/forgot")
    }
    async Onregister() {
        this.props.history.push("/register")
    }
     onLogin() {

     
                

            
               
                this.props.loginRequest({email : "59050230@kmitl.ac.th" , password : "12345"})
                this.props.history.push('/event' )


            

        
    }

    render(){
        return(
        
        // <ImageBackground source={require('../../assets/imgs/dpho4.png' )} style={styles.background}>
            <View  style={styles.background}>
            <KeyboardAvoidingView behavior="position" enabled>
            <View style={{ alignItems : "center" ,}}>  
                <Text style={{fontSize : 13*vw,color:'white',marginTop:'30%'}}>Welcom to{"\n"}   Rendez</Text>
                <Text style={{fontSize : 3.7*vw,color:'white'}}>The best way to do activity with anyone{"\n"} 
                    and discover new friends.{"\n"}
                    Let's get start!
                </Text>
                <Text style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto', marginTop: 3 * vw, fontSize: 3.5 * vw, fontWeight: 'bold' }}>{this.state.Error}</Text>
                <TextInput
                    underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',marginTop:'10%',color:'white'}}
                    placeholder="Email"
                    onChangeText={(text) => this.onChangeText(text, 'email')}
                />

                <TextInput
                secureTextEntry
                underlineColorAndroid='rgba(255,255,255,1)'
                    style={{height: 10*vw,width:'70%',color:'white'}}
                    placeholder="Password"
                    onChangeText={(text) => this.onChangeText(text, 'password')}
                />

                <TouchableOpacity onPress={() => this.onLogin()} style={{backgroundColor:'white',width:'70%',height:'6%',alignItems:'center',borderRadius:14,marginTop:'5%'}}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:4*vw}}>
                        Sign in
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
            <View style={{flex: 1, flexDirection: 'row',marginLeft:'auto',marginRight:'auto'}}>
                <TouchableOpacity onPress={() => this.onForgot()}>
                    <Text  style={{color:'white',textDecorationLine: 'underline',marginTop:'auto',marginBottom:'20%'}}>Forgot Password?</Text>
                </TouchableOpacity>
                     <Text style={{marginLeft:'5%'}}></Text>  
                <TouchableOpacity onPress={() =>this.Onregister()}>
                    <Text style={{color:'white',textDecorationLine: 'underline',marginTop:'auto',marginBottom:'40%'}}>Register?</Text>
                </TouchableOpacity>
                </View>
                </View>
        // </ImageBackground>
        
        )
    }
}
const styles = StyleSheet.create({
    container : {
       padding : Space.paddingSize
        
       
    },
    background :{
        backgroundColor:'purple',
        height:'100%',
        width:'100%',
    },
    Textwhite : {

    }
    
})
export default withRouter(connect(null , {loginRequest})(LoginPage))