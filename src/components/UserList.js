import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useResources from './useResources';

// export const ResourceList = (props) => {
export const UserList = () => { // restructured props

  console.log('In UserList.');
  const users = useResources('users');
  console.log('in UserList. users: ', users);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '500' }}>
        {users.length} items in the users list
      </Text>
      <View style={{ marginTop: 20, marginLeft: 50 }}>
        <FlatList
          data={users}
          onLayout={() => {}}
          renderItem={({ item }) => {
            return (
              <View style={{ marginTop: 5, marginRight: 20 }}>
                <Text style={{ fontSize: 14 }}>
                  {item.name}
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

export default UserList;
