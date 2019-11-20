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
        <View style={styles.sectionBox}>

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
        <View style={styles.sectionBox}>

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
        <View style={styles.sectionBox}>

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
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 3000,
    height: 600,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  sectionBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '30%',
    height: '100%',
    margin: 12.5,
    borderRadius: 25,
    padding: 25
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#330000',
    borderColor: '#660000',
    borderWidth: 2,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%'

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
