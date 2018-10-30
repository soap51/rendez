import React from 'react'
import {View , Text , StyleSheet , Alert} from 'react-native'
import EventCard from '../components/Cards/EventCard'
import axios from 'axios'
import setAlert from '../utils/setAlert'
import {DOMAIN} from '../constant/environment'
class EventPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            eventList : []
        }
        
    }
    componentDidMount(){
        axios.get(DOMAIN + "")
            .then(result=>{
                const eventList = result.eventList
                this.setState({eventList : eventList})
            })
            .catch(err=>{
                setAlert(this.props.history,400,"Error" , "Something went wrong")
            })
    }
    render(){
        return(
            <View style={styles.container}>
                <EventCard
                    
                />
               
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
       
        
       
    }
})
export default EventPage