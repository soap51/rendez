import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { SizePX } from '../../styles/global';
class ClickButton extends React.Component {
    constructor(props) {

        this.state = {
            ImageButton: props.iconType == "plus" ? "md-add" : (props.iconType == "arrow" ? "md-arrow-back" : "ios-menu"),
        }
    }
    render() {
        const { ImageButton } = this.state

        return (
            <TouchableOpacity style={style.container} onPress={() => this.props.onPress()}>
                <Icon name={ImageButton} color="#FFFFFF" size={SizePX} />
            </TouchableOpacity>

        )
    }
}
ClickButton.propTypes = {
    iconType: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "#67306F",
        borderRadius: 10,
        padding: 15,


    }
})

export default ClickButton