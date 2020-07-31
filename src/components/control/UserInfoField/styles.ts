import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 50,
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_E4E4E4,
  },
  placeholder: {},
  placeholderView: {
    position: 'absolute',
    flexDirection: 'row',
  },
});
