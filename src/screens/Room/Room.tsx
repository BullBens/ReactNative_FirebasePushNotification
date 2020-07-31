import React from 'react';
import {useState, useCallback, useEffect, useRoute} from '@hooks';
import {View, Text, TextInput, TouchableOpacity, FlatList} from '@components';
import styles from './styles';
import {MessageService} from '@services';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import MessageItem from './components/MessageItem';
import {ActivityIndicator} from 'react-native';
import {colors} from '@constants';

const Room: React.FC<TProps> = () => {
  const {params}: any = useRoute();
  const [messages, setMessages] = useState<FirebaseFirestoreTypes.DocumentSnapshot[]>([]);
  const [message, setMessage] = useState<string>('');
  const [lastVisible, setLastVisible] = useState<FirebaseFirestoreTypes.DocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    MessageService.onSnapshotMessages(params.id, (res: FirebaseFirestoreTypes.QuerySnapshot) => {
      setMessages(res.docs);
      setLastVisible(res.docs[res.docs.length - 1]);
      setLoading(false);
    });
    return () => {};
  }, []);

  const renderItem = useCallback(({item, index}) => <MessageItem {...item} key={index} />, [messages]);

  const keyExtractor = useCallback((item, index) => String(index), []);

  const sendMessage = useCallback(() => {
    MessageService.setMessage(params.id, message);
    setMessage('');
  }, [message]);

  const onEndReached = useCallback(() => {
    setRefreshing(true);
    if (lastVisible) {
      MessageService.retrieveMore(params.id, lastVisible).then((res) => {
        setLastVisible(res.docs[res.docs.length - 1]);
        setMessages([...messages, ...res.docs]);
        setRefreshing(false);
      });
    }
  }, [messages, lastVisible]);

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
      {loading ? (
        <ActivityIndicator color={colors.red_E50003} />
      ) : (
        <FlatList
          onEndReached={onEndReached}
          inverted
          // ListFooterComponent={renderFooter}
          onEndReachedThreshold={0}
          data={messages}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
      <View style={styles.sendMessageView}>
        <TextInput multiline onChangeText={(val) => setMessage(val)} value={message} style={styles.input} />
        <TouchableOpacity onPress={sendMessage} style={styles.btnStyle}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Room;

type TProps = {};
