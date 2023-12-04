/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 15:08:10
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-04 16:27:07
 * @FilePath: /AwesomeProject/SRC_29_Project/routes/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeStack'
import NewsScreen from './NewsStack'
import UserStack from './UserStack'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Tab = createBottomTabNavigator()

export default class index extends Component {
  render() {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({focused,color,size}) => {
                let iconName
                if(route.name === 'Home'){
                    
                    iconName = focused ? 'add-circle' : 'add-circle-outline'
                }else if (route.name === 'News'){
                    iconName = focused ? 'person' : 'person-outline'
                }else{
                    iconName = focused ? 'settings' : 'settings-outline'
                }
                // return <Button title={iconName} size={size} color={color}/>
              return <Ionicons name={iconName} size={size} color={color}/>

            },
            headerShown:false,

            
        })}
        
    >
        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='News' component={NewsScreen}></Tab.Screen>
        <Tab.Screen name='User' component={UserStack}></Tab.Screen>
    </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
