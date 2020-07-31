import React from 'react';
import {useState, useCallback, useEffect} from '@hooks';
import {View, Text, TextInput, TouchableOpacity, FlatList} from '@components';
import styles from './styles';
import {MessageService, RoomService} from '@services';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

import {ActivityIndicator} from 'react-native';
import {colors} from '@constants';
import RoomItem from './components/RoomItem';
import CreateRoomModal from './components/CreateRoomModal';

const Chat: React.FC<TProps> = () => {
  const [rooms, setRooms] = useState<FirebaseFirestoreTypes.DocumentSnapshot[]>([]);
  const [lastVisible, setLastVisible] = useState<FirebaseFirestoreTypes.DocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    RoomService.getRooms((res: FirebaseFirestoreTypes.QuerySnapshot) => {
      setRooms(res.docs);
      setLastVisible(res.docs[res.docs.length - 1]);
      setLoading(false);
    });
    return () => {};
  }, []);

  const renderItem = useCallback(({item, index}) => <RoomItem {...item} key={index} />, [rooms]);

  const keyExtractor = useCallback((item, index) => String(index), []);

  const addRoom = useCallback(() => {
    setIsVisibleModal(true);
  }, []);

  const renderFooter = useCallback(() => {
    if (refreshing) {
      return (
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator size="large" color={colors.red_E50003} />
        </View>
      );
    } else {
      return null;
    }
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <CreateRoomModal
        isVisibleModal={isVisibleModal}
        toggleModalVisible={() => {
          setIsVisibleModal(!isVisibleModal);
        }}
      />
      <FlatList
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0}
        data={rooms}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <View style={styles.sendMessageView}>
        <TouchableOpacity onPress={addRoom} style={styles.btnStyle}>
          <Text style={styles.btnText}>Create Room</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

type TProps = {};
