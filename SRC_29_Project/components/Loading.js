/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-22 10:44:50
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-05 17:43:32
 * @FilePath: /AwesomeProject/SRC_21_loading/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
      
      <View style={[styles.loading]}>        
        
        <ActivityIndicator
        color={"whiter"}
        ></ActivityIndicator>

        <Text style={[styles.loadingTitle]}> 加载中.... </Text>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center'
},
loading:{
    backgroundColor:'gray',
    width:150,
    height:100,
    borderRadius:10,
    padding:20,

},

loadingTitle:{
    color:'white',
    padding:20,
    textAlign:"center"
},

})
