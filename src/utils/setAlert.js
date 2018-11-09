import {Alert} from 'react-native'
export default function AlertError(history,status,title ,description){
    if(status == 400){
        Alert.alert(
            title , 
            description , 
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],    
        )
        // history.push('/login')
    }
    
}