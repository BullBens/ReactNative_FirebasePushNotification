import {StyleSheet, Dimensions} from 'react-native';
import {top, colors} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black_087,
  },
  btnGoogleSignIn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: colors.red_E50003,
  },
  btnText: {
    color: colors.red_E50003,
    fontSize: 16,
  },
});
