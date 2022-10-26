import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { showMessage } from "react-native-flash-message";

import TextInputField from '../../components/TextInputField';
import PasswordInputField from '../../components/PasswordInputField';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './styles';

const Register = ({navigation}: {navigation: any}) => {

  const [name, SetName] = useState('')   
  const [email, SetEmail] = useState('')   
  const [password, setPassword] = useState('')

  const register = async () => {
    try {
      const response = await fetch(`http://192.168.0.103:3000/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })

      const data = await response.json();
      if (data.statusCode === 409) {
        showMessage({
          message: `Email already exists.`,
          type: "warning",
        });
      } else {
        showMessage({
          message: `Registered successfully.`,
          type: "success",
        });
        navigation.navigate('Login')
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
        <Animatable.Image animation="bounceIn" duration={3000} source={require('../../assets/register.gif')} style={styles.logo} />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <TextInputField
          label="Name"
          main_icon={require("../../assets/icons8-name-48.png")}
          placeholder="Enter Your Name"
          helper_icon={require("../../assets/icons8-check-64.png")}
          setState={SetName} 
        />
  
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

        {(!name || !email || !password || password.length < 8) 
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
            text="Register"
          />
        :
          <ButtonComponent 
            onPress={() => register()}
            touchable_style={styles.button}
            border_color="#205bb7"
            text_style={styles.text_sign}
            text_color="#FFFFFF"
            text="Register"
          />
        }
  
        <StatusBar style="auto" />
      </Animatable.View>
    </View>
  );
}

export default Register;