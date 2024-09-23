import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Platform, ScrollView ,TextInput,Dimensions, Alert, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'


export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            userName:'',
            passWord:'',
            validateUserName:false,
            isvalidateUser:true,
            isvalidatePassWord:true,
            secureTextEntry:true,
        }
    }


    validateUserName = (val) => {
        console.log(val);
    if( val.trim().length >= 2){
        this.setState ({
            userName:val,
            validateUserName:true,
            isvalidateUser:true,
        })
    }else{
        this.setState({
            userName:val,
            validateUserName:false,
            isvalidateUser:false,

            })
        }
    }

    validePassword =(val) =>{
        if(val.trim().length >=6){
            this.setState(
                {
                    passWord:val,
                    isvalidatePassWord:true,
                }
            )

        }else{
            this.setState({
                passWord:val,
                isvalidatePassWord:false,
            })
        }

    }

    handleVaildeUser = (val) =>{
        if(val.trim().length >=2){
        //   Alert.alert('规则通过')
          this.setState({
              isvalidateUser:true
          })
        }else{
        //   Alert.alert('规则不不不通过')
          this.setState({
              isvalidateUser:false
          })
        }
      }

      updatesecureTextEntry = () =>{
        if(this.state.secureTextEntry){
            this.setState({
            secureTextEntry:false
            })
        }else{
            this.setState({
                secureTextEntry:true
                })
        }
      }

      handleLogin = () =>{
        if(this.state.userName.length == 0 || this.state.passWord.length == 0){
            Alert.alert('用户名和密码不能为空')
            return
        }

        let userInfo = {
            userName:this.state.userName,
            passWord:this.state.passWord,

        }


      }
  
    render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground
        source={require('../../images/bg.png')}
        style={[styles.bgIamge]}
        >
        
        <View style={[styles.header]}>
            <Text style={[styles.headerText]}>Welcome!</Text>

        </View>

        <Animatable.View
            animation="fadeInUpBig"
            duration={500}
            style={[styles.footer]}
        >

           <ScrollView>
                
                <View style={[styles.action]}>
                <Ionicons name={'person-outline'} size={25} style={{marginTop:12}}></Ionicons>

                <TextInput
            style={[styles.input]}
            placeholder='请输入用户名'
            value={this.state.userName}
            onChangeText={(val) => this.validateUserName(val) }
            //e.nativeEvent.text 获取客户端的实际内容
            onEndEditing={(e) =>this.handleVaildeUser(e.nativeEvent.text) }
               />
               {
                this.state.validateUserName ?
                <Animatable.View animation={'bounceIn'}>
                <Ionicons name={'checkmark-circle-outline'} size={25}></Ionicons>
                </Animatable.View>
                :
                null
               }

                </View>
                {
                      this.state.isvalidateUser ?
                     null
                      :
                      <Animatable.View animation={'fadeInLeft'} duration={500}>
                        <Text style={[styles.errorMsg]}>用户名最短2位</Text>
                      </Animatable.View>
                }

                <View style={[styles.action]}>
                <Ionicons name={'lock-closed-outline'} size={25} style={{marginTop:12}}></Ionicons>

                <TextInput
                style={[styles.input]}
                secureTextEntry={this.state.secureTextEntry? true :false}
                placeholder='请输入密码'
                onChangeText={(val) => this.validePassword(val)}
                value={this.state.passWord}
               />
                <TouchableOpacity onPress={this.updatesecureTextEntry}>
                    {
                        this.state.secureTextEntry
                        ?
                        <Ionicons name={'eye-off-outline'} size={20}></Ionicons>
                        :
                        <Ionicons name={'eye-outline'} size={20}></Ionicons>
                    }

                </TouchableOpacity>


                </View>
                {
                      this.state.isvalidatePassWord ?
                     null
                      :
                      <Animatable.View animation={'fadeInLeft'} duration={500}>
                        <Text style={[styles.errorMsg]}>密码最短6位</Text>
                      </Animatable.View>
                }

                {/* 登录注册按钮     */}
                <View style={[styles.button]}>
                    <TouchableOpacity 
                    style={[styles.signIn]}
                    onPress={() =>(this.handleLogin())}
                    >
                    <Text style={[styles.textSign,{color:'#009387',backgroundColor:'green',height:30,}]}>登录</Text>                           

                        {/* <linearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                        >
                        <Text style={[styles.textSign,{color:'#fff'}]}>登录</Text>                           
                        </linearGradient>     */}
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]}
                    // onPress={() =>this.props.navigation.navigate('Register')}
                    >
                     <Text style={[styles.textSign,{color:'#009387'}]}>注册</Text>                           
  
                    </TouchableOpacity>


                </View>




            </ScrollView>         
        </Animatable.View>

        </ImageBackground>


      </View>
    )
  }
}

const styles = StyleSheet.create({
bgIamge:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
},

container:{
    flex:1,

},

header:{
flex:1,
justifyContent:'flex-end',
paddingHorizontal:20,
paddingBottom:Platform.OS === 'ios' ? 150 : 100,
},

headerText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
},
footer:{
    flex:3,
    backgroundColor:"#fff",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal:20,
    paddingVertical:20,
},

action:{
    flexDirection:'row',
    marginTop:5,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5,
},
input:{
    flex:1,
    marginTop:Platform.OS === 'ios' ? 0 : -12,
    paddingLeft:10,
    color:'#05375a',
    

},
errorMsg:{
    fontSize:14,
    color:'red',
},
button:{
    marginTop:15,
},
textSign:{
    borderRadius:10,
    fontSize:20,
    textAlign:'center',
}

})
