/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-29 16:02:23
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-30 14:41:30
 * @FilePath: /AwesomeProject/SRC_28_API/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'
import {getThreeDays} from './api'
export default class index extends Component {
  
    getData = () => {
  
      const coords = {
        long:112.222,
        lat:39.2222
      }
      getThreeDays(coords).then(res => {
        //获取数据成功
        Alert.alert('成功',res)
        console.log(res)
      }).catch((err) => {
          Alert.alert('报错',JSON.stringify(err))
        })


        //查询三天的天气预报
        // let key = '5468f6560b024b9c81f63c35410e1b20'
        // let location = "101010100"
        // const url = `https://devapi.qweather.com/v7/weather/3d?location=${location}&key=${key}`

        // fetch(url,{
        //   method:'GET'
        // }).then((res) =>{
        //   console.log(res.json())
        //   Alert.alert('请求成功',JSON.stringify(res))

        // }).catch((err) =>{
        //   Alert.alert('报错',JSON.stringify(err))
        // })
        
  


  }
  
  
  
    render() {
    return (
      <View style={[styles.container]}>
       <Button title='点击获取数据' onPress={this.getData}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})
