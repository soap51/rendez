import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import NotificationCard from '../components/Cards/NotificationCard'
import { Space } from '../styles/global';
class NotificationPage extends React.Component{
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