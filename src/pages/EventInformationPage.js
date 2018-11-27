import React from 'react'
import {View , Text , ScrollView,StyleSheet,Image , ActivityIndicator , Dimensions } from 'react-native'
import EventInformationCard from '../components/Cards/EventInformationCard'
import axios from 'axios'
import {Font, SizePX , Circle, Space} from '../styles/global'
import _ from 'lodash'
import CreateEventPage from '../pages/CreateEventPage'
import { DOMAIN } from '../constant/environment';
import setAlert from '../utils/setAlert'
class EventInformationPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event : {},
            error : "",
            loading : true
        }
    }
    componentDidMount(){
        console.log(DOMAIN)
        axios.get(DOMAIN + "api/event/" + this.props.match.params.eventId)
            .then(result=>{
                const data = result.data
                this.setState({event : data , loading : false})
            })
            .catch(err=>{
                this.setState({loading : false})
                setAlert(this.props.history , 400 , "Network Error" , "Application can't fetch data")
            })
    }
    _fetchAPI(_id){
        axios.get(DOMAIN + "api/event/" + _id)
        .then(result=>{
            const data = result.data
            this.setState({event : data , loading : false})
        })
        .catch(err=>{
            this.setState({loading : false})
            setAlert(this.props.history , 400 , "Network Error" , "Application can't fetch data")
        })
    }
    render(){
        const {height} = Dimensions.get('window')
        const {event , loading} = this.state
        if(this.state.loading) return <ActivityIndicator style={{marginTop : height / 3,justifyContent : "center" , alignItems : "center"}} size="large" color="#0000ff" />
        const Information = event  ?
            
            <EventInformationCard
                {...this.props}
                id={event._id}
                author={event.author}
                title={event.eventName}
                location={event.place}
                icon={event.iconType}
                eventDate={event.eventDate}
                eventStartTime={event.startTime}
                eventEndTime={event.endTime}
                currentSeat={event.currentSeat}
                limitedSeat={event.totalSeat}
                detail={event.detail}
                _fetchAPI={()=>this._fetchAPI(event._id)}
            />
            :
            <View style={{display : "flex" , alignItems : "center" , padding : 20}}>  
                <Text>Empty Event</Text>
            </View>
            
            console.log(Information)
        return(
            
            <ScrollView style={{padding : Space.paddingSize}}>
                {Information}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    
})

export default EventInformationPage