// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/components/screens/LoginScreen';
import SignUpScreen from '@/components/screens/SignUpScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
  
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign" component={SignUpScreen} />
      </Stack.Navigator>
  
  );
}

export default App;