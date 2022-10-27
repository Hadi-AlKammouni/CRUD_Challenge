import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const ButtonComponent = (
      { touchable_style, border_color, text_style, text_color, text, onPress }:
      { touchable_style: any, border_color: any, text_style: any, text_color: any, text: any, onPress: any }
    ) => {

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          touchable_style,
          {borderColor:border_color,borderWidth: 1,marginTop: 50}
        ]}
      >
        <Text style={[text_style,{color:text_color}]}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default ButtonComponent;