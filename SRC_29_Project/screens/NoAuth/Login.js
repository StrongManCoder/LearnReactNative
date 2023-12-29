import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Platform, ScrollView ,TextInput,Dimensions} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            userName:'',
            passWord:'',
            isvalidateUserName:false,
            isvalidateUser:true,
        }
    }

    validateUserName = (val) => {
        console.log(val);
    if( val.trim().length >= 2){
        this.setState = {
            userName:val,
            isvalidateUserNamevalidateUserName:true,
            isvalidateUser:true,
        }
    }else{
        this.setState = {
            userName:val,
            isvalidateUserName:false,
            isvalidateUser:false,

        }
    }
    // this.setState = {
    //     userName:val,
    //     isvalidateUserName:true,
    // }


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
                onChangeText={(val) =>{
                    this.setState({
                        userName:val
                    })
                }}
                // onEndEditing={(val) => this.validateUserName(val) }
                // onEndEditing={(e) => this.handleVaildateUser(e)}
               />
               {
                this.state.isvalidateUserName ?
                <Animatable.View animation={'bounceIn'}>
                <Ionicons name={'checkmark-circle-outline'} size={20}></Ionicons>
                </Animatable.View>
                :
                null
               }

                </View>

                <View style={[styles.action]}>
                <Ionicons name={'lock-closed-outline'} size={25} style={{marginTop:12}}></Ionicons>

                <TextInput
            style={[styles.input]}
            placeholder='请输入密码'
            value={this.state.passWord}
                onChangeText={(val) =>{
                    this.setState({
                        passWord:val
                    })
                }}
                // onEndEditing={(val) => this.validateUserName(val) }
                // onEndEditing={(e) => this.handleVaildateUser(e)}
               />
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
    width:Dimensions.get('window').width - 40,
    margin:10,
    // borderColor:'red',
    // borderWidth:1,
    padding:10,
    

},



})
