import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    color: colors.white_FFFFFF,
  },
});
