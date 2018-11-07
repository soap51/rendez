import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter , Route , Switch, BackButton}  from 'react-router-native'
import Page from './src/pages/'
import { Provider } from 'react-redux'
import store from './store'
import LayoutComponent from './src/components/Hocs/LayoutComponent'
import { Permissions, Notifications } from 'expo';
export default class App extends React.Component {
  _test(){
    Permissions.getAsync(
      Permissions.NOTIFICATIONS
    ).then(status=>{
      console.log(status)
    }).catch(err=>{
      console.log(err)
    })
    Expo.Notifications.getExpoPushTokenAsync()
    .then(token=>console.log(token))
    .catch(err=>{
      console.log(err)
    })
  
  }
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <BackButton>
            <Switch>
              <Route exact path="/account" component={LayoutComponent(Page.AccountSettingPage)} />
              <Route exact path="/event/:eventId/comment" component={LayoutComponent(Page.CommentPage)} />
              <Route exact path="/confirm" component={LayoutComponent(Page.ConfirmPage)} />
              <Route exact path="/CreateEventPage" component={LayoutComponent(Page.CreateEventPage)} />
              <Route exact path="/event/:eventId" component={LayoutComponent(Page.EventInformationPage)} />
              <Route exact path="/event" component={LayoutComponent(Page.EventPage)} />
              <Route exact path="/forgot" component={(Page.ForgotPage)} />
              <Route exact path="/ffdsfs" component={(Page.LoginPage)} />
              <Route exact path="/Others" component={LayoutComponent(Page.OtherPage)} />
              <Route exact path="/Notifications" component={LayoutComponent(Page.NotificationPage)}/>
              <Route exact path="/profile" component={LayoutComponent(Page.ProfilePage)} />
              <Route exact path="/register" component={Page.RegisterPage} />
              <Route exact path="/verification" component={Page.VerificationForgotPage} />
              <Route exact path="/home" component={LayoutComponent(Page.HomePage)} />
              <Route exact path="/" component={LayoutComponent(Page.BuildingPage)} />
            </Switch>
          </BackButton>
        </NativeRouter>
      </Provider>
    );
  }
}

