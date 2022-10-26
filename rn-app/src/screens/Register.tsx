import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextInputField from '../components/TextInputField';

const Register = () => {

  const [name, SetName] = useState('')   
    
  return (
    <View style={styles.container}>
      <Text>REGISTER HERE</Text>
      <TextInputField
        label="Name"
        main_icon={require("../assets/icons8-name-48.png")}
        placeholder="Enter Your Name"
        helper_icon={require("../assets/icons8-checkmark-32.png")}
        setState={SetName} 
        margin={undefined}
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