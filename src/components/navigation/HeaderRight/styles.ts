import {StyleSheet} from 'react-native';
import {sizes, colors} from '@constants';

export const hitSlop = {
  top: 8,
  left: 8,
  bottom: 8,
  right: 8,
};

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  name: {
    color: colors.red_E50003,
  },
});
