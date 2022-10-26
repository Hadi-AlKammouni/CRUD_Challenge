import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";

import Navigator from './navigations/Navigator';

const App = () => {

  return (
    <NavigationContainer>
      <Navigator/>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;