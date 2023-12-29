/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 15:15:17
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-29 14:10:51
 * @FilePath: /AwesomeProject/SRC_29_Project/screens/User/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView, ScrollView, Image, Touchable, TouchableOpacity, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <ScrollView>
          <View style={[styles.avatar]}>
            <Image
            source={{uri:'https://img2.baidu.com/it/u=3799953226,1311596428&fm=253&fmt=auto&app=138&f=JPEG?w=914&h=500'}}
            style={{width:80,height:80,marginVertical:10,borderRadius:40}}
            />
          </View>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('About')}>
            <View style={[styles.listItem]}>
              <View style={{flexDirection:'row',  alignItems:'center'}}>
              <Ionicons name={'information-circle-outline'} size={20} color={'#2d3'}></Ionicons>

                <Text style={{marginLeft:10,fontSize:20}}>关于</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>

            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Alert.alert('aaa')}}>
            <View style={[styles.listItem]}>
              <View style={{flexDirection:'row',  alignItems:'center'}}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'}></Ionicons>

                <Text style={{marginLeft:10,fontSize:20}}>设置</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>

            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login') }>
            <View style={[styles.listItem]}>
              <View style={{flexDirection:'row',  alignItems:'center'}}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'}></Ionicons>

                <Text style={{marginLeft:10,fontSize:20}}>登录</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>

            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Alert.alert('aaa')}}>
            <View style={[styles.listItem]}>
              <View style={{flexDirection:'row',  alignItems:'center'}}>
              <Ionicons name={'settings-outline'} size={20} color={'#22d'}></Ionicons>

                <Text style={{marginLeft:10,fontSize:20}}>退出</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'}></Ionicons>

            </View>
          </TouchableOpacity>
          
          {/*退出登陆 */}

          

        </ScrollView>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
container:{
  justifyContent:"flex-start",

},
avatar:{
  flexDirection:'row',
  justifyContent:'center',
  borderBottomWidth:1,
  borderBottomColor:'#ddd',
},

listItem:{
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:'center',
  borderBottomWidth:1,
  borderBottomColor:'#ddd',
  height:44,
  marginLeft:20,
  marginRight:20,
}

})
