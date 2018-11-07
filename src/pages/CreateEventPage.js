import React from 'react'
import {View , Text , StyleSheet,TextInput} from 'react-native'
class CreateEventPage extends React.Component{
   
    render(){
        return(
            <View style ={styles.background} >
             <TextInput style ={styles.text1}
       
       onChangeText={(text) => this.setState({text})}

     />
      <TextInput style ={styles.text2}
       
       onChangeText={(text) => this.setState({text})}

     />
      <TextInput style ={styles.text3}
       
       onChangeText={(text) => this.setState({text})}

     />
                
               
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    background : { 
        backgroundColor :"purple",
        marginTop : "5%", 
        marginLeft : "5%",
        marginRight : "5%",
        marginBottom : "5%",
        borderRadius : 20,

    },
    text1 : {
        backgroundColor : "rgba(255,255,255,0.8)", 
            marginTop : "15%", 
            marginLeft : "10%",
            marginRight : "10%",
            borderRadius : 20,
    },
    text2 : {
        backgroundColor : "rgba(255,255,255,0.8)", 
            marginTop : "4%", 
            marginLeft : "10%",
            marginRight : "10%",
            borderRadius : 20,
    },
    text3 : {
        backgroundColor : "rgba(255,255,255,0.8)", 
            marginTop : "4%", 
            marginLeft : "10%",
            marginRight : "10%",
            borderRadius : 20,
    }
   
    
 })

export default CreateEventPage