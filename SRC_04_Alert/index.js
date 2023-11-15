/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-13 17:11:54
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-15 10:34:22
 * @FilePath: /AwesomeProject/SRC_04_Alert/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View ,Alert,Button} from 'react-native'

export default class index extends Component {

    creatTwoButtonAlert = () => {
    console.log('creatTwoButtonAlert'),
        Alert.alert(
            "警告标题",
            "警告内容",
            [{
                text:"取消",
                onPress:() => console.log('cancel'),
                style:'cancel'

            },
            {
                text:"确认",
                onPress:()=> console.log('OK'),
                style:'destructive'
            }]
        )

    }

    creatThreeButtonAlert = ()=>{
        Alert.alert(
            "更新提示",
            "发现新版本,是否现在更新?",
            [{
                text:"取消",
                onPress:() => console.log('cancel'),
                style:'cancel'

            },
            {
                text:"确认",
                onPress:()=> console.log('OK'),
                style:"destructive"
            },
            {
                text:"跳过",
                onPress:()=> console.log('pass'),
                style:"default"
            },
        ]
        )
    }




  render() {
    return (
      <View style={[styles.container]}>

<Text style={[{width:100},{height:88},{fontSize:30},{backgroundColor:'white'}]}>  </Text>


        <Button title='Button' color={'red'} onPress={()=>{
            Alert.alert(
                "警告标题",
                "警告内容",
                [
                {
                    text:"确认",
                    onPress:()=> console.log('OK'),
                    style:'destructive'
                }]
)        }}
        />


        <Button title='两个按钮' onPress={this.creatTwoButtonAlert} 
        color='blue'
        />

        <Button title='三个按钮' onPress={this.creatThreeButtonAlert} 
        color='tomato'
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // justifyContent:'space-around',
        alignItems:'center',
    }


})
