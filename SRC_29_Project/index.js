/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 14:59:39
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-30 15:55:52
 * @FilePath: /AwesomeProject/SRC_29_Project/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MainTab from './routes'


export default class index extends Component {
  render() {
    return (
       <MainTab />
    )
  }
}

const styles = StyleSheet.create({})
