import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-360';



export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      register: false,
      errorMessage: false,
      serverOnline: false
    }
  }
  buttonColor(active) {
    return (
      {
        backgroundColor: active ? '#003300' : '#006600'
      }
    )
}

render() {
  return (
    <View style={styles.loginContainer}>
      <View>
        <View style={[styles.sectionButton, this.buttonColor(!this.state.register)]}>
          <Text style={styles.buttonText}>
            LOGIN
            </Text>
        </View>
      </View>
      <View>
        <View style={[styles.sectionButton, this.buttonColor(this.state.register)]}>
          <Text style={styles.buttonText}>
            REGISTER
            </Text>
        </View>
      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 2,
    backgroundColor: '#330000',
    borderColor: '#660000',
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionButton: {
    padding: 10,
    alignSelf: 'center',
    borderRadius: 20,
    margin: 2,
  },
  buttonText: {
    color: 'peru'
  }
});