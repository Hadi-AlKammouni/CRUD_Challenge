import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextInputField from '../../components/TextInputField';
import PasswordInputField from '../../components/PasswordInputField';

const Register = () => {

  const [name, SetName] = useState('')   
  const [email, SetEmail] = useState('')   
  const [password, setPassword] = useState('')
  
  return (
    <View style={styles.container}>
      <Text>REGISTER HERE</Text>

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
    </View>
  );
  
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});