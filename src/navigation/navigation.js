import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../screens/Auth/Login.view';
import Register from '../screens/Auth/Register.view';
import Home from '../screens/Home/Home.view';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};
const HomeNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      {/* add your another screen here using -> MainStack.Screen */}
    </MainStack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" options={{ headerShown: false }} component={AuthNavigation} />
        <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={HomeNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
