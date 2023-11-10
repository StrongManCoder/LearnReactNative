/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-10 17:32:09
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-10 17:49:40
 * @FilePath: /AwesomeProject/SRC_03_Dimensions/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'

export default class index extends Component {
  render() {
    return (

        
        <View>    

            <Text style={[{height:88},{fontSize:30},{backgroundColor:'blue'}]}>  </Text>

        <View style={[styles.container]}>
            
            <View style={[styles.itemBase,styles.h3]}>
            <Text> 扫一扫 </Text>
            </View>

            <View style={[styles.itemBase,styles.h3]}>
            <Text> 付款码 </Text>
            </View>

            <View style={[styles.itemBase,styles.h3]}>
            <Text>卡包 </Text>
            </View>

            <View style={[styles.itemBase,styles.h3]}>
            <Text> 出行</Text>
            </View>

        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
    },

    itemBase:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        width:Dimensions.get('window').width/4,
        height:80,
        borderWidth:1,
        borderColor:'red',
    },

    h3:{
        fontSize:44,

    }

})
