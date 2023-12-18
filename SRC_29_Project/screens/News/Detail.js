/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-12-08 17:19:13
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-18 10:07:34
 * @FilePath: /AwesomeProject/SRC_29_Project/screens/News/Detail.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {WebView} from 'react-native-webview'


export default class Detail extends Component {
    // constructor()
 
    render() {
    return (
        <WebView
        originWhitelist={['*']}
        source={{uri:this.props.route.params.url}}
        style={{flex:1}}

     />
    )
  }
}

const styles = StyleSheet.create({})
