import React from 'react';
import {Text as RNText, TextStyle, TextProps, StyleProp} from 'react-native';
import styles from './styles';

const Text: React.FC<TProps> = ({style, children, numberOfLines, ellipsizeMode, textProps}) => {
  return (
    <RNText
      style={[styles.defaultText, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...textProps}
    >
      {children}
    </RNText>
  );
};
Text.defaultProps = {
  style: {},
  numberOfLines: 1000,
  ellipsizeMode: 'tail',
};

type TProps = {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  textProps?: TextProps;
};

export default Text;
