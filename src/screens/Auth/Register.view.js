import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, InputText, Label, Wrapper } from '../../components';
import { registerActions } from '../../services/action';
import { formDetails } from '../../utils/utils.js';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isRegistered, isRegisteredError } = useSelector((state) => state.AppReducer);
  const [isTextInput, setTextInput] = useState(formDetails);
  const [isRegisterPressed, setRegisterPressed] = useState(false);

  useEffect(() => {
    if (isRegisterPressed) {
      if (isRegistered) {
        Alert.alert('Success!', 'Account added!');
        navigation.navigate('Login');
      } else if (isRegisteredError) {
        Alert.alert('Warning!', 'Please use different username');
        setTextInput(formDetails);
      }
    }
  }, [isRegistered, isRegisteredError]);

  const handleRegister = () => {
    const isInvalid = isTextInput.some((item) => item.value === '');
    if (isInvalid) {
      Alert.alert('Warning!', 'Please input your data.');
    } else {
      setRegisterPressed(true);
      const usersData = isTextInput.map((val, idx) => {
        return val.value;
      });
      const params = {
        name: `${usersData[0]}, ${usersData[1]} ${usersData[2]}`,
        username: usersData[3],
        password: usersData[4],
      };
      dispatch(registerActions(params));
    }
  };
  const onChange = (id, txt) => {
    setTextInput((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value: txt } : input))
    );
  };
  return (
    <Wrapper style={styles.wrapper}>
      <Label text="Sign up" style={styles.label} textStyles={styles.textLabel} />
      <View>
        {isTextInput.map((val, idx) => (
          <InputText
            key={val.id}
            onChange={(txt) => {
              onChange(val.id, txt);
            }}
            value={val.value}
            placeholder={val.placeHolder}
            secure={val.secure}
          />
        ))}
      </View>
      <View>
        <Button
          onPress={() => {
            handleRegister();
          }}
          text="Register"
          buttonStyle={styles.button}
        />
      </View>
    </Wrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  textLabel: { fontSize: 20, fontWeight: '800' },
  label: { height: '10%' },
  wrapper: { justifyContent: 'center' },
  button: {
    backgroundColor: '#1AA7EC',
    marginTop: 30,
    marginBottom: 10,
  },
});
