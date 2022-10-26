import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register/Register";

const RootStack = createStackNavigator();

const Navigator = () => {  

    return(
        <RootStack.Navigator screenOptions={{headerShown:false}}>
            <RootStack.Screen name="Register" component={Register} />
            <RootStack.Screen name="Login" component={Login} />
        </RootStack.Navigator>
    )
}

export default Navigator;