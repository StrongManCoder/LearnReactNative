/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-20 15:05:42
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-20 15:38:45
 * @FilePath: /AwesomeProject/SRC_14_WebView/webViewURL.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import {WebView} from 'react-native-webview'

export default class webViewURL extends Component {
  render() {
    return (
     <WebView
        originWhitelist={['*']}
        source={{html:'<h1> Hello Word !!!!!!</h1>'}}
        style={{flex:1,marginTop:44}}

     />

    )
  }
}
