import React from 'react'
import {View , Text , StyleSheet , Dimensions ,Image ,ActivityIndicator} from 'react-native'
import { Space, Circle, Font , SizePX } from '../styles/global';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
import female from '../../assets/imgs/woman.png'
import male from '../../assets/imgs/man.png'
import Icon from "react-native-vector-icons/Ionicons";
import FilterEventCard from '../components/Cards/FilterEventCard'
import axios from 'axios'
import HistoryCard from '../components/Cards/HistoryCard'
import { DOMAIN } from '../constant/environment';
import setAlert from '../utils/setAlert'
import {connect} from 'react-redux'
class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            age : 0,
            fullName : "",
            historys : [],
            author : '',
            email : '',
            sex : "",
            typeActivity : 1,
            loading : true,
            loadingActivity : false
        }
    }
    _onChangeActivity(typeActivity){
        this.setState({loadingActivity : true})
        axios.post(DOMAIN + "api/user" , {userId : this.props._id , typeEvent : typeActivity})
        .then(response=>{
            console.log(response)
            const data = response.data
            const result = data.result
           
            if(typeActivity == 1){
                const historys = result.myCreateEvent
                this.setState({historys , typeActivity})
            }else if(typeActivity == 0){
                const historys = result.myJoinEvent
                this.setState({historys , typeActivity})
            }
            this.setState({loadingActivity : false})
        })
        .catch(err=>{
            console.log(err.response)
            setAlert(this.props.history , 400 , "Error" , "Can't change event")
            this.setState({loading : false})
        })
    }
    
    componentDidMount(){
        axios.post(DOMAIN + "api/user" , {userId : this.props._id , typeEvent : this.state.typeActivity})
            .then(response=>{
                this.setState({loading:false})
                console.log(response)
                const data = response.data
                const result = data.result
                if(this.state.typeActivity == 1){
                    const historys = result.myCreateEvent
                    this.setState({historys})
                }else if(this.state.typeActivity == 0){
                    const historys = result.myJoinEvent
                    this.setState({historys , })
                }
                this.setState({sex : result.sex , age : result.age , email : result.email, fullName : result.fullName , loading : false})
            })
            .catch(err=>{
                console.log(err.response)
                setAlert(this.props.history , 400 , "Error" , "Can't change event")
                this.setState({loading : false})
            })
    }
    render(){
        const {width , height} = Dimensions.get('window')
     
        if(this.state.loading) return <ActivityIndicator style={{marginTop : height / 3,justifyContent : "center" , alignItems : "center"}} size="large" color="#ffffff" />
        const {age ,fullName, author , email ,sex, typeActivity,typeActivity2 , historys} = this.state 
        console.log(historys)
        const history = historys && historys.length != 0 ? historys.map(data=>
            <HistoryCard 
                eventName={data.eventName}
                iconType={data.iconType}
                eventDate={data.eventDate}
                goToEventPage={()=> this.props.history.push("/event/" + data._id)}
                startTime={data.startTime}
                endTime={data.endTime}
                place={data.place}
            />
        )
        :
        <View><Text></Text></View>
        
        return(
            <View style={styles.container}>
                <View style={{
                    borderRadius : 17,
                    backgroundColor : "rgb(51,9,64)",
                    minHeight : height /1.4,
                    padding : Space.paddingSize,
                }}>
                    <View style={styles.infoBoard}>
                        <View style={{
                            flexDirection : "row",
                            justifyContent : "flex-end",
                            alignItems : "center",
                            
                        }}>
                    
                            <Image style={styles.imageContainer} source={sex == "M" ? male : female} />
                        </View>
                        <View style={styles.textInfoContainer}>
                            <Text style={{
                                fontSize : Font.fontHeader / 2,
                                color : 'white',
                                fontWeight : "bold",
                                textAlign : "right",

                            }}>{fullName}</Text>
                              <Text style={{
                                fontSize : Font.fontHeader / 2,
                                color : 'white',
                                fontWeight : "bold",
                                textAlign : "right",

                            }}>{email}</Text>
                         
                            <View style={{
                                flexDirection : "row",
                                flexWrap :"nowrap",
                                justifyContent : "flex-end",
                                
                            }}> 
                                <View style={{
                                    padding : Space.paddingSize/3
                                }}>
                                    <Icon name={sex == "M"? "md-male" : "md-female"} size={SizePX} color="#3CCAF6" />
                                </View>
                                <View style={{
                                    justifyContent : "center",
                                    alignItems : "center"
                                }}>
                                    <Text style={{
                                        
                                           fontSize : Font.fontSecondary / 1.5,
                                           color : 'white',
                                           fontWeight : "bold",
                                           textAlign : "right"
                                    }}>Age : {age ? age : ""}</Text>
                                </View>
                               
                            </View>
                         
                        </View>
                       
                    </View>
                    <View style={{
                        margin : Space.marginSize
                    }}>
                    
                        <FilterEventCard 
                            typeActivity={typeActivity}
                            _onChangeActivity={(id)=>this._onChangeActivity(id)}
                        />
                        
                    {
                        !this.state.loadingActivity ? 
                        <View>
                            {history}
                        </View>
                        :
                        <ActivityIndicator style={{justifyContent : "center" , alignItems : "center"}} size="large" color="#ffffff" />
                    }
                    
                </View>
            </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container : {
        padding : Space.paddingSize,
        
        
    },
    join : {
        borderColor :"rgb(245,145,145)", 
        borderWidth : 0.1,
        width : Circle.sizeOfCircle*3,
        height : Circle.sizeOfCircle*1,
        backgroundColor :"rgb(245,145,145)", 
        borderRadius : Circle.borderRadius*0.1,
    },
    infoBoard : {
        flexDirection : 'row',
        justifyContent : "space-around",
        
       
    },
    imageContainer: {
        width : Circle.sizeOfCircle*1.5,
        height : Circle.sizeOfCircle*1.5,
        borderWidth : 5,
        borderColor : "white",
        borderRadius : Circle.borderRadius*1.5,
     
    },
    textInfoContainer :{
        flexWrap : "nowrap",
      
    }
   
})
function mapStateToProps(state){
    console.log(state)
    return {
        _id : state.AuthenticateReducer._id
    }
}
export default connect(mapStateToProps)(HomePage)