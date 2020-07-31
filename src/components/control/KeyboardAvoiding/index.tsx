import React from 'react';
import {KeyboardAvoidingView as RNKeyboardAvoidingView, Platform, StyleProp, ViewStyle} from 'react-native';

const KeyboardAvoidingView: React.FC<TProps> = ({children, keyboardVerticalOffset, ...props}) => {
  const behavior: TBehavior = Platform.select({ios: 'padding', android: undefined});

  return (
    <RNKeyboardAvoidingView keyboardVerticalOffset={keyboardVerticalOffset || 0} behavior={behavior} {...props}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;

type TProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onStartShouldSetResponder?: () => void;
  keyboardVerticalOffset?: number;
};
type TBehavior = 'padding' | 'height' | 'position' | undefined;
