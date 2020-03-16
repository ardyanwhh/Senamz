import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  AsyncStorage,
} from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';
import homeStyle from '../assets/css/homeStyle';

export default Home = ({navigation}) => {
  let isDarkMode = useDarkMode();

  const [darkMode, setDarkMode] = useState(false);

  const _setDarkMode = async () => {
    setDarkMode(Boolean(await AsyncStorage.getItem('darkMode')))
  };

  _setDarkMode();

  Platform.OS === 'android' ? (isDarkMode = darkMode) : false;

  return (
    <View style={isDarkMode ? homeStyle.containerDark : homeStyle.container}>
      <View style={homeStyle.buttonContainer}>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/sejarah.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Sejarah
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/definisi.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Definisi
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={homeStyle.buttonContainer}>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/manfaat.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Manfaat
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/gerakan.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Gerakan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={homeStyle.buttonContainer}>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/jenis.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Jenis
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/gejala-fisik.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Gejala Fisik
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={homeStyle.buttonContainer}>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/gerakan-kaki-tangan.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Gerakan Tangan
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode ? homeStyle.buttonDark : homeStyle.button}>
          <View style={homeStyle.buttonImageContainer}>
            <Image
              style={homeStyle.buttonImage}
              source={require('../assets/img/tutorial.png')}
            />
          </View>
          <View style={homeStyle.buttonTextContainer}>
            <Text
              style={
                isDarkMode ? homeStyle.buttonTextDark : homeStyle.buttonText
              }>
              Tutorial
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
