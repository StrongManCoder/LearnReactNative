/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-21 16:16:11
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-21 16:42:05
 * @FilePath: /AwesomeProject/SRC_18_GeoLocation/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE   
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import GeoLocation from '@react-native-community/geolocation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Storage from '../SRC_17_AsyncStorage/storage'

export default class index extends Component {
  
    // 组件加载时  开始获取定位
    componentDidMount = () => {
    //   GeoLocation.getCurrentPosition(info => console.log(info))
        
    const locationcontent = Storage.get('coords')

     if(locationcontent === undefined || locationcontent == ''){

        GeoLocation.getCurrentPosition(
            info => {
            AsyncStorage.setItem('coords',JSON.stringify(info.coords))
    
                Alert.alert('报错',JSON.stringify(info))
            }, 
    
            error => Alert.alert('报错',JSON.stringify(error))
    
          )

        }else{

        }

     

    }
    

  
    render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
