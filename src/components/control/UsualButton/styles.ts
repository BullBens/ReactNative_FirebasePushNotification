import {StyleSheet, Dimensions} from 'react-native';
import {colors, sizes, bottom} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  loginButton: {
    width: width,

    backgroundColor: colors.yellow_FFD700,
    height: sizes.pts_48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonDisabled: {
    backgroundColor: colors.gray_A0A3A8,
  },
  loginText: {
    fontSize: sizes.pts_16,
    fontWeight: '600',
    color: colors.gray_4F4E53,
    textTransform: 'uppercase',
  },
  loginTextDisabled: {
    color: colors.white_FFFFFF,
  },
});
