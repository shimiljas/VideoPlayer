import React, { Component } from 'react'
import { 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import YouTube from 'react-native-youtube'
//import YouTubeVideo from './YouTubeVideo'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import data from './data'
const Stack = createStackNavigator();
import firebase from 'react-native-firebase'
import {scale, verticalScale, moderateScale} from './Responsive'
const apiKey = 'AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw'
const channelId = 'UCQzdMyuz0Lf4zo4uGcEujFw'
const results = 30

 class HomeScreen extends Component {
 


  constructor(props){
    super(props)
    this.state = {
      data: data
    }
  }


  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <FlatList
         style={{flex:1,paddingTop:15,backgroundColor:'white'}}
         data={this.state.data}
         renderItem={({item})=>{
          return ( 
                <TouchableHighlight 
                  key={item.id.videoId} 
                  onPress={() => navigate('YouTubeVideo', {youtubeId: item.id})}>
                  <View style={styles.vids}>
                     <Image 
                      source={{uri: item.snippet.thumbnails.medium.url}} 
                      style={{width: 340, height: 180}}/>
                      <View style={styles.vidItems}>
                      <View style={{flex:1,paddingLeft:scale(8),alignItems:'flex-start'}}>
                      <Image 
                        source={require('./images/NightKing.jpg')} 
                        style={{width: 40, height: 40, borderRadius: 20, marginRight: scale(10)}}/>
                      </View>
                      <View style={{flex:8}}>
                      <Text style={styles.vidText}>{item.snippet.title}</Text>
                      </View>
                      <View style={{flex:1}}>
                        <Icon name='more-vert' size={20} color='#555'/> 
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
            )
         }
        }
      />
      
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='home' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='whatshot' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='subscriptions' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icons name='bell' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItems}>
            <Icon name='folder' size={25} color='#444'/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
	    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10
  },
  vids: {
    paddingBottom: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    // borderBottomWidth: 0.6,
    // borderColor: '#aaa'
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
     paddingHorizontal: 35,
     paddingVertical:10
    // paddingHorizontal:5
  },
  vidText: {
    padding: 20,
    color: '#000'
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb',
    paddingBottom:10
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    //textDecorationLine: 'underline'
  }
})

export default  HomeScreen