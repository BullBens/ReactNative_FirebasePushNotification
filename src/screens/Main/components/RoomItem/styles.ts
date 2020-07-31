import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  name: {
    fontSize: 20,
    color: colors.white_FFFFFF,
  },
  view: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.red_E50003,
  },
});
