import React from 'react'
import {ActivityIndicator,View , Text,StyleSheet,Button,AsyncStorage,TextInput,TouchableOpacity,ImageBackground,KeyboardAvoidingView} from 'react-native'
import { Space  ,Font} from '../styles/global';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import { loginRequest , loginSuccess} from '../actions/authenticateAction'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-native'
import {DOMAIN} from '../constant/environment'
import axios from 'axios'
import setAuthorizationHeader from '../utils/setAuthorizationHeader'
class LoginPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            email : "" , password : "",
        }
    }
    onChangeText(text, field) {
            this.setState({ [field]: text });
    }
    async onForgot() {
        this.props.history.push("/forgot")
        
    }
    async Onregister() {
        this.props.history.push("/register")
    }
     onLogin() {
         console.log(DOMAIN + "api/user/login")
      
         const {email,password} = this.state;
         if(email == "" || password == ""){
            this.setState({ Error: 'Please fill email or password' });
         }
         else{
            this.setState({loading : true})
            axios.post(DOMAIN + "api/user/login" , {email : this.state.email , password : this.state.password }).then(response=>{
                const data = response.data
                const token = data.token 
                const _id = data._id
                const confirmationToken = data.confirmationToken
                const myCreateEvent = data.myCreateEvent
                const myJoinEvent = data.myJoinEvent
                const fullName = data.fullName
                console.log(response.data)
                AsyncStorage.setItem('token' , token).then(result=>{
                    console.log(result)
                })
                .catch(err=>{
                    console.log(err.response)
                })
                
                this.props.loginSuccess({token:token , _id : _id , confirmationToken :confirmationToken , myCreateEvent , myJoinEvent })

                this.setState({loading : false})
                this.props.history.push('/event')
            })
            .catch(err=>{
                 this.setState({loading : false})
                console.log(err)
                if(err.response.status == 401){
                    this.setState({ Error: 'Invalid email or password' });
                }
                else if(err.response.status == 500){
                    this.setState({ Error: 'Something went wrong( Error:500 )' });
                }
                else(this.setState({ Error: 'Something went wrong' }));
               
            })
         }

        
    }

    render(){
        if(this.state.loading) return <ActivityIndicator style={{justifyContent : "center" , alignItems : "center",backgroundColor:"#7F0887",width:'100%',height:"100%"}} size="large" color="#FFFFFF" />
        return(
        
        // <ImageBackground source={require('../../assets/imgs/dpho4.png' )} style={styles.background}>
            <View  style={styles.background}>
            <KeyboardAvoidingView behavior="position" enabled>
            <View style={{ alignItems : "center" ,}}>  
                <Text style={{fontSize : 13*vw,color:'white',marginTop:'30%'}}>Welcome to{"\n"}   Rendez</Text>
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
                {/* <TouchableOpacity onPress={() => this.onForgot()} style={{marginBottom:'5%',marginTop:'auto'}}>
                    <Text  style={{color:'white',textDecorationLine: 'underline',}}>Forgot Password?</Text>
                </TouchableOpacity> */}
                     <Text style={{}}></Text>  
                <TouchableOpacity onPress={() =>this.Onregister()} style={{marginBottom:'5%',marginTop:'auto'}}>
                    <Text style={{color:'white',textDecorationLine: 'underline',}}>Register?</Text>
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
export default withRouter(connect(null , {loginRequest , loginSuccess})(LoginPage))