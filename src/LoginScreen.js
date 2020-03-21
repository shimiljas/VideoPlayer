import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,ActivityIndicator} from 'react-native'
import firebase from 'react-native-firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {scale, verticalScale, moderateScale} from './Responsive'
import {normalize} from './Fontnormalize'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null,loading:false }

  handleLogin = () => {
    const { email, password } = this.state
    console.log(firebase,"firebase")
    if(email.length==0){
        this.setState({errorMessage:'Please enter email !'})
        return;
    }

    if(password.length==0){
        this.setState({errorMessage:'Please enter password !'})
        return;
    }
    this.setState({loading:true,errorMessage: null,})
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({email: '', password: '', errorMessage: null,loading:false})  
        this.props.navigation.navigate('Home')
    })
      .catch(error => {
         console.log(error)
        this.setState({ errorMessage: error.message,loading:false })
      })
  }

  render() {
    const {loading}=this.state
    return (
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red',marginHorizontal:20,textAlign:'center' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity 
            style={styles.button}
             onPress={this.handleLogin} >
          {loading?
           <ActivityIndicator size="small" color="white" />:
            <Text style={styles.text}>Login</Text>} 
         </TouchableOpacity>    


         <Text  
         onPress={() => this.props.navigation.navigate('SignUp')}
          style={styles.textlogin}>Doesn't have an account yet? Signup</Text> 
       
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingHorizontal:scale(20)
  },
  textInput: {
    height: 50,
    width: scale(250),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:3,
    paddingHorizontal:8,
    marginTop: 18,
    marginVertical:18
  },
  button:{
    height: 50,
    borderRadius:3,
    width: scale(250),
    backgroundColor:'red',
    borderColor: 'gray',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    marginTop: 18,
    marginVertical:18

  },
  text:{fontWeight:'bold',color:'white',fontSize:normalize(15)},
  textlogin:{color:'black',fontSize:normalize(14),marginTop:verticalScale(7)},
})