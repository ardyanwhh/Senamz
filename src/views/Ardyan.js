import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import usStyle from '../assets/css/usStyle';

export default Ardyan = () => (
  <SafeAreaView style={usStyle.container}>
    <View style={usStyle.profilePicContainer}>
      <Image style={usStyle.profilePic} source={require('../assets/img/Ardyan.jpg')}/>
    </View>
    <View style={usStyle.nameTextContainer}>
      <Text style={usStyle.nameText}>Ardyan Wahyu Atmaji</Text>
    </View>
    <View>
      <Text>{`Mobile & Backend Developer`}</Text>
    </View>
    <View style={usStyle.emailTextContainer}>
      <Text style={usStyle.emailText}>ardyanwhh@icloud.com</Text>
    </View>
  </SafeAreaView>
);