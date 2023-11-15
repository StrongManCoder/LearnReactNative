/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-15 14:39:12
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-15 14:57:00
 * @FilePath: /AwesomeProject/SRC_07_Image/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image 
        style={[styles.item1]}
        source={require('./images/fengjing.webp')}
        />

        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.logo}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },

    item1:{
       height:200,
       width: Dimensions.get('window').width,
       marginVertical:20,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        marginVertical:20,
      },
      logo: {
        width: 66,
        height: 58,
      },
})
