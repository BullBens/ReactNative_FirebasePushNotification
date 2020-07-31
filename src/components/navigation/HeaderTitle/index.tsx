import React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';

const HeaderTitle: React.FC<TProps> = ({title, search}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {search && <View />}
    </View>
  );
};

export default HeaderTitle;

type TProps = {
  title?: string;
  search?: any;
};
