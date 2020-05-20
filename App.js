import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View ,FlatList, Button ,Image,TouchableHighlight,TouchableOpacity} from 'react-native'
import Home from './Home';
import Detail from './Detail'
const Stack = createStackNavigator()

export default class App extends React.Component {

    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
              <Stack.Screen name="Home" component={Home} options={{title:'流行音乐排行榜'}}  />
               <Stack.Screen name="Detail" component={Detail} options={{title:'详情'}} /> 
            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}

