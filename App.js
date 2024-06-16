import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './page/HomeScreen';
import SendScreen from './page/SendScreen';
import DashboardScreen from './page/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{animation: 'slide_from_left', headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{animation: 'slide_from_left', headerShown: false}}
        />
        <Stack.Screen
          name="Send"
          component={SendScreen}
          options={{animation: 'slide_from_left', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
