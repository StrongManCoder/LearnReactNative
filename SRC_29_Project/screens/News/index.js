/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-30 15:14:57
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-08 17:27:07
 * @FilePath: /AwesomeProject/SRC_29_Project/screens/News/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, FlatList,TouchableOpacity, Image, Dimensions } from 'react-native'
import {getNewsList} from '../../utils/api'
import Loading from '../../components/Loading'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class index extends Component {
  
  constructor(){
    super();
    this.state = {
      type:'top',
      list:[],
      types:[
        {key:'top',title:'头条'},
        {key:'shehui',title:'社会'},
        {key:'guonei',title:'国内'},
        {key:'guoji',title:'国际'},
        {key:'yule',title:'娱乐'},
        {key:'tiyu',title:'体育'},
        {key:'junshi',title:'军事'},
        {key:'caijing',title:'财经'},
        {key:'shishang',title:'时尚'},
      ],
      initialTypeIndex:0,
    }
  }

componentDidMount = () => {
  this.getList()

  if(this.state.list.length > 0){
    // Alert.alert('list 11111')
  
  }else{
    // Alert.alert('list 00000')
  }

}

getList = () => {
  const type = this.state.type
  getNewsList(type).then(res => {

    console.log(res);
    this.setState({
      list: res
     });
  }).catch ( err => {
    console.log(JSON.stringify(err))
  })

}
 
newsItem = ({index,item}) =>{
  if(item.thumbnail_pic_s02 && item.thumbnail_pic_s03){
    return this.newsItemThreeImages({index,item})

  }else{
    return this.newsItemSingleImages({index,item})
  }
  // return this.newsItemSingleImages({index,item})


}


newsItemSingleImages = ({index,item}) =>{

  return(
    <TouchableOpacity onPress={ () => this.props.navigation.navigate('NewsDetail',{
      url:item.url,
      title:item.title,
      uniquekey:item.uniquekey,
    })}>
      <View style={[styles.newsItem1Container]}>
        <View style={[styles.newsItem1Text]}>
          <Text 
          style={[styles.newsItem1Title]}
          numberOfLines={2}
          >
            {item.title}
            </Text>

        <View style={[styles.newsItem1Footer]}>
          <Text style={[styles.newsItem1Meta]}
            numberOfLines={1}
          >
            {item.date}{item.author_name}
          </Text>
          
          <Ionicons name={'heart-outline'} size={18} onPress={ () => Alert.alert('点击★★★')}></Ionicons>
        </View>
        </View>

        <Image
        source={{uri: item.thumbnail_pic_s}}
        style={[styles.newItem1Image]}
      />
      </View>

    </TouchableOpacity>
  )

}
  

newsItemThreeImages=({index,item}) =>{
  return(
    <TouchableOpacity onPress={ () => this.props.navigation.navigate('NewsDetail',{
      url:item.url,
      title:item.title,
      uniquekey:item.uniquekey,
    })}
    style={{marginVertical:5}}
    >
      <View style={[styles.newsItemContainer]}>
        <Text
        style={[styles.newItemHeader]}
        numberOfLines={2}
        ellipsizeMode='tail'
        >{item.title}</Text>
      </View>

      <View>
        <View style={[styles.newsItemImageContainer]}>
          <Image
          source={{uri:item.thumbnail_pic_s}}
          style={[styles.newsItemImages]}
          />
          <Image
          source={{uri:item.thumbnail_pic_s02}}
          style={[styles.newsItemImages]}
          />
          <Image
          source={{uri:item.thumbnail_pic_s03}}
          style={[styles.newsItemImages]}
          />
        </View>
      </View>

      <View style={[styles.newsItem1Footer]}>
          <Text style={[styles.newsItem1Meta]}
            numberOfLines={1}
          >
            {item.date}{item.author_name}
          </Text>
          
          <Ionicons name={'heart-outline'} size={18} onPress={ () => Alert.alert('点击★★★')}></Ionicons>
        </View>

    </TouchableOpacity>

  )
}


newsType = ({index,item}) =>{
 
 let isActive = item.key == this.state.type
  return(
    <TouchableOpacity
    onPress={() =>{
      this.setState({
        type:item.key,
        initialTypeIndex:index > 3 ? index -3 : 0
      },() =>{
        this.getList()
      })
    }}
    >
      <View style={{width:65,height:46,padding:10,backgroundColor:isActive ? '#dfb' : '#FFF'}}>
        <Text style={{
          fontSize:18,fontWeight:'bold',textAlign:'center',color:isActive?'red':'#333'
        }}
        >{item.title}</Text>
      </View>

    </TouchableOpacity>
  )

}

  
  render() {
    return (

      <FlatList
          data={this.state.list}
          renderItem={this.newsItem}
          keyExtractor={item => item.uniquekey}
          //顶部导航条
          ListHeaderComponent={() =>{
            return <FlatList
            horizontal={true}
            data={this.state.types}
            keyExtractor={item => item.key}
            renderItem={this.newsType}
            initialScrollIndex={this.state.initialTypeIndex}
            >

            </FlatList>
          }}

          ListFooterComponent={() =>{
            return<Text style={{fontSize:20,textAlign:'center',marginVertical:40}}>
              -------------没有更多了----------
            </Text>
          }}

          ItemSeparatorComponent={() =>{
            return<View style={{borderBottomWidth:1,borderBottomColor:'#ccc',marginVertical:5}}></View>
          }}
          />
      // <>
      // { this.state.list.length > 0 ? 
      //   (<FlatList
      //     data={this.state.list}
      //     renderItem={this.newsItem}
      //     keyExtractor={item => item.uniquekey}
      //     />)
      //   :
      //   (<Loading/>)

      // }
      // </>
    )
  }
}

const styles = StyleSheet.create({


  newsItemContainer:{
    flexDirection:'column',  //竖直排列
    justifyContent:'space-between',
    alignItems:'center',
    
  },
  
  newItemHeader:{
    flexDirection:'column',
    fontSize:18,
    width:Dimensions.get('window').width -20,
    // padding:10,

  },

  newsItemImageContainer:{
    flexDirection:"row",
    marginBottom:20,


  },

  newsItemImages:{

    width:(Dimensions.get('window').width-60)/3,
    height:80,
    marginVertical:5,
    marginHorizontal:10,
    backgroundColor:'pink',
  },
  



  newsItem1Container:{
    flexDirection:'row', //水平排列
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10,
  },

  newsItem1Text:{
    flexDirection:'column',
    justifyContent:'space-between',
    width:Dimensions.get('window').width *2/3 - 20,

  },
  newsItem1Title:{
    paddingHorizontal:10,
    fontSize:18,
    width:Dimensions.get('window').width*2/3,
    marginBottom:20,
  },


newsItem1Footer:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:10,
},

newsItem1Meta:{
  fontSize:13,

},

newItem1Image:{
  width:Dimensions.get('window').width/3,
  height:80,
  marginVertical:5,
  marginHorizontal:10,
  backgroundColor:'pink',
}



})
