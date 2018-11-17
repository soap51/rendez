import React from 'react'
import {View , Text , StyleSheet , Alert} from 'react-native'
import EventCard from '../components/Cards/EventCard'
import axios from 'axios'
import setAlert from '../utils/setAlert'
import {DOMAIN} from '../constant/environment'
import { Space  ,Font} from '../styles/global';
import _ from 'lodash'
import {Redirect} from 'react-router-native'
import {connect} from 'react-redux'
class EventPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            eventList : []
        }
        
    }
    componentDidMount(){
        console.log(DOMAIN + "api/event")
        axios.get(DOMAIN + "api/event")
            .then(result=>{
                const data = result.data
                const eventList = data.event
                this.setState({eventList : eventList})
            })
            .catch(err=>{
                console.log(err.response)
                setAlert(this.props.history,400,"Error" , "Something went wrong")
            })
    }
    
    render(){
        if(this.props.confirmationToken == false) return <Redirect to="/confirm" />
        const {eventList} = this.state
        console.log(eventList) 
    
        let Events = eventList && eventList.length != 0 ? eventList.map(data=>
            <EventCard
                id={data._id}
                title={data.eventName}
                enterEventInformation={()=>this.props.history.push("/event/" + data._id)}
                author={data.author}
                location={data.place}
                icon={data.iconType}
                eventDate={data.eventDate}
                eventStartTime={data.startTime}
                eventEndTime={data.endTime}
            />
        )
        :
        <View style={{display : "flex" , alignItems : "center" , padding : 20}}>  
            <Text style={{fontSize : Font.fontSecondary }}>You doesn't have any event</Text>
        </View>
        console.log(Events)
        return(
            <View style={styles.container}>
                {Events}
               
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
       padding : Space.paddingSize
        
       
    }
})
function mapStateToProps(state){
    return {
        confirmationToken : state.AuthenticateReducer.confirmationToken
    }
}
export default connect(mapStateToProps)(EventPage)