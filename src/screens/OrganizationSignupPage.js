import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TextInput } from 'react-native';
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';
import DropdownMenu from 'react-native-dropdown-menu';
 import Swipeout from 'react-native-swipeout';

var deviceWidth = Dimensions.get('window').width; 
 var TypeOrg = [[ "Professional", "Social", "Fraternity/Sororties", "Intramural", "Academic",]];
var swipeoutBtns = [
  {
    text: 'Button'
  }
]


  export default class OrganizationSignupPage extends React.Component {
      
    static navigationOptions = {
        header: null
    }
  render() {
   
    return (
      <Swiper style={styles.wrapper} >

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
            enter your organization's name
          </Text>

    <Image 
    style = {{height: 60, width: 60, borderRadius: 30, top: -60 }}
    source = {{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Earth_Globe_Americas_Emoji_large.png?v=1571606063'}}/>
        <TextInput
                  style={{  width: 300,
                  top: 60,
                    height: 55,
                    backgroundColor: 'black',
                    opacity: 0.6,
                    marginLeft: 30,
                    marginRight: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10, 
                    borderColor: 'white',
                  }}
                  placeholder='type here'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                
                  
                />

                

               
   
   </View>


        <View style={styles.slide2}>
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

          <Text style={styles.text}>enter your president's name</Text>

           <Image 
    style = {{height: 60, width: 60, borderRadius: 30, top: -60 }}
    source = {{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Queen_s_Crown_Emoji_large.png?v=1571606064'}}/>

              <TextInput
                      style={{  width: 300,
                        height: 55,
                        backgroundColor: 'black',
                        opacity: 0.6,
                        marginLeft: 30,
                        marginRight: 30,
                        padding: 8,
                        color: 'white',
                        borderRadius: 14,
                        marginTop: 10,
                        top: 90}}
                      placeholder='first name'
                      autoCapitalize="none"
                      placeholderTextColor='white'
                     />

                       <TextInput
                      style={{  top: 100, 
                      width: 300,
                        height: 55,
                        backgroundColor: 'black',
                        opacity: 0.6,
                        marginLeft: 30,
                        marginRight: 30,
                        padding: 8,
                        color: 'white',
                        borderRadius: 14,
                        marginTop: 10}}
                      placeholder='last name'
                      autoCapitalize="none"
                      placeholderTextColor='white'
                     />

        </View>


        <View style={styles.slide3}>
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
 enter your full college name 
 </Text>

 <Image 
    style = {{height: 60, width: 60, borderRadius: 30, top: -60 }}
    source = {{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Graduation_Cap_Emoji_large.png?v=1571606064'}}/>
 <TextInput
 style={{ width: 350,
 height: 55,
 top: 90,
 backgroundColor: 'black',
 marginLeft: 30,
 marginRight: 30,
 opacity: 0.6,
 padding: 8,
 color: 'white',
 borderRadius: 14,
 marginTop: 10}}
 placeholder='type here'
 autoCapitalize="none"
 placeholderTextColor='white'

 />
        </View>

        
        <View style={styles.slide4}>
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
        <Text style={styles.text}> select an organization category </Text>

<View style = {{height: 140, width: 240, top: 100}}> 
        <DropdownMenu
 
 style={{flex: 1, position: 'absolute', top: 100, height: 50, width: 120, opacity: 0.5, borderRadius: 20}}
 bgColor={'white'}
 tintColor={'black'}
 activityTintColor={'green'}
 // arrowImg={} 
 // checkImage={} 
 //optionTextStyle={{color: 'black'}}
 titleStyle={{color: 'white'}} 
 // maxHeight={300} 
  data={TypeOrg}
 />
 </View>

 <Image 
    style = {{height: 60, width: 60, borderRadius: 30, position: 'absolute', top:270, left: 155 }}
    source = {{uri:'https://cdn.shopify.com/s/files/1/1061/1924/products/Star_Emoji_large.png?v=1571606063'}}/>
 

        </View> 
      </Swiper>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {top:0},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
    top: 200
  }
});