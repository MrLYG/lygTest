import React, { Component } from 'react'
import { Text, View ,FlatList, Button ,Image,TouchableHighlight,TouchableOpacity} from 'react-native'
export default class Detail extends Component {
    render() {
        return (
          <View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-start',alignItems:'center'}}>
            <Image style={{width:200,height:200}} source={{uri:this.props.route.params.item.img}}/>
            <Text style={{textAlign: 'center'}}>歌曲名称:{this.props.route.params.item.name}</Text>
            <Text style={{textAlign: 'center'}}>歌手:{this.props.route.params.item.singer}</Text>
        </View>
        )
      }
}
