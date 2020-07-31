import styles from './styles';
import {colors} from '@constants';
import {StackNavigationOptions, RouteProp, BottomTabNavigationOptions, BottomTabBarOptions} from '@types';
import {get} from '@helpers';

export const defaultStackOptions = {
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitleStyle,
  // headerBackTitleStyle: styles.headerBackTitleStyle,
  // headerTintColor: 'white',
  // headerPressColorAndroid: 'grey',
  cardStyle: styles.cardStyle,
};

export const routeNavigatorScreenOptions: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: true,
  gestureEnabled: true,
};

export const tabBarScreenOptionsHandler = ({
  route,
  navigation,
}: {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: any;
}): BottomTabNavigationOptions | undefined | any => {
  return {
    tabBarVisible: !get(route, 'state.index', false),
  };
};

export const theme = {
  dark: false,
  colors: {
    primary: '', // The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
    background: colors.gray_EFEFEF, // The color of various backgrounds, such as background color for the screens.
    card: '', // The background color of card-like elements, such as headers, tab bars etc.
    text: colors.white_FFFFFF, // The text color of various elements.
    border: colors.gray_EFEFEF, // The color of borders, e.g. header border, tab bar border etc.
  },
};

export const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: colors.red_E50003,
  inactiveTintColor: colors.white_FFFFFF,
  labelStyle: {
    marginLeft: 0,
    fontSize: 16,
  },
  tabStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.white_FFFFFF,
    backgroundColor: colors.black_087,
  },
  labelPosition: 'beside-icon',
  keyboardHidesTabBar: true,
};
