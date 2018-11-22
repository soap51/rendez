import React, {Component} from 'react'
import { Space, Circle, Font , SizePX } from '../styles/global';
import {KeyboardAvoidingView,ActivityIndicator,View , Text ,StyleSheet,TextInput,Image,Alert,ImageBackgrond,Modal,TouchableHighlight,} from 'react-native'
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import DatePicker from 'react-native-datepicker'
import {TouchableOpacity , Dimensions} from 'react-native'
import icon from '../../assets/imgs/icon.jpg'
import Icon from "react-native-vector-icons/Ionicons";
import Iconja from "react-native-vector-icons/EvilIcons";
import {connect} from 'react-redux'
import bad from '../../assets/imgs/bad.jpg'
import Ball from '../../assets/imgs/football.jpg'
import pingpong from '../../assets/imgs/pingpong.jpg'
import luxby from '../../assets/imgs/luxby.jpg'
import bas from '../../assets/imgs/bas.jpg'
import art from '../../assets/imgs/art.png'
import ball2 from '../../assets/imgs/ball2.jpg'
import dic from '../../assets/imgs/dic.jpg'
import movie from '../../assets/imgs/movie.png'
import shoes from '../../assets/imgs/shoes.jpg'
import boling from '../../assets/imgs/boling.jpg'
import www from '../../assets/imgs/www.jpg'
import {DOMAIN} from '../constant/environment'
import axios from 'axios'
import setAlert from '../utils/setAlert'
import moment, { months, parseTwoDigitYear } from 'moment'

class CreateEventPage extends React.Component{
    setModalVisible(visible) { this.setState({ modalVisible: visible});
      }//imageSrc
    constructor(props){
        super(props)
        this.state = {
            visible:www,
            date:"",
            time:"",
            timeend:"",
            createby:"",
            modalVisible: false,
            location:"",
            detail:"",
            currentseat:"",
            Limitedseat:"",
            nameac:"",
            key:0,
            loading : false,
        //   imageSrc : -1,
            
        // data: {
        //     email:""
        // }
        }
        
    }
    onCreate() {
        if(this.state.key == 0){
            this.setState({Error: 'โปรดระบุรูปภาพของคุณ'})
        }
        // axios.post(DOMAIN + "/user/"+this.props._id+"/event/",
        else{
        if(this.state.endTime < this.state.time){
            setAlert(this.props.history , 400 , "Error" , "ตั้งค่าเวลาให้เหมาะสม")
            this.setState({loading : false})
            return ;
           
        }
        this.setState({loading:true})
        const time = this.state.time.split(":")
        const timeend = this.state.timeend.split(":")
        
       
        if(this.state.currentseat < 0 || this.state.totalSeat < 0){
            setAlert(this.props.history , 400 , "Error" , "Seat must be greater than zero")
            this.setState({loading : false})
            return ;
          
        }
        if(this.state.currentseat < 0 || this.state.totalSeat < 0){
            setAlert(this.props.history , 400 , "Error" , "Seat must be greater than zero")
            this.setState({loading : false})
            return ;
          
        }
        startTime = moment(time[0] + ":" + time[1], 'HH:mm')._d
        endTime = moment(timeend[0] + ":" + timeend[1] , 'HH:mm')._d
        // console.log( {   userID : this.props._id, author : this.props._id, eventDate : new Date(this.state.date),startTime : startTime,
        //     endTime : endTime,place : this.state.location,
        //     detail : this.state.detail
        //     ,currentSeat : this.state.currentseat,totalSeat : this.state.Limitedseat, /*author : this.state.createby,*/iconType : this.state.key , eventName : this.state.nameac})
        axios.post(DOMAIN + "api/event",
        {   userID : this.props._id, author : this.props._id, eventDate : new Date(this.state.date),startTime : startTime,
            endTime : endTime,place : this.state.location,
            detail : this.state.detail
            ,currentSeat : this.state.currentseat,totalSeat : this.state.Limitedseat, /*author : this.state.createby,*/iconType : this.state.key , eventName : this.state.nameac})

            .then(response=>{
                console.log(response);
                this.setState({loading:false})
                this.props.history.push('/event')
            })
            .catch(err=>{
                const {date,time,endtime,location,detail,currentseat,Limitedseat,nameac,key} = this.state;
                console.log(err.response)
                console.log(this.state)
                if(date == "" || time == "" || endtime == "" || location == "" || detail == "" || currentseat == "" || Limitedseat == "" || key == "" || nameac == ""){
                    this.setState({Error: 'โปรดกรอกให้ครบถ้วน'})    
                }
                else if (timeend < time){
                    this.setState({Error: 'โปรดตั้งค่าเวลาให้เหมาะสม'})
                }
                else if (Limitedseat < currentseat){
                    this.setState({Error: 'โปรดใส่จำนวนคนให้เหมาะสม'})
                }
                else if (currentseat > Limitedseat){
                    this.setState({Error: 'โปรดใส่จำนวนคนให้เหมาะสม'})
                }
                else if(date < ShowTime){
                    this.setState({Error: 'โปรดตั้งค่าเวลาให้ถูกต้อง'})
                }
                else {this.setState({Error: 'Something went wrong'})}
                // setAlert(this.props.history , 403 , "ERROR" , "ควย")
                this.setState({loading : false})
            })
            }
        }

