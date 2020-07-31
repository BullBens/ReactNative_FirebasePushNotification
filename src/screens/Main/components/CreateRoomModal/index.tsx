import React from 'react';
import {useCallback, useState, useMemo} from '@hooks';
import {View, TextInput, Text, TouchableOpacity, ScrollView} from '@components';
import styles from './styles';
import {useEffect} from '@hooks';
import Modal from 'react-native-modal';
import {colors} from '@constants';
import {UserService, RoomService} from '@services';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {loadPartialConfig} from '@babel/core';
import {ActivityIndicator, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const CreateRoomModal: React.FC<TProps> = ({isVisibleModal, toggleModalVisible}) => {
  const [users, setUser] = useState<FirebaseFirestoreTypes.QueryDocumentSnapshot[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<Array<string>>([]);
  const [roomName, setRoomName] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UserService.getUsers().then((res) => {
      let users = res.docs.filter((el) => el.data().uid !== auth().currentUser?.uid);
      setUser(users);
    });
    return () => {};
  }, []);

  const selectUser = useCallback(
    (uid: string) => {
      let indexed = selectedUsers.findIndex((el) => el == uid);
      if (indexed == -1) {
        selectedUsers.push(uid);
      } else {
        selectedUsers.splice(indexed, 1);
      }
      setSelectedUsers([...selectedUsers]);
    },
    [selectedUsers],
  );

  const isSelected = useCallback((uid: string) => selectedUsers.indexOf(uid) != -1, [selectedUsers]);

  const createRoom = useCallback(() => {
    RoomService.addRoom(roomName, selectedUsers)
      .then((res) => {
        toggleModalVisible();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [roomName, selectedUsers]);

  return (
    <Modal isVisible={isVisibleModal}>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={colors.white_FFFFFF}
          style={styles.textInput}
          value={roomName}
          onChangeText={setRoomName}
          placeholder="Room name"
        />
        <ScrollView style={styles.scrollView}>
          {users.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.userBtn,
                {backgroundColor: isSelected(item.data().uid) ? colors.red_E50003 : colors.black_087},
              ]}
              onPress={() => {
                selectUser(item.data().uid);
              }}
            >
              <Text style={{color: isSelected(item.data().uid) ? colors.black_087 : colors.red_E50003}}>
                {item.data().username ? item.data().username : 'anonymous'}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={createRoom}
          disabled={loading || !selectedUsers.length || !roomName.length}
          style={styles.btnStyle}
        >
          {loading ? (
            <ActivityIndicator color={colors.black_087} size={10} />
          ) : (
            <Text style={styles.btnTitle}>Create</Text>
          )}
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CreateRoomModal;

type TProps = {
  isVisibleModal: boolean;
  toggleModalVisible: () => void;
};
