import React from 'react';
import {StyleProp, ViewStyle, TextStyle, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text} from '@components';
import styles from './styles';
import {colors} from '@constants';

const UsualButton: React.FC<TProps> = ({onPress, title, loading, disabled, buttonStyle, titleStyle}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.loginButton, buttonStyle, disabled && styles.loginButtonDisabled]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={'small'} animating={true} color={colors.gray_4F4E53} />
      ) : (
        <Text style={[styles.loginText, titleStyle, disabled && styles.loginTextDisabled]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

UsualButton.defaultProps = {
  onPress: () => console.warn('Fill in onPress method'),
  title: 'Fill in Title',
  loading: false,
  buttonStyle: {},
  titleStyle: {},
};

export default UsualButton;

type TProps = {
  onPress?: () => void;
  title?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
};
