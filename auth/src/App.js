import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBRl5PucIgGnYSqHiaRtqBerDHrct0EQCM',
      authDomain: 'auth-react-native-tutori-dbd5c.firebaseapp.com',
      databaseURL: 'https://auth-react-native-tutori-dbd5c.firebaseio.com',
      projectId: 'auth-react-native-tutori-dbd5c',
      storageBucket: 'auth-react-native-tutori-dbd5c.appspot.com',
      messagingSenderId: '790573668638'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
              </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;