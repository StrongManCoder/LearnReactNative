/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-22 14:26:18
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-22 14:57:23
 * @FilePath: /AwesomeProject/SRC_22_StackNavigator/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// https://reactnavigation.org/docs/hello-react-navigation  参考官方文档

import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, Alert } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

function HomeScreen(prop){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > Home Screen</Text>

        <Button title='调到新闻页面' onPress={() => prop.navigation.navigate('News')}></Button>
    </View>
}

function NewsScreen(prop){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > News Screen</Text>

        <Button title='调到HOME页面' onPress={() => prop.navigation.navigate('Home')}></Button>

    </View>
}


const Stack = createNativeStackNavigator()

export default class index extends Component {
  render() {
    return (
      
        <Stack.Navigator initialRouteName='Home'
                         
        >
            <Stack.Screen name='Home' component={HomeScreen}
            options={
                {
                    title:"首页",
                }
            }
            />
            <Stack.Screen name='News' component={NewsScreen}
            options={
                {
                    title:"新闻",
                    headerStyle:{
                        backgroundColor:"tomato"
                    },
                    headerRight:() =>(
                        <TouchableOpacity onPress={() => alert("点击加号")}>
                            <Text style= {{fontSize:33}}> + </Text>
                        </TouchableOpacity>
                    )
                }
            }
            />

        </Stack.Navigator>

    )
  }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

},
textStyl:{
fontSize:33,
textAlign:"center",

}


})
