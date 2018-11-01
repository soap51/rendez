import React from 'react'
import {View , Text , StyleSheet , Alert} from 'react-native'
import EventCard from '../components/Cards/EventCard'
import axios from 'axios'
import setAlert from '../utils/setAlert'
import {DOMAIN} from '../constant/environment'
import { Space  ,Font} from '../styles/global';
import _ from 'lodash'
class EventPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            eventList : []
        }
        
    }
    componentDidMount(){
        // axios.get(DOMAIN + "")
        //     .then(result=>{
        //         const eventList = result.eventList
        //         this.setState({eventList : eventList})
        //     })
        //     .catch(err=>{
        //         setAlert(this.props.history,400,"Error" , "Something went wrong")
        //     })
    }
    
    render(){
        const {eventList} = this.state
        let Events =()=> _.isEmpty(eventList) ? eventList.map(data=>{
            <EventCard
                id={data.id}
                title={data.title}
                enterEventInformation={()=>this.props.history.push("/event/" + data.id)}
                author={data.author}
                location={data.location}
                icon={data.icon}
                eventStart={data.eventStart}
                eventStartTime={data.eventStartTime}
                eventEndTime={data.eventEndTime}
            />
        })
        :
        <View style={{display : "flex" , alignItems : "center" , padding : 20}}>  
            <Text style={{fontSize : Font.fontSecondary }}>You doesn't have any event</Text>
        </View>
        
        return(
            <View style={styles.container}>
                <EventCard
                  id={"data.id"}
                  title={"data.title"}
                  enterEventInformation={()=>this.props.history.push("/event/" + 1)}
                  author={"data.author"}
                  location={"data.location"}
                  icon={"data.icon"}
                  eventStart={"data.eventStart"}
                  eventStartTime={"data.eventStartTime"}
                  eventEndTime={"data.eventEndTime"}
                
            />
               
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
       padding : Space.paddingSize
        
       
    }
})
export default EventPage