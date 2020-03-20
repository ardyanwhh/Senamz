import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';
import aboutStyle from '../assets/css/aboutStyle';

export default AboutUs = ({navigation}) => {
  const isDarkMode = useDarkMode();

  return (
    <View style={isDarkMode ? aboutStyle.containerDark : aboutStyle.container}>
      <View style={aboutStyle.logoImageContainer}>
        <Image
          style={aboutStyle.logoImage}
          source={require('../assets/img/sejarah.png')}
        />
      </View>
      <View style={aboutStyle.logoTextContainer}>
        <Text style={aboutStyle.logoText}>Senamz</Text>
      </View>
      <View style={aboutStyle.profilePicContainer}>
        <TouchableOpacity style={aboutStyle.profilePicButton}
          onPress={() => navigation.navigate('Airlangga')}
        >
          <Image
            style={aboutStyle.profilePic}
            source={require('../assets/img/Airlangga.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={aboutStyle.profilePicButton}
          onPress={() => navigation.navigate('Alanzahir')}
        >
          <Image
            style={aboutStyle.profilePic}
            source={require('../assets/img/Alanzahir.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={aboutStyle.profilePicButton}
          onPress={() => navigation.navigate('Ana')}
        >
          <Image
            style={aboutStyle.profilePic}
            source={require('../assets/img/Ana.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={aboutStyle.profilePicContainer}>
        <TouchableOpacity
          style={aboutStyle.profilePicButton}
          onPress={() => navigation.navigate('Ardyan')}>
          <Image
            style={aboutStyle.profilePic}
            source={require('../assets/img/Ardyan.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={aboutStyle.profilePicButton}
          onPress={() => navigation.navigate('Awalisyah')}
        >
          <Image
            style={aboutStyle.profilePic}
            source={require('../assets/img/Awalisyah.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
