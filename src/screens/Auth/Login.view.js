import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Label, InputText, Wrapper, Button } from '../../components/index';
import { loginActions } from '../../services/action';
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLogin, user } = useSelector((state) => state.AppReducer);
  const [isUsername, setUsername] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isPressed,setPressed] = useState(false);

  useEffect(() => {
    if (user?.id && user?.username && isLogin) {
      setPressed(false);
      navigation.replace('Dashboard');
    } else if (!isLogin && isPressed) {
      Alert.alert('Error', 'Invalid account');
      setPressed(false);
    }
  }, [isLogin, user]);

  const handleLogin = () => {
    if (isUsername && isPassword) {
      const params = {
        username: isUsername,
        password: isPassword,
      };
      setPressed(true);
      dispatch(loginActions(params));
    } else if (!isLogin && !isUsername){
      Alert.alert('Error', 'Invalid!');
    }
  };
  return (
    <Wrapper style={styles.main}>
      <Label text="Login" style={styles.label} textStyles={styles.labelText} />
      <View>
        <InputText
          onChange={(txt) => {
            setUsername(txt);
          }}
          value={isUsername}
          placeholder="username or phonenumber"
        />
        <InputText
          onChange={(txt) => setPassword(txt)}
          value={isPassword}
          placeholder="Password"
          secure
        />
      </View>
      <View>
        <Button
          onPress={() => {
            handleLogin();
          }}
          text="Login"
          buttonStyle={styles.loginButton}
          textStyles={styles.signUpButtonText}
        />
        <Button
          onPress={() => {
            navigation.navigate('Register');
          }}
          text="Sign up"
          buttonStyle={styles.signUpButton}
          textStyles={styles.signUpButtonText}
        />
      </View>
    </Wrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: { justifyContent: 'center' },
  label: { height: '10%' },
  labelText: { fontSize: 20, fontWeight: '800' },
  loginButton: {
    backgroundColor: '#1AA7EC',
    marginTop: 30,
    marginBottom: 10,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: '#808080',
  },
  signUpButtonText: { color: '#000' },
});
