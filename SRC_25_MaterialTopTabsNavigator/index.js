/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-23 15:10:52
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-23 16:11:01
 * @FilePath: /AwesomeProject/SRC_25_MaterialTopTabsNavigator/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Mtab = createMaterialTopTabNavigator()


function OrderUnpayScreen(){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > 待付款</Text>

        {/* <Button title='调到新闻页面' onPress={() => prop.navigation.navigate('News')}></Button> */}
    </View>
}

function OrderPayScreen(){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > 待发货</Text>

        {/* <Button title='调到HOME页面' onPress={() => prop.navigation.navigate('Home')}></Button> */}

    </View>
}


function OrderSendScreen(){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > 待收货 </Text>

        {/* <Button title='调到HOME页面' onPress={() => prop.navigation.navigate('Home')}></Button> */}

    </View>
}

function OrderFinishScreen(){
    return <View style={[styles.container]}>

        <Text style={[styles.textStyl]} > 待评价 </Text>

        {/* <Button title='调到HOME页面' onPress={() => prop.navigation.navigate('Home')}></Button> */}

    </View>
}

export default class index extends Component {
  render() {
    return (
      <Mtab.Navigator
        tabBarPosition='top'
        style={[styles.mtabStyle]}
        
      >
        <Mtab.Screen
        name='OrderUnpayScreen'
        component={OrderUnpayScreen}
        options={{title:'待付款',
                  tabBarIcon:({focused,color}) => {
                    return(
                        <Ionicons name="hammer-outline" size={20} color={color} ></Ionicons>
                    )
                  }              
                 }}
        />

        <Mtab.Screen
        name='OrderPayScreen'
        component={OrderPayScreen}
        options={{title:'待发货',
        tabBarIcon:({focused,color}) => {
            return(
                <Ionicons name="arrow-redo-circle-outline" size={20} color={color} ></Ionicons>
            )
          } }}
        />
         <Mtab.Screen
        name='OrderSendScreen'
        component={OrderSendScreen}
        options={{title:'待发货',
        tabBarIcon:({focused,color}) => {
            return(
                <Ionicons name="arrow-redo-outline" size={20} color={color} ></Ionicons>
            )
          } }}
        />
         <Mtab.Screen
        name='OrderFinishScreen'
        component={OrderFinishScreen}
        options={{title:'待评价',
        tabBarIcon:({focused,color}) => {
            return(
                <Ionicons name="chatbubble-ellipses-outline" size={20} color={color} ></Ionicons>
            )
          } }}
        />

      </Mtab.Navigator>
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
    
    },
    mtabStyle:{
        marginTop:44,
    }
    
    
    })