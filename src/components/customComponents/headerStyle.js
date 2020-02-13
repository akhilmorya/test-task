import { StyleSheet } from 'react-native';
import * as CONST from '../../utils/constants';
import Metrics from '../../utils/Dimensions';

export default StyleSheet.create({
    container: {
        // marginVertical: 5, 
        // borderBottomWidth: 0.5, 
        elevation: 2.5, 
        borderBottomColor: CONST.WHITE_COLOR, 
        backgroundColor: CONST.BLUE_COLOR_COLLAPSE
    },
    row: {
        flexDirection: 'row', 
        marginVertical: 5, 
        marginBottom: 10,
        marginTop: 30
    },
    backView: {
        alignSelf: 'center' 
    },
    leftIcon: {
        width: 25, 
        height: 25, 
        alignSelf: 'center', 
        marginLeft: 10
    },
    rightIcon: {
        width: 25, 
        height: 25, 
        position:'absolute',
        right: 20
    },
    userIcon: {
        width: 25, 
        height: 25, 
        alignSelf: 'center', 
        marginLeft: 10
    },
    headerIcon: {
        width: 30, 
        height: 30, 
        alignSelf: 'flex-end', 
        marginRight: 15, 
        marginTop: 25
    },
    subContent: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        justifyContent: 'center',
        marginLeft: 10,
    },
    title: {
        textAlign: 'center', 
        color: CONST.WHITE_COLOR, 
        left: Metrics.screenWidth * 0.32, 
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight:'bold'
    },
});