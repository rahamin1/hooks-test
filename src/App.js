import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ResourceList from './components/ResourceList';
import UserList from './components/UserList';

console.warn('In App.js: Disabling yellowbox warning in genymotion');
console.disableYellowBox = true;

export const App = () => {

  const [resource, setResource] = useState('todos');

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
      <View style={{ flexDirection: 'row', marginTop: 0,
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
        <View style={{ width: 20 }} />
        <TouchableOpacity onPress={() => setResource('users')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Users
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      { resource !== 'users' ?
        <ResourceList resource={resource} /> :
        <UserList />
      }
    </View>
  );
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
