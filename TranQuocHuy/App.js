// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
import React from "react";
// import { Image } from 'react-native';
// import { Button,Alert } from 'react-native';
import FirstScreen from './Screen/First';
import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/Home';
import ProductDetail from './Screen/ProductDetail';
import Register from './Screen/Register';
import Payment from './Screen/Payment';
import Cart from './Screen/Cart';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={FirstScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
