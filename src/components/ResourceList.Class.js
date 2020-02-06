import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class ResourceList extends Component {
  state = {
    resources: []
  };

  async componentDidMount() {
    console.log('ResourceList/componentDidMount calling axios. path:',
      `https://jsonplaceholder.typicode.com/${this.props.resource}`);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    console.log(response);
    this.setState({ resources: response.data })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      console.log('ResourceList/componentDidUpdate calling axios. path:',
        `https://jsonplaceholder.typicode.com/${this.props.resource}`);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
      console.log(response.data);
      this.setState({ resources: response.data });
    }
  }

  render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>
            {this.state.resources.length}
          </Text>
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
