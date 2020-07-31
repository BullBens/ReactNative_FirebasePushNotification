import firestore from '@react-native-firebase/firestore';

class UserService {
  public getUsers() {
    return firestore().collection('users').get();
  }
}

export default new UserService();
