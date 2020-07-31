import React from 'react';
import {useCallback, useTranslation} from '@hooks';
import {View, TouchableOpacity, Text, Icon} from '@components';
import styles from './styles';
import {colors} from '@constants';

const ButtonSelect: React.FC<TProps> = ({requiredField, title, value, isArrow, onPress, type}) => {
  const {t} = useTranslation();

  const handlePress = useCallback(() => {
    onPress(type);
  }, [type]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.containerView}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{t(title)}</Text>
          {requiredField && <Text style={styles.require}>*</Text>}
        </View>
        <View style={styles.infoView}>
          {value && <Text style={styles.value}>{value}</Text>}
          {isArrow && (
            <View style={styles.arrowView}>
              <Icon name={'arrowRight'} size={13} color={colors.gray_D7D7D7} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSelect;

type TProps = {
  requiredField?: boolean;
  title: string;
  type: 'calendar' | 'sex';
  value: null | string;
  isArrow?: boolean;
  onPress: (type: 'calendar' | 'sex') => void;
};
