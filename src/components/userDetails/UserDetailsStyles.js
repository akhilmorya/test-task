import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import * as CONST from '../../utils/constants';
import Metrics from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR
  },
  profileHeaderContainer: {
    flex: 0.4,
    backgroundColor: CONST.BLUE_COLOR_COLLAPSE,
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER
  },
  userProfileStyle: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(50)
  },
  userNameText: {
    fontSize: scale(24),
    color: CONST.WHITE_COLOR,
    fontWeight: CONST.BOLD,
    marginTop: scale(5)
  },
  userImagesViewContainer: {
    flex: 0.6
  },
  flatListStyle: {
    flex: 1,
    flexDirection: CONST.ROW,
    marginLeft: scale(2),
    marginRight: scale(2),
  },
  imageItemStyle: {
    marginHorizontal: scale(1),
    marginTop: verticalScale(10)
  },
  imageStyle: {
    marginHorizontal: scale(5),
    width: Metrics.screenWidth/3 - 12,
    height: Metrics.screenWidth/3 - 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: CONST.BLUE_COLOR_COLLAPSE
  }
});
