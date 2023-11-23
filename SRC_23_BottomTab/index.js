/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-22 15:10:24
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-23 14:21:25
 * @FilePath: /AwesomeProject/SRC_23_BottomTab/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


function HomeScreen(prop){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > Home Screen</Text>

        {/* <Button title='调到新闻页面' onPress={() => prop.navigation.navigate('News')}></Button> */}
    </View>
}

function NewsScreen(prop){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > News Screen</Text>

        {/* <Button title='调到HOME页面' onPress={() => prop.navigation.navigate('Home')}></Button> */}

    </View>
}


function SetingScreen(prop){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > SetingScreen </Text>

        {/* <Button title='调到HOME页面' onPress={() => prop.navigation.navigate('Home')}></Button> */}

    </View>
}
//创建tab 
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

                }

                
            })}

            
        

        >
            <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
            <Tab.Screen name='News' component={NewsScreen}></Tab.Screen>
            <Tab.Screen name='Setting' component={SetingScreen}></Tab.Screen>
        </Tab.Navigator>

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