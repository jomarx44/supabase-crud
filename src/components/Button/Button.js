import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Label from '../Label/Label';

const Button = ({ onPress, text, buttonStyle, textStyles }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...buttonStyle }}>
      <Label text={text} textStyles={textStyles} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
