/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-21 14:29:58
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-21 16:03:20
 * @FilePath: /AwesomeProject/SRC_17_AsyncStorage/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Storage from './storage'

export default class index extends Component {
 
 
    storeData = async (value) => {
        try {
          await AsyncStorage.setItem('mytestkey', value);
        } catch (e) {
          // saving error
        }
      };

    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('mytestkey');
          if (value !== null) {
            // value previously stored
            alert(value)
          }
        } catch (e) {
          // error reading value
        }
      };
 
    render() {
    return (
      <View style={[styles.container]}>
        <Button title='存储'onPress={this.storeData('hello RN')} ></Button>
        <Button title='读取' onPress={this.getData}></Button>
        {/* 封装的存储组件 Storage  */}
        <Button title='清空' onPress={Storage.clear}></Button>


      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',


    }

})
