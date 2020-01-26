import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import  LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PostScreen from './src/screens/PostScreen';
import MessageScreen from './src/screens/MessageScreen';
import NotificationScreen from './src/screens/NotificationScreen';

import FirebaseKeys from './config/config';

import * as firebase from 'firebase';

var firebaseConfig = FirebaseKeys;
// Initialize Firebase
if(! firebase.apps.length){
  firebase.initializeApp({firebaseConfig});
}



const AppContainer = createStackNavigator(
  {
     default:createBottomTabNavigator({

      Home:{

        screen: HomeScreen,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Ionicons name = "ios-home" size={24} color={tintColor}/>
        }
      },
      Meassage:{
        screen: MessageScreen,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Ionicons name = "ios-chatbox" size={24} color={tintColor}/>
        }
      },
      Post:{
        screen: PostScreen,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => (<Ionicons 
          name = "ios-add-circle" 
          size={48} 
          color= "#E9446A"
          style={{
              shadowColor: "#E9446A",
              shadowOffset: {width:0, height:0},
              shadowRadius: 10,
              shadowOpacity: 0.3
          }}
          />)
        }
      },
      Notification:{
        screen: NotificationScreen,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Ionicons name = "ios-notifications" size={24} color={tintColor}/>
        }
      },
      Profile:{
        screen: ProfileScreen,
        navigationOptions:{
          tabBarIcon: ({tintColor}) => <Ionicons name = "ios-person" size={24} color={tintColor}/>
        }
      }
   },
   {
    defaultNavigationOptions:{
        tabBarOnPress:({navigation, defaultHandler}) => {
          if(navigation.state.key==="Post"){
            navigation.navigate("postModal");
          }else{
            defaultHandler();
          }
        }
    },

     tabBarOptions:{
       activeTintColor: "#161F3D",
       inactiveTintColor: "#BBBBC4",
       showLabel: false
     },

     initialRouteName: "Profile"
   }

     ),
     postModal: {
       screen: PostScreen
     }
  },
  {
    mode: "modal",
    headerMode: "none"
  }

);


const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
},
  {
    initialRouteName: "Register"
  }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppContainer,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
