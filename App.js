import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter , Route , Switch} from 'react-router-native'
import Page from './src/pages/'
import LayoutComponent from './src/components/Hocs/LayoutComponent'
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/account" component={Page.AccountSettingPage} />
          <Route exact path="/event/:eventId/comment" component={Page.CommentPage} />
          <Route exact path="/confirm" component={Page.ConfirmPage} />
          <Route exact path="/createEvent" component={Page.CreateEventPage} />
          <Route exact path="/event/:eventId" component={Page.EventInformationPage} />
          <Route exact path="/" component={LayoutComponent(Page.EventPage)} />
          <Route exact path="/forgot" component={Page.ForgotPage} />
          <Route exact path="/login" component={Page.LoginPage} />
          <Route exact path="/notification" component={Page.NotificationPage} />
          <Route exact path="/profile" component={Page.ProfilePage} />
          <Route exact path="/register" component={Page.RegisterPage} />
          <Route exact path="/verification" component={Page.VerificationForgotPage} />
        </Switch>
      </NativeRouter>
    );
  }
}

