import React, {Component} from 'react';
import {StyleSheet,Text,View,FlatList} from 'react-native';

export default class TodoListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {
          key: '1',
          title: "部屋の掃除をする",
          memo:  "机の上も片付ける",
        },
        {
          key: '2',
          title: "牛乳を買いに行く",
          memo:  "切らしている",
        },
        {
          key: '3',
          title: "請求書を書く",
          memo:  "月末までに",
        },
        {
          key: '4',
          title: "洗濯する",
          memo:  "洗いもの溜まっている",
        },
      ]
    }
  }
  render() {
    const {todoList} = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={({item})=> {
            return (
              <View style={styles.itemCell}>
                <Text>{item.key}.{item.title}</Text>
                <Text style={{fontSize:12,color:"#888"}}>{item.memo}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
  },
  itemCell: {
    flex: 1,
    width:'100%',
    padding: 20,
    margin: 2,
    backgroundColor: '#FFFFFF',
  }
})
