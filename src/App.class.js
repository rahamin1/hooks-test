import React, { Component } from 'react';
import { YellowBox, View, TouchableOpacity, Text, StyleSheet,
  Alert } from 'react-native';
import _ from 'lodash';

console.warn('In App.js: Disabling yellowbox warning in genymotion');
console.disableYellowBox = true;

export default class App extends Component {
  state = {
    resource: 'none',
    isLoadingComplete: true
  };

  componentDidMount() {
    // The following lines are a workaround
    // in order to stop getting warnings about timer
    // See: https://github.com/firebase/firebase-js-sdk/issues/97#issuecomment-365456531
    YellowBox.ignoreWarnings(['Setting a timer']);
    YellowBox.ignoreWarnings(['Require cycle:']);
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('Setting a timer') <= -1 &&
        message.indexOf('Require cycle:') <= -1) {
        _console.warn(message);
      }
    };
  }

  render() {
    if (!this.state.isLoadingComplete) {
      console.log("App: rendering Loading");
      return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            The Application is Loading...
          </Text>
        </View>
      );
    } else {
      console.log("rendering Provider");
      return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            The Application has been loaded!
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 100,
            alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.setState({ resource: 'posts' })}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Posts
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={() => this.setState({ resource: 'todos' })}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Todos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.buttonText}>
            {this.state.resource}
          </Text>
        </View>
      );
    }
  }

  displayAlert(title = 'No title', body = '') {
    return (
      Alert.alert(
        title, body,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      )
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontSize: 20
  },
  button: {
    backgroundColor: '#a8a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2
  }
});
