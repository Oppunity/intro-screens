import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TextInput,TouchableOpacity, Animated } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


var deviceWidth = Dimensions.get('window').width; 

  export default class SignUpPage extends React.Component {
    constructor(){
      super()
       this.marginTopValue = new Animated.Value(0)
       this.delayValue = new Animated.Value(0)
    }

  componentDidMount(){
    this.move()
    this.dely();
  }

  move () {
    this.marginTopValue.setValue(0)
    Animated.timing(
      this.marginTopValue,
      {
        toValue: 1,
        duration: 2000,
        //easing: Easing.linear
      }
    ).start() //=> this.move())
  }
  dely() {
    this.delayValue.setValue(0)
    Animated.timing(this.delayValue, {
      toValue: 1,
      delay: 2000,
      duration: 1000,
    }).start() //=> this.move())
  }
    
    static navigationOptions = {
        header: null
    }
  render() {
   const movingmarginTop = this.marginTopValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 75]
        //outputRange: [0, 1]
      })  
        const delayv = this.delayValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
    return (
    

        <View style={styles.slide1}>
      <LinearGradient
          colors={['darkred', 'black','darkred']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            width: '100%'
          }}
        />

    <Text style={styles.text}> 
            are you a student or an organization?
          </Text>

  
       
     
      <TouchableOpacity style = {{top: 320, position: 'absolute', left: 20}}> 
      <Animated.Image 
    style = {{height: 50, width: 50,  borderRadius: 25, position: 'absolute', left: 22,marginTop: movingmarginTop}}
    source = {{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Man_Bowing_Emoji_large.png?v=1571606063'}}/>
      
      <Text style={{top: 40, fontSize: 14, color: 'white'}}> 
            click for student
          </Text>
       </TouchableOpacity> 
    
      
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrganizationSignup')} 
     style = {{top: 320, position: 'absolute', right: 20}}> 
    <Animated.Image 
    style = {{height: 50, width: 50,  borderRadius: 25, position: 'absolute', right: 45,marginTop: movingmarginTop}}
    source = {{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Briefcase_Emoji_large.png?v=1571606066'}}/>
       
    
    <Text style={{top: 40, fontSize: 14, color: 'white',}}> 
            click for organization
          </Text>
</TouchableOpacity>


        </View> 
     
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {top:0},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
   slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    top: 100,
    margin: 50
  }
});