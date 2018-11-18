import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import {Space} from '../styles/global'
import OptionCard from '../components/Cards/OptionCard'
class NotificationPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <OptionCard 
                    {...this.props}
                />
               
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        padding :Space.paddingSize,
        
       
    }
})
export default NotificationPage