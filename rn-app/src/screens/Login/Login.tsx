import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { showMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

import TextInputField from '../../components/TextInputField';
import PasswordInputField from '../../components/PasswordInputField';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './styles';

const Login = ({navigation}: {navigation: any}) => {

  const [email, SetEmail] = useState('')   
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const response = await fetch(`http://192.168.0.106:3000/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const data = await response.json();
      if (data.statusCode === 404) {
        showMessage({
          message: `Wrong email and/or password.`,
          type: "warning",
        });
      } else {
        showMessage({
          message: `Successfully logged in.`,
          type: "success",
        });
        await AsyncStorage.setItem('token',data.token);
        navigation.navigate('Home')
      }
      
    } catch (error) {
      showMessage({
        message: "Something went wrong.",
        type: "danger",
      });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FDBE3B' />
      <View style={styles.header}>
        <Animatable.Image animation="bounceIn" duration={3000} source={require('../../assets/login.gif')} style={styles.logo} />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <TextInputField 
          label="Email" 
          main_icon={require("../../assets/icons8-mail-account-32.png")}
          placeholder="Enter Your Email"
          helper_icon={require("../../assets/icons8-check-64.png")}
          setState={SetEmail}
        />

        <PasswordInputField
          label="Password"
          main_icon={require("../../assets/icons8-lock-32.png")}
          placeholder="Enter 8 char. or more"
          helper_icon1={require("../../assets/icons8-surprise-64.png")}
          helper_icon2={require("../../assets/icons8-closed-eye-64.png")}
          setState={setPassword}
        />

        {(!email || !password || password.length < 8) 
          ?
          <ButtonComponent
            onPress={() => showMessage({
              message: "All fields are required + Password should be >= 8 characters.",
              type: "warning",
            })}
            touchable_style={styles.disable_button}
            border_color="#AAA8A8"
            text_style={styles.text_sign}
            text_color="#FFFFFF"
            text="Log In"
          />
        :
          <ButtonComponent 
            onPress={() => login()}
            touchable_style={styles.button}
            border_color="#205bb7"
            text_style={styles.text_sign}
            text_color="#FFFFFF"
            text="Log In"
          />
        }

        <ButtonComponent 
          onPress={() => navigation.navigate("Register")}
          touchable_style={styles.extra_btn}
          border_color="#205bb7"
          text_style={styles.text_sign}
          text_color="#FFFFFF"
          text="New here? Register"
        />

        <StatusBar style="auto" />
      </Animatable.View>
    </View>
  );
}

export default Login;