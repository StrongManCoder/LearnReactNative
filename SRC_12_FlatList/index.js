/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-17 14:48:29
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-17 15:20:10
 * @FilePath: /AwesomeProject/SRC_12_FlatList/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class index extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})




import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "科技",
  },
  {
    id: "2",
    title: "娱乐",
  },
  {
    id: "3",
    title: "人文",
  },
  {
    id: "4",
    title: "社会",
  },
  {
    id: "5",
    title: "搞笑",
  },

  {
    id: "6",
    title: "军事",
  },
  {
    id: "7",
    title: "时尚",
  },
  {
    id: "8",
    title: "财经",
  },
  {
    id: "9",
    title: "呼呼",
  },
  {
    id: "10",
    title: "哈哈",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={false} //水平布局模式
        // initialScrollIndex={2}
        // numColumns={2}


        ListHeaderComponent={ () =>{
            return <Text style ={{fontSize:40}}>列表头部</Text>
          }}
    
          ListFooterComponent={() =>{
            return <Text style={{fontSize:15}}>没有更多了数据了</Text>
          }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,

  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default App;