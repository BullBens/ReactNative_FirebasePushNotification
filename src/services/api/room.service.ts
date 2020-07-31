import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {httpPost} from '../http';
import {Alert} from 'react-native';

const limit = 20;

class RoomService {
  /**
   * getMessages
   */
  public getRooms(callBack: any) {
    return firestore()
      .collection('rooms')
      .where('users', 'array-contains', auth().currentUser?.uid)
      .onSnapshot((val: FirebaseFirestoreTypes.QuerySnapshot) => {
        callBack(val);
      });
  }
  public addRoom(name: string, users: Array<string>) {
    const user = auth().currentUser;
    if (user) {
      users.push(user.uid);
    }
    return firestore().collection('rooms').add({
      admin: auth().currentUser?.uid,
      name,
      DeviceGroupId: '',
      users,
    });
  }
  public getDeviceGroupId(usersId: Array<string>) {
    // httpPost('https://fcm.googleapis.com/fcm/notification', {
    //   operation: 'create',
    //   notification_key_name: new Date().getTime().toString(),
    //   registration_ids: ['asdasdasd', 'asdasdasdasd'],
    // });
  }
}

export default new RoomService();
