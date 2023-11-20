/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-20 15:49:08
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-20 16:09:16
 * @FilePath: /AwesomeProject/SRC_15_Picker/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Picker, PickerIOS} from '@react-native-picker/picker'

export default class index extends Component {
    constructor(){
        super()
        this.state = {  
            color:"white"
        }
    }
    
    render() {
    return (
      <View style={{backgroundColor:this.state.color}}>
        <PickerIOS
        selectedValue={this.state.color}
        style={{height:50,width:150}}
        
        onValueChange={(itemValue,itemIndex) =>
            this.setState({color:itemValue})
        }
        >
        <Picker.Item label='白色' value="white"></Picker.Item>
        <Picker.Item label='红色' value="red"></Picker.Item>

        </PickerIOS>

      </View>
    )
  }
}

const styles = StyleSheet.create({})
