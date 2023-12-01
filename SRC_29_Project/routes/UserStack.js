/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 15:06:13
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-30 16:00:56
 * @FilePath: /AwesomeProject/SRC_29_Project/routes/HomeStack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserScreen from '../screens/User'

const Stack = createNativeStackNavigator()


export default class UserStack extends Component {
  render() {
    return (
        <Stack.Navigator
                         
        >
            <Stack.Screen name='User' component={UserScreen}
            options={
                {
                    title:"用户",
                    headerStyle:{
                        backgroundColor:"tomato"
                    },
                    // headerRight:() =>(
                    //     <TouchableOpacity onPress={() => alert("点击加号")}>
                    //         <Text style= {{fontSize:33}}> + </Text>
                    //     </TouchableOpacity>
                    // )
                }
            }
            />

        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
