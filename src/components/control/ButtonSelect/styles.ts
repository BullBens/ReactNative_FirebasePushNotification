import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 50,
    borderBottomColor: colors.gray_E4E4E4,
    borderBottomWidth: 1,
  },
  containerView: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoView: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowView: {
    marginLeft: 10,
  },
  value: {
    fontSize: 17,
    color: colors.gray_A0A3A8,
  },
  title: {
    fontSize: 17,
    color: colors.gray_4F4E53,
  },
  require: {
    color: colors.red_E50003,
    fontSize: 17,
    left: 2,
    top: -2,
  },
  titleView: {
    flexDirection: 'row',
  },
});
