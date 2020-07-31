import {StyleSheet, Dimensions} from 'react-native';
import {top, colors, sizes} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  sendMessageView: {
    flexDirection: 'row',
    borderTopColor: colors.white_FFFFFF,
    borderTopWidth: 1,
  },
  input: {
    fontSize: 20,
    color: colors.white_FFFFFF,
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    height: 50,
    flex: 1,
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderLeftWidth: 1,
    borderColor: colors.white_FFFFFF,
    height: 50,
  },
  btnText: {
    color: colors.white_FFFFFF,
  },
  container: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: colors.black_087,
  },
  activityIndicatorView: {
    paddingTop: 20,
  },
  name: {
    fontSize: 18,
    color: colors.red_E50003,
  },
  textInput: {
    marginVertical: 8,
    padding: 8,
    width: sizes.width * 0.75,
    color: colors.white_FFFFFF,
    fontSize: 16,
    borderColor: colors.red_E50003,
    borderWidth: 1,
  },
});
