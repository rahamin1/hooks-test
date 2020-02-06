import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useResources from './useResources';

// export const ResourceList = (props) => {
const ResourceList = ({ resource }) => { // restructured props

  console.log('In ResourceList. resource: ', resource);
  const resources = useResources(resource);
  //console.log('in ResourceList. resources: ', resources);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>
        {resources.length} items in the {resource} list
      </Text>
      <View style={{ marginTop: 20, marginLeft: 50 }}>
        <FlatList
          data={resources}
          onLayout={() => {}}
          renderItem={({ item }) => {
            return (
              <View style={{ marginTop: 5, marginRight: 20 }}>
                <Text style={{ fontSize: 14 }}>
                  {item.title}
                </Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
          keyboardShouldPersistTaps={'always'}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
          onRefresh={handleRefresh}
          refreshing={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={50}
          style={{ height: 100 }}
          onScroll={handleScroll} />
      </View>
    </View>
  );
}

const handleRefresh = () => {
}

const handleLoadMore = () => {
}

const handleScroll = () => {
}

const renderSeparator = () => {
  return null;
}

const renderFooter = () => {
  return null;
}

export default ResourceList;
