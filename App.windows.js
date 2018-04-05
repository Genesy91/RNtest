/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
  NativeModules
} from 'react-native';
import Testcomponent1 from './src/components/Testcomponent1';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';

export default class App extends Component {

  componentWillMount() {
    if (Platform.OS == "windows") {
      this.setState({ testvar1: 2 });
    }
  }

  componentDidMount() {
    if (Platform.OS == "windows") {
      Linking.addEventListener('url', this._handleOpenURL);
      Linking.getInitialURL().then((url) => {
        if (url) {
        }
      })

      GoogleSignin.configure({
        iosPackageName: 'com.damacchi',
        windowsScopes: 'openid%20email',
        iosClientId: '118723942052-6j36sdtmaiojsunbbmd7948gqv971quf.apps.googleusercontent.com',
      })
      // .then(() => {
      //   console.log('configured')
      // })

      GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          this.setState({ user: user });
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();

      GoogleSignin.currentUserAsync().then((user) => {
        console.log('USER', user);
        this.setState({ user: user });
      }).done();
    }
  }

  componentWillUnmount() {
    if (Platform.OS == "windows") {
      Linking.removeEventListener('url', this._handleOpenURL);
    }
  }

  _handleOpenURL(event) {
    if (Platform.OS == "windows") {
      if (event.url.indexOf(":/oauth2redirect") != -1) {
        console.log("received googlesign auth validation");
        GoogleSignin.processRedirectUrl(event.url);
      }
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <Testcomponent1 />
        <Text style={styles.welcome}>
          Welcome to React Native! TestVar1= {this.state.testvar1}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.windows.js
          </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    backgroundColor: this.x ? '#333333' : '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
