/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-15 10:37:00
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-15 10:52:47
 * @FilePath: /AwesomeProject/SRC_05_Switch_StatusBar/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar,Switch } from 'react-native'

export default class index extends Component {
  constructor(){
    super();

    this.state = {
        hideStatueBar:false,

    }
  }
    
  toggleStatueBar = () => {
        this.setState({
            hideStatueBar:!this.state.hideStatueBar,
        })
  }
  
  
    render() {
    return (
      <View style={[styles.container]}>
        <StatusBar 
        hidden={this.state.hideStatueBar}
        backgroundColor={"red"}   //仅仅在安卓下有效  iOS无效
        // barStyle={"light-content"} 
        barStyle={"dark-content"} 
        >

        </StatusBar>

        <Switch
        trackColor={{false:"#999",true:"#666"}}
        thumbColor={this.state.hideStatueBar ? "red" : "white"}
        value={this.state.hideStatueBar}
        onValueChange={this.toggleStatueBar}
        ></Switch>

        <Text > </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }

})
