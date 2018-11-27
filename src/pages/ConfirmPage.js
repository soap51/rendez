import React from 'react'
import {View , Text ,StyleSheet,TouchableOpacity,Image,ImageBackground,TextInput,KeyboardAvoidingView,ActivityIndicator } from 'react-native'
import DFD from '../../assets/icon/DSD.png'
import smile from '../../assets/imgs/smile.png'
import { Circle, SizePX, Font} from '../styles/global';
import OptionButton from '../components/Button/OptionButton';
import axios from 'axios';
import {verifySuccess} from '../actions/authenticateAction'
import {DOMAIN} from '../constant/environment'
import { vw, vh } from 'react-native-viewport-units';
import {Redirect} from 'react-router-native'
import {connect} from 'react-redux'
class ConfirmPage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            password :"",
            Error : "",
            loading : false
         }
        }
    onChangeText(text,field){
     if(field=='password'){
         this.setState({[field]:text});
     }
    }
    onPass(){
        this.setState({loading:true})
        if(this.state.password == ""){
            this.setState({Error: 'please enter your password'});
        }
        else{
            console.log( this.props._id)
            axios.post(DOMAIN+"api/user/verify",{otp:this.state.password , _id : this.props._id})
            .then(response=>{
                const data = response.data
                const confirmationToken = data.confirmationToken
                console.log(response)
                this.props.verifySuccess(confirmationToken)
                this.setState({ loading : false})
                this.props.history.push('/LetgoPage')
                
            })
            .catch(err=>{
                const {password} = this.state
                this.setState({ loading : false})
                console.log(err)
                console.log(this.state)
                if(err.response.status == 404) {
                    this.setState({Error: 'incorrect'});
                }
                else{this.setState({Error: 'Not found'});}

            })
        }
    }
    onPush(){
        console.log( this.props._id)
        axios.post(DOMAIN+"api/user/resend",{ _id : this.props._id})
        .then(response=>{
            console.log(response.data)
            
        })
        .catch(err=>{
            console.log(err.response)
        })
    }
     
         
    render(){
        if(this.state.loading) return <ActivityIndicator style={{justifyContent : "center" , alignItems : "center",backgroundColor:"#7F0887",width:'100%',height:"100%"}} size="large" color="#FFFFFF" />
        if(this.props.confirmationToken == true) return <Redirect to="/event" />
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
            <Text style={{color:'red',marginLeft:'auto',marginRight:'auto',marginTop:3*vw,fontsize:5*vw,fontWeight:'bold'}}>{this.state.Error}</Text>
             <Text style={{color: "white",fontSize : Circle.sizeOfCircle*0.5,
             marginTop : Circle.sizeOfCircle*0.3,textAlign : 'center'} }>
               Enter the verification code 
               we just you on your E-mail address.
             </Text>
                <View style = {styles.texti}>
                <TextInput  onChangeText={(text) => this.onChangeText(text, 'password')} keyboardType = 'numeric' maxLength={4} style={{fontSize : 50,color:"white",flex:0.6,textAlign : 'center',  }}></TextInput>
                </View>
            <TouchableOpacity style={styles.buttom}  onPress={()=>this.onPass()} >
            <Text style={{fontSize : 30,textAlign : 'center' }}>
                Verify
            </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.resend}  onPress={()=>this.onPush()} >
            <Text style={{textAlign : 'center',color:"red" }}>
                If you did not recieve a code! Resend
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
        width : Circle.sizeOfCircle*3,
        height : Circle.sizeOfCircle*0.65,
        borderRadius : Circle.sizeOfCircle,
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
        marginTop : Circle.sizeOfCircle*0.4,
        color : 'red' ,
        marginLeft:'auto',
        marginRight:'auto'

    },
   
 
})

function mapStateToProps(state){
    return {
        _id : state.AuthenticateReducer._id,
        confirmationToken : state.AuthenticateReducer.confirmationToken
    }
}
export default connect(mapStateToProps , {verifySuccess})(ConfirmPage)





