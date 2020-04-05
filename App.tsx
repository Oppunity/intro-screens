import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';  

import LogInPage from './src/screens/LogInPage'
import HomeScreenPage from './src/screens/HomeScreenPage'
import SignUpPage from './src/screens/SignUpPage'
import OrganizationSignupPage from './src/screens/OrganizationSignupPage'

const StackNavigator = createStackNavigator({

  HomeScreenPage: HomeScreenPage,
  LogIn: LogInPage,
  SignUp: SignUpPage,
  OrganizationSignup: OrganizationSignupPage,
  
 
},

  {
  initialRoute: 'HomeScreenPage',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}

)

const Router = createAppContainer(StackNavigator)

export default function App() {
  return (

    <Router/>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
