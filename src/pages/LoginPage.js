import React from 'react'
import {View , Text ,StyleSheet,Button,TouchableOpacity} from 'react-native'
class LoginPage extends React.Component{
    nextpages() {
        this.props.history.push("/home")
    }
    render(){
        return(
            <TouchableOpacity>
            <View  style={styles.peetttt}>
                <Text >
                    This is LoginPage
                </Text>
                <Text>
                    duvhfdohvlsdhl
                </Text>
            </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({

    peetttt :{
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'50%',
    }
})

export default LoginPage