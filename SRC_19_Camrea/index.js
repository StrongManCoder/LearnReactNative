/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-21 17:01:31
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-21 17:44:28
 * @FilePath: /AwesomeProject/SRC_19_Camrea/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera'

export default class index extends Component {
  
  
  //暂未完成 后期再补
  

    render() {
    return (
      <View>
      
      <Camera
            style={StyleSheet.absoluteFill}
            // device={device}
            isActive={true}
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({})
