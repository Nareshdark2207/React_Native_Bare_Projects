import React from 'react';
import MovieDetails from './screens/MovieDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/Tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
      }}>
          <Stack.Screen name='Home'component={Tabs}></Stack.Screen>
          <Stack.Screen name='MovieDetails' component={MovieDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;