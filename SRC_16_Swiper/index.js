/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-21 10:44:12
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-21 11:07:46
 * @FilePath: /AwesomeProject/SRC_16_Swiper/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'


export default class index extends Component {
  render() {
    return (
      <ScrollView>
        {/* //Swiper 必须放在 滚动视图中  */}
        <Swiper   
        style={[styles.wrapper]} 
        showsButtons={true}
        autoplay={true}
        >
       
        <Image
        style={[styles.slideImage]}
        source={require('./images/1.png')}
        ></Image>

        <Image
        style={[styles.slideImage]}
        source={require('./images/2.png')}
        ></Image>

        <Image
        style={[styles.slideImage]}
        source={require('./images/3.png')}
        ></Image>

        </Swiper>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

    wrapper:{
        height:200,

    },

    slideImage:{
        height:200,
        width:Dimensions.get('window').width,
    }
})
