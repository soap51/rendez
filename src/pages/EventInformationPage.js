import React from 'react'
import {View , Text , ScrollView,StyleSheet,Image , ActivityIndicator } from 'react-native'
import EventInformationCard from '../components/Cards/EventInformationCard'
import axios from 'axios'
import {Font, SizePX , Circle, Space} from '../styles/global'
import _ from 'lodash'
import CreateEventPage from '../pages/CreateEventPage'
import { DOMAIN } from '../constant/environment';
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
        
        axios.get(DOMAIN + "api/event/" + this.props.match.params.eventId)
            .then(result=>{
                const data = result.data
                this.setState({event : data , loading : false})
            })
            .catch(err=>{
                
            })
    }
    render(){
        const {event , loading} = this.state
        if(this.state.loading) return <ActivityIndicator style={{justifyContent : "center" , alignItems : "center"}} size="large" color="#0000ff" />
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