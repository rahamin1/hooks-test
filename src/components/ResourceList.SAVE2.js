import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

// export const ResourceList = (props) => {
export const ResourceList = ({ resource }) => { // restructured props

  const [resources, setResources ] = useState([]);
  const [listHeight, setListHeight] = useState([]);

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
  }, [resource]);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>
        {resources.length} items in the {resource} list
      </Text>
      <View style={{ marginTop: 20, marginLeft: 50 }}>
        <FlatList
          data={resources}
          onLayout={(e) => setListHeight(e.nativeEvent.layout.height)}
          renderItem={({ item }) => {
            return (
              <View style={{ marginTop: 5, marginRight: 20 }}>
                <Text style={{ fontSize: 14 }}>
                  {item.title}
                </Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps={'always'}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
          style={{ height: 100 }}
          onScroll={this.handleScroll} />
      </View>
    </View>
  );
}
