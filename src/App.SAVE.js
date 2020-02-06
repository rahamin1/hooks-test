import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import store from './src/store/store';
import { YellowBox, View, Text } from 'react-native';
import _ from 'lodash';

import firebaseInit from './src/services/firebaseInit';

// import reducers from 'mypet/reducers';
import AppNavigator from './src/navigation/AppNavigator';
import Loading from "./src/components/Loading/Loading";

console.warn('In App.js: Disabling yellowbox warning in genymotion');
console.disableYellowBox = true;

let persistor = persistStore(store);

const onBeforeLift = () => {
  // take some action before the gate lifts
  // (before rendering AppNavigator)

  // this.purgeReduxStore(); // for testing - in case we want to initialize
};

export default class App extends Component {
  state = {
    isLoadingComplete: true
  };

  componentDidMount() {
    firebaseInit();
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

  // The following is for testing, when we want to start fresh
  purgeReduxStore() {
    console.error("Purging redux store - when we want to start fresh during testing");
    persistor.purge();
  }

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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
        <Provider store={store}>
            {/* }{Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
            {/* console.log("rendering AppNavigator") */}
          <PersistGate
            loading={<Loading/>}
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async() => {
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
*/
