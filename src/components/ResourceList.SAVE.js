import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

// export const ResourceList = (props) => {
export const ResourceList = ({ resource }) => { // restructured props
  const [resources, setResources ] = useState([]);

  const fetchResource = async(resource) => {
    console.log('+++ ResourceList/fetchResource calling axios. path:',
      `https://jsonplaceholder.typicode.com/${resource}`);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    console.log(response);
    setResources(response.data);
  }

  useEffect(() => {
    console.log('--- ResourceList/useEffect. resource: ', resource);
    fetchResource(resource);
  }, [resource]); // [] will invoke the app once ('componentDidMount')

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>
        {resources.length}
      </Text>
    </View>
  );
}
