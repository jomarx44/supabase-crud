import React from 'react';
import { StyleSheet, View } from 'react-native';

const Wrapper = (props) => {
  return <View style={{ ...styles.container, ...props.style }}>{props.children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 12 },
});
