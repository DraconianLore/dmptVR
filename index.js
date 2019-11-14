import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Login from './src/login/Login'

export default class dmPT360 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Dungeon Master Player Tracker 
          </Text>
          <Text style={styles.largeTitle}>
            VR Edition
          </Text>
        </View>
        {this.state.loggedIn 
        ? <View> LOGGED IN </View>
        : <Login />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#330000',
    borderColor: '#660000',
    borderWidth: 2,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: 1000

  },
  greeting: {
    textAlign: 'center',
    fontSize: 60,
    color: 'peru'
  },
  largeTitle: {
    fontSize: 96,
    textAlign: 'center',
    color: 'peru'

  }
});

AppRegistry.registerComponent('dmPT360', () => dmPT360);
