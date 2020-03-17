import React from 'react';
import {AsyncStorage, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDarkMode} from 'react-native-dark-mode';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
import headerStyle from '../assets/css/headerStyle';
import footerStyle from '../assets/css/footerStyle';
import Profile from '../views/Profile';
import Quiz from '../views/Quiz';
import AboutUs from '../views/AboutUs';

export default Router = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const isDarkMode = useDarkMode();

  const headerStyleConsume = {
    background: 
      Platform.OS !== 'android'
        ? isDarkMode ? headerStyle.onDark : headerStyle.onLight
        : headerStyle.android,
    title: 
      Platform.OS !== 'android'
        ? isDarkMode 
          ? headerStyle.onDarkBackground 
          : headerStyle.onLightBackground
        : headerStyle.onDarkBackground
  };

  const footerStyleConsume = {
    icon: 
      Platform.OS !== 'android'  
        ? isDarkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
        : 'rgba(255,255,255,0.5)',
    activeIcon: 
      Platform.OS !== 'android'
        ? 'rgba(230,71,74,1)'
        : 'white',
    background: 
      Platform.OS !== 'android'
        ? isDarkMode ? footerStyle.onDark : footerStyle.onLight
        : footerStyle.android
  };

  const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: `Beranda`,
          headerStyle: headerStyleConsume.background,
          headerTitleStyle: headerStyleConsume.title,
        }}
      />
    </Stack.Navigator>
  );

  const QuizStack = () => (
    <Stack.Navigator initialRouteName="Quiz">
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerTitle: `Kuis`,
          headerStyle: headerStyleConsume.background,
          headerTitleStyle: headerStyleConsume.title,
        }}
      />
    </Stack.Navigator>
  );

  const ProfileStack = () => (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profle"
        component={Profile}
        options={{
          headerTitle: `Profil`,
          headerStyle: headerStyleConsume.background,
          headerTitleStyle: headerStyleConsume.title,
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerTitle: `Tentang Kami`,
          headerStyle: headerStyleConsume.background,
          headerTitleStyle: headerStyleConsume.title,
        }}
      />
    </Stack.Navigator>
  );

  const Main = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: footerStyleConsume.activeIcon,
        inactiveTintColor: footerStyleConsume.icon,
        style: footerStyleConsume.background,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name == 'Quiz') {
            iconName = focused ? 'ios-navigate' : 'ios-navigate';
          } else if (route.name == 'Profile') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Beranda'
        }}
      />
      <Tab.Screen 
        name="Quiz" 
        component={QuizStack} 
        options={{
          tabBarLabel: 'Kuis'
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{
          tabBarLabel: 'Profil'
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
