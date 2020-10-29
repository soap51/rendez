import React from 'react'
import { StyleSheet, View } from 'react-native'
import OptionCard from '../components/Cards/OptionCard'
import { Space } from '../styles/global'
class NotificationPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <OptionCard
                    {...this.props}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: Space.paddingSize,


    }
})
export default NotificationPage