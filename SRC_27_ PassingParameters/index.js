/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-23 16:45:11
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-23 17:28:37
 * @FilePath: /AwesomeProject/SRC_27_ PassingParameters/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            //  点击传参  第一个参数是页面名字  第二个是参数 mix类型
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
  
  function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    // 解构传参
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }


  const Stack = createNativeStackNavigator()

export default function index() {
  return (
    <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Details' component={DetailsScreen}/>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})