import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CatalogScreen from '../screens/CatalogScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page' }} />
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Catalog Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
