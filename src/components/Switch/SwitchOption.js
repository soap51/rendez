import PropTypes from 'prop-types'
import React from 'react'
import { Switch } from 'react-native'
class SwitchOption extends React.Component {
    constructor(props) {

        this.state = {
            thumbTintColor: "#E7E7E7",
            value: false,
            trackColor: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            thumbTintColor: nextProps.thumbTintColor,
            trackColor: nextProps.trackColor
        })
    }
    render() {
        const { value, thumbTintColor, trackColor } = this.state
        return (
            <Switch
                value={value}
                thumbTintColor={thumbTintColor}

                trackColor={trackColor}
                onValueChange={() => this.props.onValueChange()}
            />
        )
    }
}
SwitchOption.propTypes = {
    value: PropTypes.bool.isRequired,
    thumbTintColor: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    trackColor: PropTypes.object.isRequired
}
export default SwitchOption