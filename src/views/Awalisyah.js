import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import usStyle from '../assets/css/usStyle';

export default Awalisyah = () => (
  <SafeAreaView style={usStyle.container}>
    <View style={usStyle.profilePicContainer}>
      <Image style={usStyle.profilePic} source={require('../assets/img/Awalisyah.jpg')}/>
    </View>
    <View style={usStyle.nameTextContainer}>
      <Text style={usStyle.nameText}>Awalisyah Nafi'unnisa</Text>
    </View>
    <View>
      <Text>{`UIUX Designer`}</Text>
    </View>
    <View style={usStyle.emailTextContainer}>
      <Text style={usStyle.emailText}>awalisyah09.9h@gmail.com</Text>
    </View>
  </SafeAreaView>
);