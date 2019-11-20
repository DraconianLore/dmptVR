import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  VrButton
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
  test() {
    console.log('PRESSED')
  }

  render() {
    return (
      <View style={styles.loginContainer}>
          <VrButton onClick={this.test} id='Login'>
            <View style={[styles.sectionButton, this.buttonColor(!this.state.register)]}>
              <Text style={styles.buttonText}>
                LOGIN
            </Text>
            </View>
          </VrButton>
        <VrButton>
          <View style={[styles.sectionButton, this.buttonColor(this.state.register)]}>
            <Text style={styles.buttonText} >
              REGISTER
            </Text>
          </View>
        </VrButton>
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
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green'
  }
});