import React, { useState } from 'react';
import { YellowBox, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import { ResourceList } from './components/ResourceList';

console.warn('In App.js: Disabling yellowbox warning in genymotion');
console.disableYellowBox = true;

export const App = () => {

  const [resource, setResource] = useState('posts');
  const [isLoadingComplete, setIsLoadingComplete] = useState(true);

    if (!isLoadingComplete) {
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
            <TouchableOpacity onPress={() => setResource('posts')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Posts
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={() => setResource('todos')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Todos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ResourceList resource={resource} />
        </View>
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
