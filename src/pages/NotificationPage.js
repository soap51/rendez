import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import NotificationCard from '../components/Cards/NotificationCard'
import { Space } from '../styles/global';
import registerForPushNotificationsAsync from '../utils/pushNotification'
class NotificationPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notification: []
        }
    }
    async componentDidMount(){
        registerForPushNotificationsAsync()
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
      }
      _handleNotification(notification){
        this.setState({notification: notification});
      };
    render(){
        return(
            <View style={styles.container}>
                <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
                 <NotificationCard
                    author="Poramet Thawinkarn"
                    typeNotification="Hajsofhjsfojgsog sgdsojgdsojg sdgojsodjgos"
                    createAt="test"
                />
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        padding : Space.paddingSize/4
    }
})

export default NotificationPage