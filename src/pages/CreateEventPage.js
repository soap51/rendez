import React from 'react'
import { Space, Circle, Font , SizePX } from '../styles/global';
import {View , Text ,StyleSheet,TextInput} from 'react-native'
import { vw, vh } from 'react-native-viewport-units';
import DatePicker from 'react-native-datepicker'
class CreateEventPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date:"2018-11-7",
            time:"00.00"
        }
        
    }
    
    render(){
        console.warn(this.state.time) 
        return(
            <View style={styles.background}>
                
                <View style = {{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.Circle}></Text>
                    <TextInput underlineColorAndroid="black" style={{color: "white"}}>
                    เป็นควยไร
                    </TextInput>
                </View>
                

                <View style={styles.back1}>
                 <TextInput underlineColorAndroid="black" style={styles.bordertext}>
                    text 1
                </TextInput>
                </View>

                <View style={styles.back1}>
                <TextInput underlineColorAndroid="black" style={styles.bordertext}>
                text 2
                </TextInput>
                </View>

                <View style={styles.backtime}>
                <DatePicker
                    style={{width: 200}}
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
                        left: 0,
                        top: 4,
                        marginLeft: 10
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />

                <DatePicker
                    style={{width: 200,}}
                    time={this.state.time}
                    mode="time"
                    placeholder="select time"
                    format="is24Hour"
                    minTime="00-00-00"
                    maxTime="24-59-59"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 10
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(time) => {this.setState({time: time})}}
                
                />
                
                </View>

                <View style={styles.back1}>
                <TextInput multiline={true} underlineColorAndroid="black" style={styles.bordertext}>
                text 4
                </TextInput>
                </View>

                <View style={styles.back1}>
                <TextInput multiline={true} underlineColorAndroid="black" style={styles.bordertext}>
                text 5 
                </TextInput>
                </View>
                
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    background : {
        backgroundColor : "rgb(51,9,64)",
        borderRadius : 15,
        marginLeft : "5%",
        marginRight : "5%",
        marginTop : "5%"
        
        
    },

    back : {
        backgroundColor : "rgba(255,255,255,0.8)",
        marginTop : "8%",
        marginLeft : "10%",
        marginRight : "10%",
        borderRadius : 20,
    },
    back1 : {
        backgroundColor : "rgba(255,255,255,0.8)",
        marginTop : "4%",
        marginLeft : "10%",
        marginRight : "10%",
        borderRadius : 20,
    },
    bordertext : {
        marginLeft : "5%",
        marginRight : "5%",
        
    },
    Circle : {
        backgroundColor : "rgb(255,255,255)",
        width :  Circle.sizeOfCircle,
        height :  Circle.sizeOfCircle,
        borderRadius : Circle.sizeOfCircle*1.8,
        marginLeft : "3%",
        marginTop : "3%",
    },
    backtime : {
        backgroundColor : "rgba(255,255,255,0.8)",
        marginTop : "4%",
        marginLeft : "10%",
        marginRight : "10%",
        borderRadius : 20,
        
    }
    
})
export default CreateEventPage