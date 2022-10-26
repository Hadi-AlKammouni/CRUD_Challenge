import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import User from "./User";

const RootStack = createStackNavigator();

const Navigator = () => {  

    const [isLoggedIn, setIsLoggedIn] = useState(null)

    const isToken = async () => {
        try{
            const token_storage = await AsyncStorage.getItem('token');
            setIsLoggedIn(token_storage)
        } catch (error) {
            showMessage({
                message: "Something went wrong.",
                type: "danger",
            });
        }
    }

    useEffect(() => {
        isToken();
    }, []);

    return(
        <RootStack.Navigator screenOptions={{headerShown:false}}>
            {!isLoggedIn ? 
                <>
                <RootStack.Screen name="Register" component={Register} />
                <RootStack.Screen name="Login" component={Login} />
                </>
            :
                <RootStack.Screen name="User" component={User} />
            }
        </RootStack.Navigator>
    )
}

export default Navigator;