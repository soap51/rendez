import React from 'react';
import { StyleSheet, View } from 'react-native';
import { vw } from 'react-native-viewport-units';
import { connect } from 'react-redux';
import { logout } from '../../actions/authenticateAction';
import { Space } from '../../styles/global';
import OptionButton from '../Button/OptionButton';
class OptionCard extends React.Component {
    constructor(props) {

        this.state = {
            notiOption: false,
            feedOption: false
        }
    }
    onNotiChange() {
        this.setState({ notiOption: !this.state.notiOption })
    }
    onFeedChange() {
        this.setState({ feedOption: !this.state.notiOption })
    }
    _onPress() {
        this.props.logout()
        this.props.history.push('/')
    }
    render() {
        const { notiOption, feedOption } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <OptionButton
                        icon="log-out"
                        title="Logout"
                        isHaveSwitch={false}
                        onPress={() => this._onPress()}
                    />
                    {/* <View style={styles.logout}>
                   
                  
                </View> */}
                    {/* <OptionButton
                        icon="ios-notifications-outline"
                        title="Notifications"
                        isHaveSwitch={true}
                        option={notiOption}
                        onValueChange={()=>this.onNotiChange()}
                    />
                    <OptionButton
                        icon="md-browsers"
                        title="Feed"
                        isHaveSwitch={true}
                       
                        
                        onValueChange={()=>this.onFeedChange()}
                        option={feedOption}
                    /> */}
                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',

        justifyContent: "center",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        marginBottom: 20 * vw,
        backgroundColor: "rgb(51,9,64)",
        marginRight: 2 * vw,
        marginLeft: 2 * vw
    },
    subContainer: {
        padding: Space.paddingSize
    },
    logout: {
        padding: Space.paddingSize,
        marginTop: 24 * vw
    }


})
export default connect(null, { logout })(OptionCard)