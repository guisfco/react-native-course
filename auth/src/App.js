import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBRl5PucIgGnYSqHiaRtqBerDHrct0EQCM',
      authDomain: 'auth-react-native-tutori-dbd5c.firebaseapp.com',
      databaseURL: 'https://auth-react-native-tutori-dbd5c.firebaseio.com',
      projectId: 'auth-react-native-tutori-dbd5c',
      storageBucket: 'auth-react-native-tutori-dbd5c.appspot.com',
      messagingSenderId: '790573668638'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;