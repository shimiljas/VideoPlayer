/**
 * @format
 */

import {AppRegistry} from 'react-native';
import * as React from 'react';
import {name as appName} from './app.json';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {TouchableOpacity,Image,View} from 'react-native'
import HomeScreen from './src/HomeScreen'
import YouTubeVideo from './src/YouTubeVideo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >  
            
          <Stack.Screen name="Home" component={HomeScreen}  
                options={
                    {
                        headerStyle: {
                        backgroundColor: '#fff'
                        },
                        headerLeft:()=>( 
                        <TouchableOpacity>
                            <Image 
                            style={{height: 22, width: 98, color: '#fff', marginLeft: 25}} 
                            source={require('./src/images/logo.png')} />
                        </TouchableOpacity>
                        ),
                        headerRight: ()=>(
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <TouchableOpacity style={{paddingHorizontal: 5}}>
                            <Icon name='cast-connected' size={25} color={'#555'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingHorizontal: 5}}>
                            <Icon name='videocam' size={25} color={'#555'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingHorizontal: 5}}>
                            <Icon name='search' size={25} color={'#555'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingHorizontal: 5}}>
                            <Icon name='account-circle' size={25} color={'#555'}/>
                            </TouchableOpacity>
                        </View>
                        )
                    }
                } 
            />
            <Stack.Screen name="YouTubeVideo" component={YouTubeVideo}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

AppRegistry.registerComponent(appName, () => App);
