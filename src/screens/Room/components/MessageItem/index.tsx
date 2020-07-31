import React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {colors} from '@constants';

const MessageItem: React.FC<TProps> = ({_data}) => {
  return (
    <View>
      <Text style={styles.text}>{_data.text}</Text>
    </View>
  );
};

export default MessageItem;

type TProps = FirebaseFirestoreTypes.DocumentSnapshot & {} & any;
