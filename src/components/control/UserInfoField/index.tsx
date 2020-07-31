import React from 'react';
import {useCallback, useMemo, useState, useTranslation} from '@hooks';
import {View, TextInput, Text, Icon} from '@components';
import styles from './styles';
import {Animated} from 'react-native';
import {top, colors} from '@constants';

const UserInfoField: React.FC<TProps> = ({value, onChange, placeholder, type}) => {
  const {t} = useTranslation();
  const [focus, setFocus] = useState(false);

  const isEmpty = useMemo(() => {
    if (focus || value?.length) {
      return false;
    } else {
      return true;
    }
  }, [value, focus]);

  const onChangeText = useCallback(
    (val: string) => {
      onChange({val, type});
    },
    [type],
  );

  return (
    <View>
      <View
        style={[
          styles.placeholderView,
          {
            top: isEmpty ? 12 : 0,
            left: 3,
          },
        ]}
      >
        <Text
          style={[
            styles.placeholder,
            {
              color: isEmpty ? colors.gray_A0A3A8 : colors.gray_4F4E53,
              fontSize: isEmpty ? 17 : 10,
            },
          ]}
        >
          {t(placeholder)}
        </Text>
        {isEmpty && <Text style={{color: colors.red_E50003, fontSize: 17, left: 2, top: -2}}>*</Text>}
      </View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
        }}
        style={styles.container}
      />
    </View>
  );
};

export default UserInfoField;

type TProps = {
  type: 'name' | 'surname';
  placeholder: string;
  onChange: (data: {val: string; type: 'name' | 'surname'}) => void;
  value?: string;
};
