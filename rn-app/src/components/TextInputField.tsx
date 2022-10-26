import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

const TextInputField = (
        { label, main_icon, placeholder, helper_icon, margin, setState }: 
        { label: String, main_icon: any, placeholder: any, helper_icon: any, margin: String, setState: any }
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
      <Text>{label}</Text>
      <View>
        <Image 
          source={main_icon}
          resizeMode='contain'
          style={{width:35,height:35}}
        />
        <TextInput 
          placeholder={placeholder} 
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