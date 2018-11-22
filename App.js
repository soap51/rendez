import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter , Route , Switch, BackButton}  from 'react-router-native'
import Page from './src/pages/'
import { Provider } from 'react-redux'
import store from './store'
import LayoutComponent from './src/components/Hocs/LayoutComponent'
import { Permissions, Notifications , Expo } from 'expo';
import GuestComponent from './src/components/Hocs/GuestComponent'
import AuthComponent from './src/components/Hocs/AuthComponent'
console.disableYellowBox = true;
export default class App extends React.Component {
 
  render() {
    return (

      <Provider store={store}>
        <NativeRouter>
          <BackButton>
            <Switch>
              <Route exact path="/account" component={AuthComponent(LayoutComponent(Page.AccountSettingPage))} />
              <Route exact path="/event/:eventId/comment" component={AuthComponent(LayoutComponent(Page.CommentPage)) } />
              <Route exact path="/confirm" component={(Page.ConfirmPage)} />
              <Route exact path="/CreateEventPage" component={AuthComponent(LayoutComponent(Page.CreateEventPage))} />
              <Route exact path="/event/:eventId" component={AuthComponent(LayoutComponent(Page.EventInformationPage))} />
              <Route exact path="/event" component={AuthComponent(LayoutComponent(Page.EventPage))} />
              <Route exact path="/forgot" component={(Page.ForgotPage)} />
              <Route exact path="/" component={GuestComponent(Page.LoginPage)} />
              <Route exact path="/Others" component={AuthComponent(LayoutComponent(Page.OtherPage))} />
              <Route exact path="/Notifications" component={LayoutComponent(Page.NotificationPage)}/>
              <Route exact path="/profile" component={AuthComponent(LayoutComponent(Page.ProfilePage))} />
              <Route exact path="/register" component={Page.RegisterPage} />
              <Route exact path="/verification" component={Page.VerificationForgotPage} />
              <Route exact path="/Home" component={AuthComponent(LayoutComponent(Page.HomePage))} />
              <Route exact path="/LetgoPage"component={Page.LetgoPage} />
            </Switch>
          </BackButton>
        </NativeRouter>
      </Provider>

    );
  }
}

