import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from "react-native-flash-message";

import Navigator from './navigations/Navigator';
import CartProvider from './context/Cart';

const App = () => {

  return (
    <CartProvider>
      <NavigationContainer>
        <Navigator/>
        <FlashMessage position="top" />
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;