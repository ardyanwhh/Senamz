import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import usStyle from '../assets/css/usStyle';

export default Alanzahir = () => (
  <SafeAreaView style={usStyle.container}>
    <View style={usStyle.profilePicContainer}>
      <Image style={usStyle.profilePic} source={require('../assets/img/Alanzahir.jpg')}/>
    </View>
    <View style={usStyle.nameTextContainer}>
      <Text style={usStyle.nameText}>Alanzahir Rai Faiq Marshall</Text>
    </View>
    <View>
      <Text>{`Content Creator`}</Text>
    </View>
    <View style={usStyle.emailTextContainer}>
      <Text style={usStyle.emailText}>marshallacal45@gmail.com</Text>
    </View>
  </SafeAreaView>
);