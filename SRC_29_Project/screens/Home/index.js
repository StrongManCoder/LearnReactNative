/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 15:13:23
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-04 15:50:57
 * @FilePath: /AwesomeProject/SRC_29_Project/screens/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, Alert,Image, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import GeoLocation from '@react-native-community/geolocation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getThreeDays,getCityInfo,getIndices} from '../../utils/api'
import LinearGradient from 'react-native-linear-gradient'

import WeatherIcons from '../../utils/weatherIcons'
export default class index extends Component {
    constructor(){
        super()

        this.state = {
            city:{},
            indeces:[],
            threeDays:[]

        }
    }


    componentDidMount = () => {
        GeoLocation.getCurrentPosition(
            info => {

                //获取位置成功后调用天气借口
            AsyncStorage.setItem('coords',JSON.stringify(info.coords))
            // Alert.alert('定位信息',JSON.stringify(info))
              
            //获取城市信息
            getCityInfo (info.coords).then(res => {
                console.log(res)
                // Alert.alert('getCityInfo',JSON.stringify(res))
                this.setState({
                    city:res
                })
                
                console.log(this.state.city.country)

            })

            //获取生活指数
            getIndices(info.coords).then(res =>{
                console.log(res)
                this.setState({
                    indeces:res
                })
            })
            //获取未来三天天气
            getThreeDays(info.coords).then(res =>{
                console.log(res)
                this.setState({
                    threeDays:res
                })
            })


            }, 
            error => Alert.alert('报错',JSON.stringify(error)),
            {
                timeout:20000
            }
          )
    }
    

    indecesItem = ({index, item}) => {
        return<TouchableOpacity
        key={'index'+item.type}
        onPress={() =>{
            Alert.alert(item.type)
        }}
        >
            <View style={[styles.indexItem]}>
                <Text style={[styles.indexName]}>{item.date}</Text>
                <Text style={[styles.indexBase]}>{item.name}</Text>
                <Text style={[styles.indexBase]}>{item.category}</Text>
            </View>

        </TouchableOpacity>
    }
 
    render() {
    return (
      <View>
        <ScrollView>
        <View style={[styles.container]}>

        <TouchableOpacity onPress={() => Alert.alert('扫一扫')}>
            <View style = {[styles.itemBase]}>
                <Ionicons name='scan-outline' size={40} color={'white'}></Ionicons>
                <Text style={[styles.fontBase]}>扫一扫</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style = {[styles.itemBase]}>
                <Ionicons name='qr-code-outline' size={40} color={'white'}></Ionicons>
                <Text style={[styles.fontBase]}>付款码</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style = {[styles.itemBase]}>
                <Ionicons name='trail-sign-outline' size={40} color={'white'}></Ionicons>
                <Text style={[styles.fontBase]}>出行</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style = {[styles.itemBase]}>
                <Ionicons name='card-outline' size={40} color={'white'}></Ionicons>
                <Text style={[styles.fontBase]}>卡包</Text>
            </View>
        </TouchableOpacity>
        </View>


        <Swiper   
        style={[styles.wrapper]} 
        showsButtons={false}
        autoplay={true}
        >
       
            <Image
            style={[styles.slideImage]}
            source={require('../../images/1.png')}
            ></Image>

            <Image
            style={[styles.slideImage]}
            source={require('../../images/2.png')}
            ></Image>

            <Image
            style={[styles.slideImage]}
            source={require('../../images/3.png')}
            ></Image>

        </Swiper>

        <View style={[styles.city]}>
            <Text style={[styles.cityText]}>
                {this.state.city.country}{this.state.city.adm1}{this.state.city.adm2}
            </Text>
        </View>

        <View style={[styles.indexContainer]}>
        <FlatList
        data={this.state.indeces}
        renderItem={this.indecesItem}
        keyExtractor={item => item.type}
        horizontal= {true}
        />
        </View>
       
        <View style={[styles.dailyContainer]}>
            {
               this.state.threeDays.map((item,index,array) =>{
                console.log(item.fxDate)
                return<LinearGradient 
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                colors={['#ddd','#333']}
                key={'weather'+index}
                style={[styles.dailyItem]}
                >
                    <Text style={[styles.dailyItemTitle]}>{item.fxDate}</Text>
                   
                    <View style={[styles.dailyItemContent]}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                           <Image 
                           style={[styles.weatherIcon]}
                           //RN的image路径不能使用拼接路径  所以通过js生成静态的路径
                           source={WeatherIcons[item.iconDay]}
                           ></Image>

                            <Text>{item.textDay}{item.tempMax}℃</Text>
                        </View>

                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Image 
                           style={[styles.weatherIcon]}
                           //RN的image路径不能使用拼接路径  所以通过js生成静态的路径
                           source={WeatherIcons[item.iconNight]}
                           ></Image>
                            <Text>{item.tempMin}℃{item.textNight}</Text>
                        </View>                    
                    </View>
                </LinearGradient>
               } )

            }
        </View>

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
    },
    itemBase:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00b38a',
        height:90,
        width:Dimensions.get("window").width/4,
    },

    fontBase:{
        marginTop:10,
        color:'#fff',
        fontSize:14,
    },
    wrapper:{
        height:200,

    },

    slideImage:{
        height:200,
        width:Dimensions.get('window').width,
    },
    city:{
        marginTop:10,
        flex:1,
        justifyContent:'center',
        // backgroundColor:'pink'

    },
    cityText:{
        fontSize:24,
        textAlign:'center',
        marginHorizontal:10
    },

    indexItem:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#deb',
        width:Dimensions.get('window').width/3 -10 ,
        height:80,
        marginTop:10,
        marginRight:10,
    },
    
    indexName:{
        color:'#222',
        fontSize:14,
    },

    indexBase:{
        color:'#00b38a',
        fontSize:15,
    },
    dailyContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        marginHorizontal:10,
    },
    dailyItem:{
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:20,
        width:Dimensions.get('window').width -20,
        marginTop:10,
    },
    dailyItemTitle:{
        fontSize:20,
        color:'#eee',
        marginTop:10
    },
    dailyItemContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('window').width -40,
        alignItems:'center',
        marginBottom:10,

    },
    weatherIcon:{
        width:50,
        height:50,
        marginHorizontal:10,
    }





})
