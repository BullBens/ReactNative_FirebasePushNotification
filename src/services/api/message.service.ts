import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

const limit = 20;

class MessageService {
  /**
   * getMessages
   */
  public onSnapshotMessages(roomId: string, callBack: any) {
    return firestore()
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('dateTime', 'desc')
      .limit(limit)
      .onSnapshot((val: FirebaseFirestoreTypes.QuerySnapshot) => {
        callBack(val);
      });
  }

  public retrieveMore(roomId: string, lastVisible: FirebaseFirestoreTypes.DocumentSnapshot) {
    return firestore()
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('dateTime', 'desc')
      .startAfter(lastVisible)
      .limit(limit)
      .get();
  }

  public setMessage(roomId: string, text: string) {
    firestore().collection('rooms').doc(roomId).collection('messages').add({
      text,
      roomId,
      dateTime: new Date(),
    });
  }
}

export default new MessageService();
