import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/Home";
import Cart from "../screens/Cart/Cart";
import ProductDetails from "../screens/ProductDetails/ProductDetails";

const RootStack = createStackNavigator();

const User = () => {
  return(
    <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} 
        options={({headerShown: false})}
        />
        <RootStack.Screen name="Cart" component={Cart} 
        options={({headerShown: false})}
        />
        <RootStack.Screen name="ProductDetails" component={ProductDetails} 
        options={({headerShown: false})}
        />
    </RootStack.Navigator>
  )
}

export default User;