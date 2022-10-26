import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from "./styles";

const TextInputField = (
        { label, main_icon, placeholder, helper_icon, setState }: 
        { label: String, main_icon: any, placeholder: any, helper_icon: any, setState: any }
    ) => {

    const [data,setdata] = useState({
        input: '',
        check_text_input_change: false,
    })
    
    const InputChange = (val: string) => {
        setState(val)
        if( val.length !== 0){
          setdata({...data, input: val, check_text_input_change: true})
        } else{
          setdata({...data, input: val, check_text_input_change: false})    
        }
    }

    return (
      <>
      <Text style={[styles.text_footer, {marginTop: 15}]}>{label}</Text>
      <View style={styles.action}>
        <Image 
          source={main_icon}
          resizeMode='contain'
          style={{width:35,height:35}}
        />
        <TextInput 
          placeholder={placeholder} 
          style={styles.text_input}
          autoCapitalize="none"
          onChangeText={(val) => InputChange(val)}
        />
        {data.check_text_input_change ?
        <Animatable.View animation="bounceIn">
          <Image 
            source={helper_icon}
            resizeMode='contain'
            style={{width:25,height:35}}
          />
        </Animatable.View>
        : null}    
      </View>
      </>
    );
}

export default TextInputField;