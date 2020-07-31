import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackOptions} from '../options';
import {Auth} from '@screens';

export const AuthStackNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={defaultStackOptions}>
      <AuthStack.Screen
        options={{
          headerShown: true,
          title: 'React Native Push Notification',
        }}
        component={Auth}
        name={'Auth'}
      />
    </AuthStack.Navigator>
  );
};
