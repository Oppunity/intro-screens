  
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, MaskedViewIOS, Animated, Easing} from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/FontAwesome5'
//import { Auth } from 'aws-amplify'

export default class HomeScreenPage extends React.Component {
    constructor(props){
    super(props)
  
    this.springValue = new Animated.Value(0.3)

    this.state = {
        
        animationDone: false,
        loadingProgress:  new Animated.Value(0),
        marginTopValue: new Animated.Value(0)

    };
    }

   


spring() {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1
    }
  ).start()
}

    
 
 componentDidMount() {
    this.spring()


        Animated.timing(this.state.loadingProgress, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
            delay: 2000
        }).start(() => {
            this.setState({ animationDone: true });
    });
}


    static navigationOptions = {
        header: null
    }

    /*
  
    async componentDidMount() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
        console.log('User worked')
        if (user) {
          console.log('User worked')
          this.props.navigation.push('MainFeed')  
        }
      } catch (err) {
        console.log('error: ', err)
      }
    } 

    */

    
  move () {
    this.state.marginTopValue.setValue(0)
    Animated.timing(
      this.marginTopValue,
      {
        toValue: 1,
        duration: 2000,
        //easing: Easing.linear
      }
    ).start() //=> this.move())
  }

    render(){

            const movingmarginTop = this.state.marginTopValue.interpolate({
        inputRange: [0, 1],
        outputRange: [400, 40]
        //outputRange: [0, 1]
      })  
            const blackLayer = this.state.animationDone ? null: (
                <View style = {[StyleSheet.absoluteFill, {backgroundColor: "black", alignItems: 'center'}]} >
              <Animated.Image
      style={{ width: 220, height: 150, transform: [{scale: this.springValue}], top:60, position: 'absolute' }} 
      source={require('../../assets/logo.png')}/>
      
  <Image style = {{width: 150, height: 150, left: 80, top: 180, position: 'absolute'}} source = {require('../../assets/drip.gif')} > 
    

      </Image>

      <Image style = {{width: 150, height: 150, left: 160, top: 180, position: 'absolute'}} source = {require('../../assets/drip.gif')} > 
    

      </Image>


             </View>

            );


             const otherLayer = this.state.animationDone ? null: (
                <View style = {[StyleSheet.absoluteFill, {backgroundColor: "black"}]} />
            );

           
            const imageScale = {
                transform: [
                    {
                        scale: this.state.loadingProgress.interpolate({
                            inputRange: [0,20,100],
                            outputRange: [0.1, 0.9, 16]
                        })
                    }
                ]
            };

            const opacity = {
                opacity: this.state.loadingProgress.interpolate({
                    inputRange: [0,25,50],
                    outputRange:[0,0,1],
                    extrapolate: 'clamp'
                })
            }

            

        return (
            
           
       <View style={{flex: 1}}>

            {blackLayer}



            <MaskedViewIOS
                style = {{flex:1}}
                maskElement= {
                    <View style = {styles.centered}>
                        <Animated.Image
                            source ={require('../../assets/logo.png')}
                            style = {[{width: 600, } , imageScale]}
                           
                            />
                            
                            
                    </View>
                }
            >

            
            <Animated.View style = {[styles.centered]}>
           


    <Icon 
    style = {{position: 'absolute', top: 200}}
    name="hand-peace"  size={100} color="black" />
                    
        <Text style = {{fontSize: 36, top: 50, color: 'black' }}> Welcome! </Text>
        <Text style = {{fontSize: 20, top: 100, color: 'black' }}> Please select an option: </Text>
          
            <TouchableOpacity
          style={styles.SubmitButtonLogIn}
          activeOpacity = { .5 }
          onPress={() => this.props.navigation.navigate('LogIn') }
          >
            <Text style={styles.TextStyle}> LOGIN </Text>
      </TouchableOpacity> 
    
      
      
      <TouchableOpacity
      style={styles. SubmitButtonSignUp}
      activeOpacity = { .5 }
      onPress={() => this.props.navigation.navigate('SignUp') }
      >
    <Text style={styles.TextStyle}> SIGN UP </Text>
    </TouchableOpacity> 

   <Text style={styles.FounderText}> Created by Devin Devlin, Daniel Dayto, Arrion Archie, William Trevena </Text> 
   

   </Animated.View>
   </MaskedViewIOS>
        
   </View>

     
            


        );
     }
}


const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
        
    },
    
    
      BackGround: {
        flex: 1, 
        backgroundColor: 'black'
      },

      CompanyLogo: {
        flex: 1, 
        color: 'white', 
        fontSize: normalize(50), 
        paddingTop: normalize(250), 
        textAlign: 'center'
      },
      FounderText: { 
        color: 'black', 
        fontSize: normalize(8), 
        bottom: normalize(50),
        left: normalize(50),
        textAlign: 'center',
        position: 'absolute',
        
      },
      SubmitButtonLogIn: {
        height: normalize(100),
        width: normalize(100),
        borderRadius: normalize(50),
        right: normalize(60),
        bottom: normalize(140),
        borderWidth: normalize(2.5),
       
        paddingTop: normalize(40),
        borderColor: '#fff',
        backgroundColor:'#0043cf', 
        position: 'absolute'
        
    },

    SubmitButtonSignUp: {
      height: normalize(100),
      width: normalize(100),
      borderRadius: normalize(50),
      
      bottom: normalize(140),
      borderWidth: normalize(2.5),
      paddingTop: normalize(40),
      borderColor: '#fff',
      left: normalize(60),
      backgroundColor:'#0043cf',  
      position: 'absolute'  
  },

    TextStyle: {
      color:'white',
      textAlign:'center',
  },
    }
    );

