import React from 'react';
import {useCallback, useMemo, useNavigation} from '@hooks';
import {View, TouchableOpacity, Text} from '@components';
import styles from './styles';

const RoomItem: React.FC<TProps> = ({_data, _ref}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Room', {id: _ref.id});
      }}
    >
      <View style={styles.view}>
        <Text style={styles.name}>{_data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoomItem;

type TProps = {
  _data: {
    admin: string;
    messages: any;
    name: string;
    users: Array<string>;
  };
  _ref: {
    id: string;
  };
};
