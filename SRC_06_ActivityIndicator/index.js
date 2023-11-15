/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-15 11:14:41
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-15 14:24:30
 * @FilePath: /AwesomeProject/SRC_06_ActivityIndicator/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StyleSheet, Text, View ,ActivityIndicator,Platform, Alert} from 'react-native'
import React from 'react'

export default function index() {

   if(Platform.OS === 'android'){
        Alert.alert("当前安卓");
   }else if(Platform.OS === "ios"){
    Alert.alert("当前iOS");

   }

  return (
    <View style={[styles.container]}>
      <ActivityIndicator color={"red"} size={"large"} >
      </ActivityIndicator>
    
      <ActivityIndicator color={"green"} size={"small"} >
      </ActivityIndicator>

      <ActivityIndicator color={"yellow"} size={"small"} >
      </ActivityIndicator>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around"

    }
})        





