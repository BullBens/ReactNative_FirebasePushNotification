import React, {FC, useState} from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routeNavigatorScreenOptions, tabBarScreenOptionsHandler, tabBarOptions} from './options';
import {useTranslation, useEffect} from '@hooks';
import SplashScreen from 'react-native-splash-screen';
import {routes, colors} from '@constants';
import {MainStackNavigator, AuthStackNavigator} from './stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {TGlobalState} from '@types';
import {setUser} from '@reducers/user';
import {ActivityIndicator, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthService} from '@services';

enableScreens();
const RootStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const {t} = useTranslation();

  return (
    <MainTabs.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={(val) => {
        return tabBarScreenOptionsHandler({
          navigation: val.navigation,
          route: val.route,
        });
      }}
    >
      <MainTabs.Screen
        component={MainStackNavigator}
        options={{
          tabBarVisible: false,
        }}
        name={routes.MAIN_STACK_NAVIGATOR}
      />
    </MainTabs.Navigator>
  );
};

const AppNavigator: FC<TProps> = ({dispatch, user}) => {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
        AuthService.setToken(fcmToken);
      }
    } else {
      AuthService.setToken(fcmToken);
    }
  };

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      checkPermission();
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
    if (initializing) setInitializing(false);
  }

  return (
    <NavigationContainer>
      {initializing ? (
        <View style={{flex: 1, backgroundColor: colors.black_087, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={colors.red_E50003} size="large" />
        </View>
      ) : (
        <RootStack.Navigator screenOptions={routeNavigatorScreenOptions}>
          {user ? (
            <RootStack.Screen name={routes.MAIN_NAVIGATOR} component={MainTabNavigator} />
          ) : (
            <RootStack.Screen name={routes.MAIN_NAVIGATOR} component={AuthStackNavigator} />
          )}
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
};

type TProps = {
  user: TGlobalState['user'];
  dispatch: any;
};

const mapStateToProps = (state: TGlobalState) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AppNavigator);
