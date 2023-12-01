/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 15:06:13
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-01 15:24:17
 * @FilePath: /AwesomeProject/SRC_29_Project/routes/HomeStack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity, Alert } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import TakePictureScreen from '../screens/Home/TakePicture'

const Stack = createNativeStackNavigator()


export default class HomeStack extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='Home'         
        >
            <Stack.Screen name='Home' component={HomeScreen}
            options={
                {
                    title:"首页",
                    headerStyle:{
                        backgroundColor:'#00b38a',
                        elevation:0,  //删除安卓上面的导航栏上面的线
                        shadowOpacity:0, //
                    },
                    // headerShown:false,
                    
                    headerTintColor:'#FFF',
                    headerRight: () => (
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('TakePicture')}>
                            <Text style={{fontSize:18,color:"white",marginRight:10}} >拍照</Text>
                        </TouchableOpacity>
                    )

                }
            
            }
            />

            <Stack.Screen name='TakePicture' component={TakePictureScreen}/>


            {/* <Stack.Screen name='News' component={NewsScreen}
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
            /> */}

        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
