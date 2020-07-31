import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

class AuthService {
  public setToken(token: string) {
    firestore()
      .collection('users')
      .where('uid', '==', auth().currentUser?.uid)
      .get()
      .then((res) => {
        if (!res.docs.length) {
          firestore().collection('users').add({
            token,
            username: auth().currentUser?.displayName,
            uid: auth().currentUser?.uid,
          });
        } else {
          firestore().collection('users').doc(res.docs[0].id).set({
            token,
            username: auth().currentUser?.displayName,
            uid: auth().currentUser?.uid,
          });
        }
      });
  }
}

export default new AuthService();
