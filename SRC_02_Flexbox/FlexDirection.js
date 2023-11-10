/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-10 16:08:03
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-10 17:30:11
 * @FilePath: /AwesomeProject/SRC_O2_Flexbox/FlexDirection.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View ,ScrollView} from 'react-native'

export default class FlexDirection extends Component {
  render() {
    return (
      <View style={{height:'100%'}}>

        <Text style={{height:88}}> </Text>
        <Text style={styles.h2}> 主轴方向 </Text>
        <ScrollView>
        <View>
            <Text style={[styles.h2]} >FlexDirection :"column默认"</Text>
                <View style={[styles.container]}>
                <Text style={[styles.itemBase]}>刘备</Text>
                <Text style={[styles.itemBase]}>关羽</Text>
                <Text style={[styles.itemBase]}>张飞</Text>
                </View>

        </View>

        <View>
            <Text style={[styles.h2]} >FlexDirection :"flexColumnReverse"</Text>
                <View style={[styles.container,styles.flexColumnReverse]}>
                <Text style={[styles.itemBase]}>刘备</Text>
                <Text style={[styles.itemBase]}>关羽</Text>
                <Text style={[styles.itemBase]}>张飞</Text>
                </View>

        </View>

        <View>
            <Text style={[styles.h2]} >FlexDirection :"flexRow"</Text>
                <View style={[styles.container,styles.flexRow]}>
                <Text style={[styles.itemBase]}>刘备</Text>
                <Text style={[styles.itemBase]}>关羽</Text>
                <Text style={[styles.itemBase]}>张飞</Text>
                </View>

        </View>

        <View>
            <Text style={[styles.h2]} >FlexDirection :"flexRowReverse"</Text>
                <View style={[styles.container,styles.flexRowReverse]}>
                <Text style={[styles.itemBase]}>刘备</Text>
                <Text style={[styles.itemBase]}>关羽</Text>
                <Text style={[styles.itemBase]}>张飞</Text>
                </View>

        </View>


        <View>
            <Text style={[styles.h2]} >flex 111 </Text>
                <View style={[styles.container,styles.flexRow]}>
                <Text style={[styles.itemBase,{flex:1}]}>刘备</Text>
                <Text style={[styles.itemBase,{flex:1}]}>关羽</Text>
                <Text style={[styles.itemBase,{flex:1}]}>张飞</Text>
                </View>

        </View>

        <View>
            <Text style={[styles.h2]} >flexColumn   123</Text>
                <View style={[styles.container,styles.flexColumn]}>
                <Text style={[styles.itemBase,{flex:1}]}>刘备</Text>
                <Text style={[styles.itemBase,{flex:2}]}>关羽</Text>
                <Text style={[styles.itemBase,{flex:3}]}>张飞</Text>
                </View>

        </View>

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        margin:10,
        borderWidth:1,
        borderColor:'red',
    },

    h2:{
        fontSize:24,
        marginHorizontal:20,
    },

    itemBase:{
        height:44,
        borderWidth:1,
        borderColor:'green',
        backgroundColor:'yellow',
        padding:4,
        textAlign:'center',
    },

    flexColumn:{
        flexDirection:'column',
    },

    flexColumnReverse:{
        flexDirection:'column-reverse',
    },


    flexRow:{
        flexDirection:'row',
    },

    flexRowReverse:{
        flexDirection:'row-reverse'
    }

})




