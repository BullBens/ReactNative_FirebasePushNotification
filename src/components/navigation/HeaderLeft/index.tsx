import React from 'react';
import {View, TouchableOpacity, Text} from '@components';
import {animation} from '@helpers';
import styles, {hitSlop} from './styles';

const HeaderLeft: React.FC<TProps> = ({clear, onPress}) => {
  animation();
  return (
    <View style={styles.container}>
      {clear && (
        <TouchableOpacity hitSlop={hitSlop} onPress={() => onPress()}>
          <Text style={styles.name}>Clear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderLeft;

type TProps = {
  onPress: () => void;
  clear?: boolean;
};
