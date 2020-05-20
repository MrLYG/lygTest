import React, { Component } from 'react'
import { Text, View ,FlatList, Button ,Image,TouchableHighlight,TouchableOpacity} from 'react-native'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.max=7
        this.state={data:[],albums:[],loadAlbums:[]}
    }
    componentDidMount(){
      fetch("http://www.cjlly.com:3041/record",{method:'GET'})
      .then(resp=>resp.json())
      .then(albums=>{
        //console.log(albums)
        let a=[]
        for (var i = 0; i < this.max; i++) {
          a.push(albums[i]);
        }
        this.setState({albums:a,loadAlbums:albums})
      })
    }
   
    _del=id=>{
      let data=this.state.albums.splice(0)
      let index=data.findIndex(album=>album.id===id)
      data.splice(index,1)
      this.setState({albums:data})
    }
  
    _goDtails=(item) => {
      
      this.props.navigation.navigate("Detail", {item:item})
      console.log(item)
    }
  
    _renderItem=({item,index})=>{
      return(
        <TouchableOpacity onPress={()=>this._goDtails(item)} >
        <View style={{height:90,flexDirection:"row"}}>
          <View style={{justifyContent:"flex-start", flexDirection: "row",alignItems:"center",flexGrow:1}}>
            <Text style={{color:'red',margin:10}}>{item.id}</Text>
            <Image style={{width:80,height:80,marginRight:30}} source={{uri:item.img}}/>
          </View>
          <View style={{flexDirection: "row",alignItems:"center",justifyContent:'space-between',flexGrow:1}}>
            <Text style={{width:90}}>{item.name}</Text>
            <Button onPress={()=>this._del(item.id)} style={{width:20,height:20}} title="删除"/>
          </View> 
        </View>
        </TouchableOpacity>
        )
      }
    _ItemSeparatorComponent=()=>{
        return <View style={{height:1,backgroundColor:"red"}}></View>
    }
  
    
    _reachEnd=()=>{
        this.max = this.max+5
        if(this.max>=this.state.loadAlbums.length+5){
            return
          }
        if(this.max>=this.state.loadAlbums.length){
          this.max=this.state.loadAlbums.length
          
        }
        
        let a=[]
        for (var i = 0; i < this.max; i++) {
          a.push(this.state.loadAlbums[i]);
        }
        this.setState({albums:a})
    }
    
  
    render() {
      return (
        <View>
                  <FlatList
                      ListEmptyComponent={<Text>数据是空的</Text>}
                      keyExtractor={({item,index})=>index}
                      ItemSeparatorComponent={this._ItemSeparatorComponent}
                      data={this.state.albums} 
                      renderItem={this._renderItem}
                      refreshing={false}
                      onEndReached={this._reachEnd}
                      onEndReachedThreshold={0.2}
                  />
              </View>
      )
    }
}
