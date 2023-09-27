import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Label = ({ text, style, textStyles }) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}>
      <Text style={{ ...textStyles }}>{text}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