    componentDidMount() {
        // setAlert(this.props.history , 400 , "Test" , "ควย")
        // axios.get(DOMAIN + "")
        //   .then(res => {
        //     const sentimage = res.data;
        //     this.setState({ sentimage });
        //   })
        //  .catch(err=>{})
        
    }
    ShowTime() {
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        var date = new Date().getDate();

        Alert.alert(year + '-' + month + '-' + 'date');
    }
    
      
      onChangePicture(key) {
          if(key == 1){
              this.setState({visible : Ball , modalVisible : !this.state.modalVisible,key :1})
          }
          else if (key == 2){
            this.setState({visible : bad , modalVisible : !this.state.modalVisible,key :2})
        }
        else if (key == 3){
            this.setState({visible : luxby , modalVisible : !this.state.modalVisible,key :3})
        }
        else if (key == 4){
            this.setState({visible : bas , modalVisible : !this.state.modalVisible,key :4})
        }
        else if (key == 5){
            this.setState({visible : art , modalVisible : !this.state.modalVisible,key :5})
        }
        else if (key == 6){
            this.setState({visible : ball2 , modalVisible : !this.state.modalVisible,key :6})
        }
        else if (key == 7){
            this.setState({visible : dic , modalVisible : !this.state.modalVisible,key :7})
        }
        else if (key == 8){
            this.setState({visible : pingpong , modalVisible : !this.state.modalVisible,key :8})
        }
        else if (key == 9){
            this.setState({visible : movie, modalVisible : !this.state.modalVisible,key :9})
        }
        else if (key == 10){
            this.setState({visible : shoes , modalVisible : !this.state.modalVisible,key :10})
        }
        else if (key == 11){
            this.setState({visible : boling , modalVisible : !this.state.modalVisible,key :11})
        }
        // console.log(this.state.key)
        // console.warn('if '+this.state.key)
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
        else if(field == 'Limitedseat'){
            this.setState({ [field]: text});
        }
        else if(field == 'location'){
            this.setState({ [field]: text});
        }       
        }
    
    render(){
        const {height} = Dimensions.get("window")
        if(this.state.loading) return <ActivityIndicator style={{marginTop : height / 3,justifyContent : "center" , alignItems : "center",}} size="large" color="#FFFFFF" />
        // console.warn(this.state.time) 
        const minDate = moment().format('L').split('/')
        console.log(minDate[2]+"-"+minDate[1]+"-" + minDate[0])
        return(
            
            <View style={styles.background}>
          <TouchableHighlight onPress={() => {this.setModalVisible(true); }}>
         
          <Image style={styles.Circle} source={this.state.visible}/>
                </TouchableHighlight> 
                <View>
                
                <Text style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto', marginTop: -3 * vw, fontSize: 3.5 * vw, fontWeight: 'bold' }}>{this.state.Error}</Text> 
                <View  style={{marginLeft:19*vw,marginTop:-15*vw,marginRight: 7*vw,color : 'white',fontSize: 3*vw}}>
                    <TextInput style={{color:"white",marginLeft:5*vw,textAlign:"right"}}
                        autoCorrect={false}
                        underlineColorAndroid="transparent" 
                        onChangeText={(text) => this.onChangeText(text ,'nameac')}
                        placeholder='Fill in the name of activity'>

                    </TextInput>
                </View>
                <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginLeft:24*vw,marginRight:7*vw,marginTop:-9.5*vw}}></View>
                </View>
                
