

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
} from 'react-native';

const DATA = [
  {
    title: '魏',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: '蜀',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: '吴',
    data: ['Water', 'Coke', 'Beer'],
  },
];

class App extends Component {

    constructor(){
        super()

        this.state = {
            isFresh:false
        }
    }

    loadData = () =>{
        //开始加载动画
        this.setState({
            isFresh:true
        })

        //模拟请求数据
        setTimeout(() => {
            this.setState({
                isFresh:false
            })
            // alert('下拉刷新')

        }, 2000);
    }




    render(){
   return(
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title} </Text>
      )}

      //声明分隔符  类似cell 的分割
      ItemSeparatorComponent={() =>{
        return <View style={{borderBottomWidth:1,borderBottomColor:'black'}}></View>
      }}

      //空数据展示
      ListEmptyComponent={() => {
        return <Text style={{fontSize:33}}>空空如也!!</Text>
      }}

      //下拉刷新
      refreshing={this.state.isFresh}
    //   refreshing={true}
    //   onRefresh={() => {
    //     Alert.alert("下拉刷新")
    //   }}
    onRefresh={this.loadData}

    //上拉加载
    //设置到底的比例  距离列表下面0.1的时候 
    onEndReachedThreshold={0.1}  //声明触底的比例  0.1表示 距离底部还有10%
      onEndReached={ () =>{
        // Alert.alert("到底了")
      }}

      ListHeaderComponent={ () =>{
        return <Text style ={{fontSize:40}}>三国英雄榜</Text>
      }}

      ListFooterComponent={() =>{
        return <Text style={{fontSize:15}}>没有更多了数据了</Text>
      }}


    />
  </SafeAreaView>
   )


}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;