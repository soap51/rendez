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
    else if(status == 401){
        Alert.alert(
            title , 
            description ,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed'),}
            ],
        )
        // history.push('/login)
    }
    else if(status == 404){
        Alert.alert(
            title , 
            description ,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed'),}
            ],
        )
        // history.push('/login)
    }
    
}