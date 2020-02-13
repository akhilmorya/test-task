import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CONST.BLUE_COLOR_COLLAPSE,
  },
  text: {
    fontSize: 34,
    color: CONST.WHITE_COLOR
  },

});