                <View style={styles.back}>
                <Image style={styles.icon1} source={icon} />
                <Text style={{marginLeft:13*vw,marginTop:-7*vw,marginRight: 6*vw,color:'white',fontWeight:"bold",fontSize:4*vw}}>
                
                    By
                </Text>
                 <TextInput style={{marginLeft:20*vw,marginTop:-6*vw,marginRight: 5*vw,color:"white",fontSize:3.5*vw}}
                 autoCorrect={false}
                 underlineColorAndroid="transparent" 
                 onChangeText={(text) => this.onChangeText(text ,'createby')}> 
                </TextInput>
                <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginLeft:20*vw,marginRight:5*vw}}></View>
                </View>

                <View style={styles.backCurrent }>
                <Icon style={styles.iconlo} name="ios-pin" size={SizePX} color="#F59F9F" /> 
                <TextInput underlineColorAndroid="transparent" style={{marginLeft:14*vw,marginTop:-11*vw,marginRight: 5*vw,color:"white",fontSize:3.5*vw}}
                autoCorrect={false}
                onChangeText={(text) => this.onChangeText(text ,'location')}>
                </TextInput>
                <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginLeft:14*vw,marginRight:5*vw}}></View>
                </View>
                <View style={styles.backtime}>
                
                <DatePicker
                    style={{width: 40*vw,height:20*vw,marginLeft:18*vw,marginTop:1.5*vw,}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate={minDate[2]+"-"+minDate[0]+"-" + minDate[1]}
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
                        borderRadius:15,
                        
                        
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                    <Icon style={styles.icontime } name="md-time" size={8*vw} color="#F7E365" />
                    <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginTop:-5*vw,marginLeft:15*vw,marginRight:5*vw}}></View>
                <View style = {{marginTop: 1.5*vw,marginLeft : 'auto', marginRight : 'auto',width : 70*vw,height:7*vw,flexDirection :"row"}}>
                <DatePicker
                    style={{width: 18*vw,marginLeft:12*vw,marginTop:-0.5*vw,flex :1.8}}
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
                           color:"white",
                           backgroundColor:"rgb(51,9,64)",
                           borderRadius:20,
                           height:6*vw,
                         
                       }
                       }}
                    onDateChange={(time => {this.setState({time: time})})}
                />
                <DatePicker
                    style={{width: 18*vw,marginLeft:8*vw,marginTop:-0.5*vw,color:"white",flex:1.8}}
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
                 </View>
                 <View style = {{marginLeft : 'auto', marginRight : 'auto',width : 70*vw,height:20*vw,flexDirection :"row",marginTop :-3*vw}}>
                <Text style={{marginLeft:21*vw,marginTop:2.3*vw,color:"white",fontWeight:"bold"}}>
                    Start
                </Text>
                <Text style={{marginLeft:26*vw,marginTop:2.3*vw,color:"white",fontWeight:"bold"}}>
                    End
                </Text>
               </View>
                </View>

                <View style={styles.backCurrent1}>
                <Icon style={styles.iconcur} name="md-people" size={8*vw} color="#00FFF" />
                <Text style={{marginLeft:14*vw,marginTop:-10*vw,marginRight: 5*vw,fontSize: 4*vw,color: 'white',fontWeight : "bold",} }>
                Current:
                </Text>
                <TextInput  keyboardType = 'numeric' maxLength={2} underlineColorAndroid="transparent" style=
                    {{marginLeft:30*vw,marginTop:-5*vw,marginRight: 20*vw,color:"white",textAlign:"center",backgroundColor : "rgb(51,9,64)",
                      borderRadius:20,width:7*vw,height:5*vw}}
                      onChangeText={(text) => this.onChangeText(text ,'currentseat')}
                      placeholder='-'>  
                </TextInput>

                <Text style={{marginLeft:43*vw,marginTop:-5.5*vw,marginRight: 5*vw,fontSize: 4*vw,color: 'white',fontWeight : "bold",} }>
                Limited Seat:
                </Text>
                <TextInput keyboardType = 'numeric' maxLength={2} underlineColorAndroid="transparent" style=
                    {{marginLeft:68*vw,marginTop:-4.8*vw,marginRight: 20*vw,color:"white",textAlign:"center",backgroundColor : "rgb(51,9,64)",
                      borderRadius:20,width:7*vw,height:5*vw}}
                      onChangeText={(text) => this.onChangeText(text ,'Limitedseat')}
                      placeholder='-'>  
                </TextInput>
                </View>

                <View style={styles.backDetail}>
                
                <Iconja style={{marginLeft:2*vw,marginTop:1*vw}} name="pencil" size={10*vw} color="#00FF00" />
                <Text style={{ marginLeft:14*vw,marginTop:-7*vw,marginRight: 5*vw,fontSize: 4*vw,color: 'white',fontWeight : "bold",}}>
                         Detail:
                </Text>
                <KeyboardAvoidingView behavior="position" enabled>
                <TextInput underlineColorAndroid="transparent" style={{marginLeft:12*vw,marginTop:0.5*vw,marginRight: 5*vw,color:"white"}}
                autoCorrect={false}
                multiline={true}
                onChangeText={(text) => this.onChangeText(text ,'detail')}>
                </TextInput>
               
            
                <View style={{borderBottomWidth:0.5*vw,borderBottomColor:'white',marginLeft:12*vw,marginRight:5*vw}}></View>
                </KeyboardAvoidingView>
                </View>

                <View style={styles.create}>
                <TouchableOpacity onPress={() => this.onCreate()} >
                <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>
                Create
                </Text>
                </TouchableOpacity>
                  
            
        <Modal 
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            
          }}>
        <View style ={styles.background2} >
          <View style ={styles.background} >
          <View style={{marginTop: 22}}>
            <View>
            <View style ={styles.column1} >
              <TouchableHighlight onPress={() => {this.onChangePicture(1); }}>
                 <Image style={styles.Image} source={Ball} />
              </TouchableHighlight>               

            <TouchableOpacity onPress={() => {this.onChangePicture(2); }}>
                <Image style={styles.Image} source={bad} />
                </TouchableOpacity>
              
                <TouchableOpacity onPress={() => {this.onChangePicture(3); }}>
                <Image style={styles.Image} source={luxby} />
                </TouchableOpacity>
                </View>

                <View style ={styles.column1} >
                <TouchableOpacity onPress={() => {this.onChangePicture(4); }}>
                <Image style={styles.Image} source={bas} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.onChangePicture(5); }}>
                <Image style={styles.Image} source={art} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.onChangePicture(6); }}>
                <Image style={styles.Image} source={ball2} />
                </TouchableOpacity>
                 
                </View>

                <View style ={styles.column1} >

                <TouchableOpacity onPress={() => {this.onChangePicture(7); }}>
                 <Image style={styles.Image} source={dic} />
                </TouchableOpacity>

                 <TouchableOpacity onPress={() => {this.onChangePicture(8); }}>
                <Image style={styles.Image} source={pingpong} />
                 </TouchableOpacity>

                  <TouchableOpacity onPress={() => {this.onChangePicture(9); }}>
                  <Image style={styles.Image} source={movie} />
                </TouchableOpacity>

                </View>

                 <View style ={styles.column1} >

                  <TouchableOpacity onPress={() => {this.onChangePicture(10); }}>
                  <Image style={styles.Image} source={shoes} />
                </TouchableOpacity>

                  <TouchableOpacity onPress={() => {this.onChangePicture(11); }}>
                  <Image style={styles.Image} source={boling} />
                </TouchableOpacity>

                </View>

                </View>
                
            </View>
            </View>
            </View>
        
        </Modal>
        {/* <TouchableHighlight onPress={() => {this.setModalVisible(true); }}>
          {<Text style={styles.Circle}></Text>
              
           }

          {/* <Text style={styles.click} > {Clickimgs}</Text> */}
          {/* <Image source={
            this.state.imageSrc == -1 ? "" :
            (this.state.imageSrc == 0 ? ball ) :
            (this.state.imageSrc == 1 ? bad) : 
            (this.state.imageSrc == 2 ? luxby) :
            (this.state.imageSrc == 3 ? bas) :
            (this.state.imageSrc == 4 ? art) :
            (this.state.imageSrc == 5 ? ball2) :
            (this.state.imageSrc == 6 ? dic) :
            (this.state.imageSrc == 7 ? pingpong) :
            (this.state.imageSrc == 8 ? movie) :
            (this.state.imageSrc == 9 ? shoes) :
            (this.state.imageSrc == 10 ? boling) :
            
          } /> */}
        {/* </TouchableHighlight> */} 



        
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
        marginTop : Circle.sizeOfCircle*0.3,
        
           
    },
    background2 : {
        backgroundColor :"rgb(255,174,201)",   
    },
    back : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.2,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,
        height: 13*vw
        
    },
    backCurrent : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.2,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,
        height: 13*vw

        
    },
    backCurrent1 : {
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
        height: 25*vw
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
        
        width :  Circle.sizeOfCircle*1.2,
        height :  Circle.sizeOfCircle*1.2,
        borderRadius : Circle.sizeOfCircle*1.9,
        marginLeft : Circle.sizeOfCircle*0.2,
        marginTop : Circle.sizeOfCircle*0.2,
        borderWidth : Circle.sizeOfCircle*0.07,
        borderColor : "white",
    },
    backtime : {
        backgroundColor : "rgba(223,188,216,0.3)",
        marginTop : Circle.sizeOfCircle*0.2,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginRight : Circle.sizeOfCircle*0.3,
        borderRadius : 20,
        height: 26*vw,
        
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
        width :  Circle.sizeOfCircle*0.6,
        height :  Circle.sizeOfCircle*0.6,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : Circle.sizeOfCircle*0.1,
        marginTop : Circle.sizeOfCircle*0.1,
        
        
    },
    iconlo : {
        width :  Circle.sizeOfCircle*0.8,
        height :  Circle.sizeOfCircle*0.8,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginTop : Circle.sizeOfCircle*0.1,
       
    },
    iconcur : {
        width :  Circle.sizeOfCircle*0.8,
        height :  Circle.sizeOfCircle*0.8,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : Circle.sizeOfCircle*0.3,
        marginTop : Circle.sizeOfCircle*0.1,
       
    },
    icontime : {
        marginTop : -12*vw,
        marginLeft : 4*vw
        
        
    },
   

    click :{
      backgroundColor :"rgb(255,255,255)",
       width : Circle.sizeOfCircle*0.6,
      height : Circle.sizeOfCircle*0.6,
      borderRadius : Circle.borderRadius*1.5,
      color : "white" ,
      fontSize :Circle.sizeOfCircle*0.1*vw,
      marginLeft : Circle.sizeOfCircle*0.2,
    
    },

    column1 : {
        flexDirection: 'row',
    },
     Image : {
        width : Circle.sizeOfCircle*1.4,
        height : Circle.sizeOfCircle*1.4,
        borderWidth : 5,
        borderColor : "white",
        borderRadius : Circle.borderRadius*1.5,
        marginTop : Circle.sizeOfCircle*0.5, 
        marginLeft :Circle.sizeOfCircle*0.4,
        marginBottom :Circle.sizeOfCircle*0.5,
     
    },
    Image2 : {
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

function mapStateToProps(state){
    return {
        _id : state.AuthenticateReducer._id
    }
}
export default connect(mapStateToProps)(CreateEventPage)
