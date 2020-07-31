import React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderRight: React.FC<TProps> = ({logout, onPress}) => {
  return (
    <View style={styles.container}>
      {logout && (
        <TouchableOpacity onPress={() => onPress}>
          <Text style={styles.name}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderRight;

type TProps = {
  onPress: () => void;
  logout?: boolean;
};
