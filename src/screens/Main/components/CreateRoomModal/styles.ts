import {StyleSheet, Dimensions} from 'react-native';
import {colors, sizes} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.red_E50003,
    padding: 16,
  },
  textInput: {
    paddingHorizontal: 8,
    color: colors.white_FFFFFF,
    borderWidth: 1,
    marginBottom: 8,
    borderColor: colors.white_FFFFFF,
  },
  scrollView: {
    maxHeight: sizes.height / 2,
  },
  btnStyle: {
    marginTop: 8,
    padding: 8,
    backgroundColor: colors.red_E50003,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: colors.black_087,
    fontSize: 16,
  },
  userBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
