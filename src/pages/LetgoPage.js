import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import DFD from '../../assets/icon/DSD.png';
import tudpai from '../../assets/imgs/tudpai.jpg';
import { verifySuccess } from '../actions/authenticateAction';
import { Circle } from '../styles/global';
class LetgoPage extends React.Component {
    verify() {

        this.props.history.push('/')
    }
    render() {
        return (
            <ImageBackground source={DFD} style={{ width: '100%', height: "100%" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(51,9,64,0.8)", flex: 1, }}>
                    <TouchableOpacity onPress={() => this.verify()} >
                        <Image style={styles.imgs} source={tudpai} />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 45, marginTop: "30%" }}>
                        Let's get start!!!
             </Text>

                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({

    imgs: {
        width: Circle.sizeOfCircle * 2,
        height: Circle.sizeOfCircle * 2,
        borderRadius: Circle.sizeOfCircle,
        marginTop: "35%"

    }



})

export default connect(null, { verifySuccess })(LetgoPage)