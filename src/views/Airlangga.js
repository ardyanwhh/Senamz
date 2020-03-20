import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import usStyle from '../assets/css/usStyle';

export default Airlangga = () => (
  <SafeAreaView style={usStyle.container}>
    <View style={usStyle.profilePicContainer}>
      <Image style={usStyle.profilePic} source={require('../assets/img/Airlangga.jpg')}/>
    </View>
    <View style={usStyle.nameTextContainer}>
      <Text style={usStyle.nameText}>Airlangga Satria Dewantara</Text>
    </View>
    <View>
      <Text>{`Mobile Developer`}</Text>
    </View>
    <View style={usStyle.emailTextContainer}>
      <Text style={usStyle.emailText}>airlanggasatriadewantara@gmail.com</Text>
    </View>
  </SafeAreaView>
);