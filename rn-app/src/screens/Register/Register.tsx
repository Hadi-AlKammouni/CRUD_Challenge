import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import TextInputField from '../../components/TextInputField';
import PasswordInputField from '../../components/PasswordInputField';
import styles from './styles';

const Register = () => {

  const [name, SetName] = useState('')   
  const [email, SetEmail] = useState('')   
  const [password, setPassword] = useState('')
  
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
          helper_icon={require("../../assets/icons8-checkmark-32.png")}
          setState={SetName} 
          margin={undefined}
        />
  
        <TextInputField 
          label="Email" 
          main_icon={require("../../assets/icons8-mail-account-32.png")}
          placeholder="Enter Your Email"
          helper_icon={require("../../assets/icons8-checkmark-32.png")}
          setState={SetEmail}
          margin={undefined}
        />
  
        <PasswordInputField
          label="Password"
          main_icon={require("../../assets/icons8-lock-32.png")}
          placeholder="Enter Your Password"
          helper_icon1={require("../../assets/icons8-eye-32.png")}
          helper_icon2={require("../../assets/icons8-closed-eye-32.png")}
          setState={setPassword}
        />
  
        <StatusBar style="auto" />
      </Animatable.View>
    </View>
  );
}

export default Register;