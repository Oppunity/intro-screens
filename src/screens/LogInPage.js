  
import React, { Component, Fragment } from 'react';
import { ImageBackground, Keyboard,TouchableWithoutFeedback, StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView,TouchableOpacity, TouchableHighlight } from 'react-native';
//import { Auth } from 'aws-amplify'
import {Ionicons} from '@expo/vector-icons';
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/Ionicons'


const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View)

const initialState = {
  username: '', password: '', user: {}, authenticationCode: '', showConfirmationForm: false
}



class LogInPage extends Component {
  static navigationOptions = {
    header: null
  } 

  state = initialState
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }


/*
  signIn = async () => {
    const { username, password } = this.state
    if ( this.state.username === undefined || this.state.password === undefined) {
      alert('Please input your username and password.');
return
}
    try {
       const user = await Auth.signIn(username, password)
       console.log('user successfully signed in!', user)
       alert('Successfully signed in.');
       this.props.navigation.push('MainFeed')
    } catch (err) {
      console.log('error:', err)
      alert('Incorrect username or password')
    }
  }
  
  confirmSignIn = async () => {
    const { user, authenticationCode } = this.state
    try {
       await Auth.confirmSignIn(user, authenticationCode)
       console.log('user successfully signed in!', user)
       goHome()
    } catch (err) {
      console.log('error:', err)
    }
  }
  */ 
    render()
    {
  return (


 <ImageBackground 
       source = {require('../../assets/earthbackground.jpg')}
       style={{height: '100%', width: '100%', alignItems: 'center'}}>
    <KeyboardAvoidingView
     
     behavior="padding"
     >
       <DismissKeyboardView>

       <Image source = {require('../../assets/reactlogo.jpg')}
       tintColor= 'black'
       style = {{ color:'cyan', height: 140, width: 140, borderRadius: 70, top: 200, left: normalize(80), position: 'absolute', }}/>


      
       <TouchableOpacity
       activeOpacity= {0.5}
       onPress={() => this.props.navigation.push('HomeScreen')}
       >
       <Ionicons 
       size ={50}
       color='white' 
       name='ios-return-left'
       style={{marginTop: -125, marginLeft: -175, position: 'absolute'}}
    > 
    </Ionicons>
      </TouchableOpacity>
       {
         !this.state.showConfirmationForm && (
          <Fragment>

      
      
      
       
     
        <View style = {{flexDirection: 'row'}}> 

        <Icon name = 'ios-person'
        style = {{left: 27, color: 'white', position: 'absolute', top: 390, zIndex: 3}}
        size = {30}> 
        </Icon>

       <TextInput
          style={styles.input1}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          
          onChangeText={val => this.onChangeText('username', val)}
          
        />

        </View>


<View> 
<Icon name = 'ios-lock'
        style = {{left: 27, color: 'white', position: 'absolute', top: 370, zIndex: 3}}
        size = {30}> 
        </Icon>
        <TextInput
          style={styles.input2}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />

        </View>
        
      {/*<TouchableOpacity style = {styles.button}
      onPress={this.signIn}
      >
       <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.button}
      onPress={() => this.props.navigation.navigate('SignUp') }
      >
        <Text style = {styles.buttonText}>Signup</Text>
         </TouchableOpacity>*/}

      
        <TouchableOpacity 
                        onPress={this.signIn}
                        style ={{height: normalize(55),
                          width: normalize(300),
                          position: 'absolute',
                          borderRadius: normalize(25),
                          top: 500,
                          left: 10,
                          backgroundColor: '#0043cf',
                          borderRadius: 25,
                          marginVertical: 10,
                          paddingVertical: 15, 
                          marginTop: 40,
                             }}> 
               
            <Text style = {{ fontSize: 16,fontWeight: '500', color: '#ffffff', textAlign: 'center', marginTop: -1}}> Login</Text>
       </TouchableOpacity>




     





      
    
         

      <TouchableOpacity>

        <Text style = {styles.forgotMyPassword}>Forgot Password? </Text>

      </TouchableOpacity>
       
      </Fragment>
        
         )   
    }
    {/*}
    { 
          this.state.showConfirmationForm && (
            <Fragment>
              <TextInput
                style={styles.input}
                placeholder='Authentication Code'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.onChangeText('authenticationCode', val)}
              />
              <Button
                title='Confirm Sign In'
                onPress={this.confirmSignIn}
              />
            </Fragment>
          )
        } 
      {*/}       

</DismissKeyboardView>
    </KeyboardAvoidingView>
    </ImageBackground>
    
  );
}
}

const styles = StyleSheet.create({
  input1: {
    width: 300,
    height: 55,
    zIndex:1,
    top: 350,
    backgroundColor: 'black',
    opacity: 0.7,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 25,
    marginTop: 30,
    paddingLeft: 55
  },
  input2: {
    width: 300,
    height: 55,
    opacity: 0.7,
    backgroundColor: 'black',
    margin: 10,
    padding: 8,
    paddingLeft: 55,
    
    top: 350,
    color: 'white',
    borderRadius: 25,
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

titleText: {
  fontSize:30,
  color: "white"
},

  inputBox: {
    width:300,
    height: 60,
    fontSize: 15,
    backgroundColor: '#a9a9a9',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 20,
    color: '#f8f8ff'
    
  },

  button:{
    width:300,
    height: 60,
    backgroundColor: '#0043cf',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16
    
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  forgotMyPassword: {
  fontSize: 14,
  color: 'white',
  position: 'absolute',
  left: 100,
  top: 440
},

backButon: {
  flex: 1,
  width: 500,
  height: 500,
  position: 'absolute',
  left: 10,
  top: 10,
  bottom: 50
}

  

});
export default LogInPage;