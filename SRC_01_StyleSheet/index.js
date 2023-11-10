/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-10 14:41:40
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-10 15:32:38
 * @FilePath: /AwesomeProject/SCR_01_StyleSheet/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}>textInComponent </Text>
        <Text style={[{color:'pink'},{fontSize:34}]}>textInComponent </Text>
        <Text style={[style.h1]}>Hello RN </Text>
        <Text style={[style.h2]}>Hello RN </Text>
      </View>
    )
  }
}


const style = StyleSheet.create(
    {
        h1:{
            fontSize:40,
            fontWeight: 'bold'
        },
        h2:{
            fontSize:30,
            fontWeight: 'bold'
        }
    }
)


