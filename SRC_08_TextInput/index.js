/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-15 15:00:16
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-15 15:28:01
 * @FilePath: /AwesomeProject/SRC_08_TextInput/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View ,TextInput, Dimensions, Button, Alert} from 'react-native'

export default class index extends Component {
    
    constructor(){
        super();
        this.state ={
            userName:'',
            passWord:'',
        }
    }

    doLogin = () => {
        Alert.alert(this.state.userName)
    }
  
    render() {
    return (
      <View style={[styles.container]}>
        
       <TextInput
       style={[styles.input]}
       placeholder='请输入用户名'
        value={this.state.userName}
        onChangeText={(val) =>{
            this.setState({
                userName:val
            })
        }}
       />

        <TextInput
       style={[styles.input]}
       placeholder='请输入密码'
        value={this.state.passWord}
        secureTextEntry={true}
        onChangeText={(val) =>{
            this.setState({
                passWord:val
            })
        }}
       />

    <TextInput
       style={[styles.input]}
       placeholder='请输入手机号'
        value={this.state.passWord}
        keyboardType='phone-pad'
       />

    <TextInput
       style={[styles.input]}
       placeholder='请输入备注信息'
       multiline={true}
       numberOfLines={5} 
       textAlignVertical="top"
       />


        <View style={[styles.btn]}>
            <Button title='登录' onPress={this.doLogin}></Button>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        width:Dimensions.get('window').width - 40,
        margin:10,
        borderColor:'red',
        borderWidth:1,
        padding:10,
        

    },
    btn:{
        margin:10,
        
    }
})
