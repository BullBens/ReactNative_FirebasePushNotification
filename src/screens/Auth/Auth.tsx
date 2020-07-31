import React from 'react';
import {useEffect, useCallback, useMemo, useTranslation, useState, useRoute} from '@hooks';
import {View, Text} from '@components';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth, {firebase} from '@react-native-firebase/auth';
import {firebaseConfig} from '@constants';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Auth: React.FC<TProps> = () => {
  // Auth screen data.

  useEffect(() => {
    configureGoogleSign();
  }, []);

  const configureGoogleSign = () => {
    GoogleSignin.configure({
      webClientId: firebaseConfig.WEB_CLIENT_ID,
      offlineAccess: false,
    });
  };

  const googleSignIn = async (): Promise<void> => {
    try {
      await GoogleSignin.configure();
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const credential = auth.GoogleAuthProvider.credential(tokens.idToken, tokens.accessToken);
      await auth()
        .signInWithCredential(credential)
        .then(async (firebaseUserCredential) => {
          //   ToDo
        })
        .catch((err) => {
          throw new Error('Something went wrong with login, try again please');
        });
    } catch (err) {
      throw new Error('Something went wrong with google API, try again please');
    }
  };
  // .
  // const { data: myData, fetching, fetched } = useRequest<[], void>({
  // 	request: api.getSomething(),
  // 	onError: (error) => alert.error(error)
  // })
  // const [_, set_] = useGlobal('something')
  // const callSomething = useDispatch('callSomething')

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnGoogleSignIn} onPress={googleSignIn}>
        <Text style={styles.btnText}>Google Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

type TProps = {};
