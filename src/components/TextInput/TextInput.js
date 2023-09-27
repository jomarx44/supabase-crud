import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputText = ({ onChange, value, placeholder, secure = false }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={(txt) => onChange(txt)}
      value={value}
      placeholderTextColor="#808080"
      style={styles.textInput}
      secureTextEntry={secure}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
});
