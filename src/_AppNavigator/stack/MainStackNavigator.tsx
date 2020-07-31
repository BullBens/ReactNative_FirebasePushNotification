import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackOptions} from '../options';
import {useTranslation} from '@hooks';
import {Main, Room} from '@screens';
import {TouchableOpacity, Text} from '@components';
import auth from '@react-native-firebase/auth';

export const MainStackNavigator = () => {
  const {t} = useTranslation();
  const MainStack = createStackNavigator();

  const user = auth().currentUser;

  return (
    <MainStack.Navigator screenOptions={defaultStackOptions}>
      <MainStack.Screen
        options={{
          headerShown: true,
          title: user && user.email ? auth().currentUser?.email : '',
          headerRight: () => (
            <TouchableOpacity onPress={() => auth().signOut()}>
              <Text style={{color: 'red', marginRight: 16}}>Log Out</Text>
            </TouchableOpacity>
          ),
        }}
        component={Main}
        name={'Main'}
      />
      <MainStack.Screen
        options={{
          headerShown: true,
          title: 'Chat',
        }}
        component={Room}
        name={'Room'}
      />
    </MainStack.Navigator>
  );
};
