import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { store } from './resources/store';
import { Provider } from 'react-redux';

import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';

StatusBar.setBarStyle('light-content');

// Set navigation screens and headerbar colours
const RootNavigator = StackNavigator({
  Home: ListScreen,
  Details: DetailsScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#bb1919'
    },
    headerTintColor: '#FFF'
  }
});


const App = () => (
  <Provider store={ store }>
    <RootNavigator />
  </Provider>
);

export default App;
