import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Space } from '../styles/global';
class VerificationForgotPage extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/imgs/dpho4.png')} style={styles.background}>
                <View style={{ backgroundColor: 'rgba(128,0,128,0.8)', height: '100%', width: '100%' }}>
                    <Text style={{ justifyContent: 'center', textAlign: 'center' }}>Login success</Text>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: Space.paddingSize


    },
    background: {
        height: '120%',
        width: '100%',
    },
    Textwhite: {

    }

})
export default VerificationForgotPage