import React from 'react'
import {ActivityIndicator,View ,Modal, Text,StyleSheet,Button,TextInput,TouchableOpacity,TouchableHighlight,ImageBackground,KeyboardAvoidingView,Image } from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import { LinearGradient } from 'expo';
import { Space, Circle, Font , SizePX } from '../styles/global';
import jm from '../../assets/imgs/jm.png'
import {DOMAIN} from '../constant/environment'
import axios from 'axios'
class ForgotPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
            email : "" ,
            modalVisible: false,
            loading: false,
        }
    }

    // setModalVisible(visible) {
    //     this.setState({modalVisible: visible});
    //   }

    Onrequest(){
        const {email} = this.state;
        this.setState({loading:true})
        if(email==""){
            this.setState({ Error: 'Please fill email' })
        }
        else{
            console.log(this.state)
            axios.post(DOMAIN + "api/user/forgot" , {email : this.state.email}).then(response=>{
                this.setState({modalVisible: true ,loading:false});
            })
            .catch(err=>{
                console.log(err)
                if(err.response.status == 401){
                    this.setState({ Error: 'User not found' });
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

            <ImageBackground source={require('../../assets/imgs/dpho4.png' )} style={styles.background}>
                <View style={{backgroundColor:'rgba(128,0,128,0.8)',height:'100%',width:'100%'}}>
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <ImageBackground source={require('../../assets/imgs/dpho4.png' )} style={styles.background}>
                <View style={{backgroundColor:'rgba(128,0,128,0.8)',height:'100%',width:'100%'}}>
            <View style={{marginTop: 22}}>

            <LinearGradient
            colors={[ '#FB9696','#F6CECE', '#FF6060']}
            style={{height : Circle.sizeOfCircle*0.8*vw,width : Circle.sizeOfCircle*0.8*vw,
            borderRadius : Circle.sizeOfCircle*0.8*vw,alignItems:'center',marginTop:10*vw,position:'relative',marginLeft : 26*vw,marginTop : 30*vw,}}>
             <Image style={{   width : Circle.sizeOfCircle*0.6*vw,
        height : Circle.sizeOfCircle*0.35*vw,
        marginTop : 14*vw,
      }} source={jm} />
      </LinearGradient>
      <Text style = {{marginLeft : 15*vw,marginTop : 10*vw,fontWeight : "bold",fontSize : 6*vw,color : 'white'}}>Check your email address!</Text>

              <View>
                <TouchableHighlight
                  onPress={() => { this.props.history.push('/');   
                  }}>
                 <Text style = {{marginLeft : 38*vw,marginTop : 2*vw,fontWeight : "bold",fontSize : 4*vw,color : 'white',}}>back to log in</Text>
                </TouchableHighlight>
              </View>
            </View>
            </View>
            </ImageBackground>
          </Modal>
                    <KeyboardAvoidingView behavior="position" enabled>
                        <View style={{display : "flex" , alignItems : "center" ,}}>
                            <TouchableOpacity onPress={()=> this.props.history.goBack()}  style={{marginRight:'auto',marginLeft:5*vw}}>
                                <View style={{backgroundColor:'rgba(255,255,255,0.26)',height:10*vw,width:15*vw,marginTop:8*vw,
                                justifyContent:'center',borderRadius:23}}>
                                    <Image source={require('../../assets/icon/leftarrow.png' ) }  
                                        style={{height:5*vw,width:5*vw,justifyContent:'center'
                                        ,marginLeft:'auto',marginRight:'auto'}}
                                    /> 
                                </View>
                            </TouchableOpacity>
                            <Text style={{fontSize : 7.5*vw,color:'white',marginTop:'15%',fontWeight:'bold'}}>Forgot Password?</Text>
                            <Text style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto', marginTop: 3 * vw, fontSize: 4 * vw, fontWeight: 'bold'}}>{this.state.Error}</Text>
                            <LinearGradient
                                colors={['#F6CECE', '#FB9696', '#FF6060']}
                                style={{alignItems:'center',borderRadius:5,marginTop:40*vw,position:'relative',}}>
                                <Text style={{fontSize:4.5*vw,fontWeight:'bold',marginTop:'10%',}}>
                                    Did you forget your password?
                                </Text>
                                <Text style={{fontSize:2.5*vw,marginTop:'2%',textAlign : "center"}}>
                                    Enter your email address you're using for your account below{"\n"}
                                    and we will send you a password reset link.
                                </Text>

                                <TextInput
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                     style={{textAlign : "center",marginLeft:'5%',marginRight:'5%',height: 6*vw,width:80*vw,marginTop:'5%',color:'black',backgroundColor:'white',borderRadius:50,}}
                                     placeholder="Enter your email address"
                                    onChangeText={(text) => this.setState({ email: text })}
                                />
                           {/* { AlertError(this.props.history , 400 ,"", "")} */}
                           
                          
                           <TouchableHighlight
          onPress={() =>   this.Onrequest()}>
          <View style={{backgroundColor:'white',width:80*vw,height:6*vw,alignItems:'center',borderRadius:14,marginTop:'5%',marginBottom:5*vw}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:3*vw,marginTop:1*vw}}>
             Request reset link
          </Text>
          </View>
        </TouchableHighlight>
                                </LinearGradient>
                                <ImageBackground source={require('../../assets/imgs/Group96.png' )} 
                                style={{height:40*vw,width:40*vw,position:'absolute',marginTop:'50%'}}></ImageBackground> 
                        </View>
                    </KeyboardAvoidingView>
                    <Text style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto', marginTop: 3 * vw, fontSize: 4 * vw, fontWeight: 'bold'}}>{this.state.Error}</Text>
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

export default ForgotPage