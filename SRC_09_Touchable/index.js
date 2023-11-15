/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-15 15:33:18
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-15 15:51:24
 * @FilePath: /AwesomeProject/SRC_09_Touchable/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, Alert,TouchableOpacity } from 'react-native'

export default class Index extends Component {
 

  
    render() {
    return (
      <View style={[styles.container]}>
        
      <TouchableHighlight 
      onPress={() => Alert.alert("点击就高亮")}
      >

      <View style={[styles.item]}>
            <Text>触碰高亮</Text>
        </View>

      </TouchableHighlight>
    
      <TouchableOpacity 
      onPress={() => Alert.alert("点击透明度变化")}
      >

      <View style={[styles.item]}>
            <Text>触碰透明度变化</Text>
        </View>

      </TouchableOpacity>
     


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

    item:{
        marginBottom:20,
        padding:10,
        borderWidth:1,
        borderColor:'red',
    }

})
