import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter , Route , Switch, BackButton}  from 'react-router-native'
import Page from './src/pages/'
import LayoutComponent from './src/components/Hocs/LayoutComponent'
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <BackButton>
          <Switch>
            <Route exact path="/account" component={LayoutComponent(Page.AccountSettingPage)} />
            <Route exact path="/event/:eventId/comment" component={LayoutComponent(Page.CommentPage)} />
            <Route exact path="/confirm" component={LayoutComponent(Page.ConfirmPage)} />
            <Route exact path="/createEvent" component={LayoutComponent(Page.CreateEventPage)} />
            <Route exact path="/event/:eventId" component={LayoutComponent(Page.EventInformationPage)} />
            <Route exact path="/" component={LayoutComponent(Page.EventPage)} />
            <Route exact path="/forgot" component={(Page.ForgotPage)} />
            <Route exact path="/login" component={(Page.LoginPage)} />
            <Route exact path="/Others" component={LayoutComponent(Page.OtherPage)} />
            <Route exact path="/Notifications" component={LayoutComponent(Page.NotificationPage)}/>
            <Route exact path="/profile" component={LayoutComponent(Page.ProfilePage)} />
            <Route exact path="/register" component={Page.RegisterPage} />
            <Route exact path="/verification" component={Page.VerificationForgotPage} />
          </Switch>
        </BackButton>
      </NativeRouter>
    );
  }
}

