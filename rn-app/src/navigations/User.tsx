import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/home";
import Cart from "../screens/Cart/Cart";

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
    </RootStack.Navigator>
  )
}

export default User;