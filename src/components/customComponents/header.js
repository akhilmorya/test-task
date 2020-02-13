import React from 'react';
import {
 View, Text,TouchableOpacity
} from 'react-native';
import styles from './headerStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as CONST from '../../utils/constants';

function Header({
  title,
  menu,
  bell,
  onPress
}) {
  return (
    <View>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> onPress && onPress()}>
                <Ionicons name= { menu ? "md-menu" : "ios-arrow-round-back"} size={30} color={CONST.WHITE_COLOR} style={styles.leftIcon} />
            </TouchableOpacity>
            <View style={styles.subContent}>
              <Text style={styles.title}>{title}</Text>
            </View>
            {
              bell? 
              <FontAwesome name="bell" size={20} color={CONST.WHITE_COLOR} style={styles.rightIcon} />
              : null
            }
          </View>
        </View>
    </View>
  )
}

export default Header;

