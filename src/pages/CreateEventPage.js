import React from 'react'
import { Space, Circle, Font , SizePX } from '../styles/global';
import {View , Text ,StyleSheet,TextInput,Image} from 'react-native'
import { vw, vh } from 'react-native-viewport-units';
import DatePicker from 'react-native-datepicker'
import {TouchableOpacity} from 'react-native'
import icon from '../../assets/imgs/icon.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import Iconja from "react-native-vector-icons/EvilIcons";

class CreateEventPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date:"",
            email: "",
            time:"",
            timeend:"",
            
        // data: {
        //     email:""
        // }

        }
        
    }
    onChangeText(text, field){
        if(field == 'nameac' ) {
            this.setState({ [field]: text});
        }
        else if(field == 'createby'){
            this.setState({ [field]: text});
        }
        else if(field == 'detail'){
            this.setState({ [field]: text});
        }
        else if(field == 'currentseat'){
            this.setState({ [field]: text});
        }
        else if(field == 'Limited Seat'){
            this.setState({ [field]: text});
        }
    }
    
    render(){
        // console.warn(this.state.time) 
        return(
            <View style={styles.background}>
                
                <View>
                <TouchableOpacity onPress={()=>this.props.history.push("/account")} >
                <Text style={styles.Circle}></Text>
                </TouchableOpacity>

                <View  style={{marginLeft:19*vw,marginTop:-15*vw,marginRight: 7*vw,color : 'white',fontSize: 3*vw}}>
                    <TextInput style={{color:"white"}}
                        underlineColorAndroid="transparent" 
                        onChangeText={(text) => this.onChangeText(text ,'nameac')}
                        placeholder='                            Fill in the name of activity'>

                    </TextInput>
                </View>
                <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginLeft:19*vw,marginRight:7*vw}}></View>
                </View>
                

                <View style={styles.back}>
                <Image style={styles.icon1} source={icon} />
                <Text style={{marginLeft:13*vw,marginTop:-6*vw,marginRight: 6*vw,color:'white',fontWeight:"bold",fontSize:4*vw}}>By</Text>
                
                 <TextInput underlineColorAndroid="rgba(255,255,255,1)" style={{marginLeft:18*vw,marginTop:-5*vw,marginRight: 5*vw,color:"white"}}
                 onChangeText={(text) => this.onChangeText(text ,'createby')}>
                   
                </TextInput>
                </View>

                <View style={styles.backCurrent }>
                <Icon style={styles.iconlo} name="ios-pin" size={SizePX} color="#F59F9F" /> 
                <TextInput underlineColorAndroid="rgba(255,255,255,1)" style={{marginLeft:12*vw,marginTop:-7*vw,marginRight: 5*vw,color:"white"}}>
                
                </TextInput>
                </View>
                <View style={styles.backtime}>
                
                <DatePicker
                    style={{width: 40*vw,height:20*vw,marginLeft:18*vw,marginTop:1.5*vw,}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2020-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                     dateIcon: {
                         position: 'absolute',
                         left: 0*vw,
                         top: 1*vw,
                         marginLeft: 2*vw,
                        
                     },
                    dateInput: {
                        marginLeft: 10*vw,
                        backgroundColor:"white",
                        borderRadius:15
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                    <Icon style={styles.icontime } name="md-time" size={8*vw} color="#F7E365" />
                    <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginTop:-5*vw,marginLeft:15*vw,marginRight:5*vw}}></View>
                
                <DatePicker
                    style={{width: 18*vw,marginLeft:17*vw,marginTop:0*vw,}}
                    date={this.state.time}
                    mode="time"
                    color="white"
                    fontWeight="bold"
                    placeholder="00.00"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={10}
                    showIcon={false}
                    customStyles={{
                       dateInput: {
                           
                           backgroundColor:"rgb(51,9,64)",
                           borderRadius:20,
                           height:6*vw,
                           color:"white"
                       }
                       }}
                    onDateChange={(time => {this.setState({time: time})})}
                />
                <DatePicker
                    style={{width: 18*vw,marginLeft:45*vw,marginTop:-9.5*vw,color:"white"}}
                    date={this.state.timeend}
                    mode="time"
                    color="white"
                    fontWeight="bold"
                    placeholder="00.00"
                    format="HH:mm"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    minuteInterval={11}
                    showIcon={false}
                    customStyles={{
                       dateInput: {
                           
                           backgroundColor:"rgb(51,9,64)",
                           borderRadius:20,
                           height:6*vw,
                           color:"white"
                       }
                       }}
                    onDateChange={(timeend => {this.setState({timeend: timeend})})}
                />
                <Text style={{marginLeft:22*vw,marginTop:-3*vw,color:"white",fontWeight:"bold"}}>
                    Start
                </Text>
                <Text style={{marginLeft:51*vw,marginTop:-4.7*vw,color:"white",fontWeight:"bold"}}>
                    End
                </Text>
                </View>

                <View style={styles.backCurrent}>
                <Icon style={styles.iconlo} name="md-people" size={8*vw} color="#00FFF" />
                <Text style={{marginLeft:14*vw,marginTop:-7*vw,marginRight: 5*vw,fontSize: 4*vw,color: 'white',fontWeight : "bold",} }>
                Current:
                </Text>
                <TextInput underlineColorAndroid="transparent" style=
                    {{marginLeft:30*vw,marginTop:-5*vw,marginRight: 20*vw,color:"white",textAlign:"center",backgroundColor : "rgb(51,9,64)",
                      borderRadius:20,width:7*vw,height:5*vw}}
                      onChangeText={(text) => this.onChangeText(text ,'currentseat')}
                      placeholder='-'>  
                </TextInput>

                <Text style={{marginLeft:43*vw,marginTop:-5.5*vw,marginRight: 5*vw,fontSize: 4*vw,color: 'white',fontWeight : "bold",} }>
                Limited Seat:
                </Text>
                <TextInput underlineColorAndroid="transparent" style=
                    {{marginLeft:68*vw,marginTop:-4.8*vw,marginRight: 20*vw,color:"white",textAlign:"center",backgroundColor : "rgb(51,9,64)",
                      borderRadius:20,width:7*vw,height:5*vw}}
                      onChangeText={(text) => this.onChangeText(text ,'Limited Seat')}
                      placeholder='-'>  
                </TextInput>
                </View>

                <View style={styles.backDetail}>
                <Iconja style={{marginLeft:2*vw,marginTop:1*vw}} name="pencil" size={10*vw} color="#00FF00" />
                <Text style={{marginLeft:14*vw,marginTop:-7*vw,marginRight: 5*vw,fontSize: 4*vw,color: 'white',fontWeight : "bold",}}>
                         Detail:
                </Text>
                <TextInput underlineColorAndroid="rgba(255,255,255,1)" style={{marginLeft:12*vw,marginTop:0.5*vw,marginRight: 5*vw,color:"white"}}
                onChangeText={(text) => this.onChangeText(text ,'detail')}>
                </TextInput>
                <TextInput underlineColorAndroid="rgba(255,255,255,1)" style={{marginLeft:12*vw,marginTop:0.5*vw,marginRight: 5*vw,color:"white"}}
                onChangeText={(text) => this.onChangeText(text ,'detail')}>
                </TextInput>
                
                </View>

                <View style={styles.create}>
                <TouchableOpacity onPress={()=>this.props.history.push("/event")} >
                <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>
                Create
                </Text>
                </TouchableOpacity>
                </View>
                  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    background : {
        backgroundColor : "rgb(51,9,64)",
        borderRadius : 15,
        marginLeft : Circle.sizeOfCircle*0.4,
        marginRight : Circle.sizeOfCircle*0.4,
        marginTop : Circle.sizeOfCircle*0.3
           
    },
    back : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.65,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,

        
    },
    backCurrent : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.2,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,
        height: 10*vw

        
    },
    backDetail : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.2,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,
    },
    
    borderInputtext : {
        marginLeft : Circle.sizeOfCircle*0.2,
        marginRight : Circle.sizeOfCircle*0.2,
        marginTop : Circle.sizeOfCircle*0.1,
        marginBottom : Circle.sizeOfCircle*0.1,
        
        
    },
    bordertext : {
        marginLeft : Circle.sizeOfCircle*0.2,
        marginRight : Circle.sizeOfCircle*0.2,
        marginTop : Circle.sizeOfCircle*0.1,
        marginBottom : Circle.sizeOfCircle*0.1,
        fontSize: 4*vw,
        color: 'white',
        fontWeight : "bold",
    },
    Circle : {
        backgroundColor : "rgb(255,255,255)",
        width :  Circle.sizeOfCircle,
        height :  Circle.sizeOfCircle,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : Circle.sizeOfCircle*0.2,
        marginTop : Circle.sizeOfCircle*0.2,
    },
    backtime : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.2,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,
        height: 24.5*vw,
        
    },
    create : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : "4%",
        marginLeft : "auto",
        marginRight : "auto",
        borderRadius : 20,
        height: 5*vw,
        width: 15*vw,
        
        
    },
    icon1 : {
        width :  Circle.sizeOfCircle*0.5,
        height :  Circle.sizeOfCircle*0.5,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : Circle.sizeOfCircle*0.1,
        marginTop : Circle.sizeOfCircle*0.1,
        
        
    },
    iconlo : {
        width :  Circle.sizeOfCircle*0.5,
        height :  Circle.sizeOfCircle*0.5,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginTop : Circle.sizeOfCircle*0.1,
       
    },
    icontime : {
        marginTop : -12*vw,
        marginLeft : 4*vw
        
        
    },
    
})
export default CreateEventPage