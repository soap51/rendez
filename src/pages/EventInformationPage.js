import React from 'react'
import {View , Text , ScrollView } from 'react-native'
import EventInformationCard from '../components/Cards/EventInformationCard'
import axios from 'axios'
import {Font, SizePX , Circle, Space} from '../styles/global'
import _ from 'lodash'
class EventInformationPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event : {}
        }
    }
    componentDidMount(){
        // axios
        //     .then(result=>{

        //     })
        //     .catch(err=>{

        //     })
    }
    render(){
        const {event} = this.state
       
        const Information = ()=> _.isEmpty(event) ? 
            <EventInformationCard
                {...this.props}
                id={event.id}
                author={event.author}
                title={event.title}
                location={event.location}
                icon={event.icon}
                eventDate={event.eventDate}
                eventStartTime={event.eventStartTime}
                eventEndTime={event.eventEndTime}
                currentSeat={event.currentSeat}
                limitedSeat={event.limitedSeat}
                detail={event.detail}
            />
            :
            <View style={{display : "flex" , alignItems : "center" , padding : 20}}>  
                <Text style={{fontSize : Font.fontSecondary }}>Empty Event</Text>
            </View>
            console.log(Information)
        return(
            <ScrollView style={{padding : Space.paddingSize}}>
                <Information/>
            </ScrollView>
        )
    }
}

export default EventInformationPage