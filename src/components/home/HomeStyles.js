import { StyleSheet, Platform } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import Metrics from '../../utils/Dimensions';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR
  },
  headerContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    height: scale(50),
    marginTop: scale(10)
  },
  searchContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT,
    borderRadius: 10,
    marginHorizontal: scale(5),
    justifyContent: 'center'
  },
  searchInput: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(40),
    fontSize: scale(16),
    marginHorizontal: scale(15),
    color: CONST.BLACK_COLOR,
  },
  usrNameTxt: {
    fontSize: scale(16),
    color: CONST.GREY_COLOR,
    textAlign: 'center',
    left: scale(10),
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginBottom: scale(10)
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(15)
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  img: {
    alignSelf: 'center'
  },
  rowViewContainer: {
    width: Metrics.screenWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalScale(50),
    marginVertical: verticalScale(5)
  },
  border: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  shadow: {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
  }
});
