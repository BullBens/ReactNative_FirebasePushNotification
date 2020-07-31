import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type TGlobalState = {
  user: null | FirebaseAuthTypes.User;
};
