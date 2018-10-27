import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import EventCard from '../components/Cards/EventCard'
class EventPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        padding :20
    }
})
export default EventPage