import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Platform,
  Switch,
} from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase';
import profileStyle from '../assets/css/profileStyle';

export default Profile = ({navigation}) => {
  let isDarkMode = useDarkMode();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const _getAndroidDarkMode = async () => {
    Platform.OS === 'android'
      ? (isDarkMode = darkMode)
      : false;
  };

  const _handleLogout = async () => {
    Alert.alert('Peringatan', 'Ingin tetap keluar?', [
      {
        text: 'Kembali',
      },
      {
        text: 'Keluar',
        onPress: async () => {
          firebase
            .auth()
            .signOut()
            .then(async () => {
              await AsyncStorage.removeItem('email');
              await navigation.navigate('Login');
            });
        },
      },
    ]);
  };

  const _getUser = async () => {
    setEmail(await AsyncStorage.getItem('email'));

    const username = email.split('@');

    firebase
      .database()
      .ref(`users/${username[0]}/name`)
      .on('value', snap => {
        setName(snap.val());
      });
  };

  const _toAboutUs = async () => {
    await navigation.navigate('AboutUs');
  };

  const _darkModeSwitcher = async () => {
    if (Platform.OS === "android") {(
      <Switch
        onValueChange={() => setDarkMode(true)}
        value={darkMode}
      />
    )}
  };

  useEffect(() => {
    _getUser();
    _getAndroidDarkMode();
  });

  return (
    <View
      style={isDarkMode ? profileStyle.containerDark : profileStyle.container}>
      <View style={profileStyle.imageContainer}>
        <Image
          style={profileStyle.image}
          source={require('../assets/img/profile.png')}
        />
      </View>
      <View style={profileStyle.nameTextContainer}>
        <Text
          style={
            isDarkMode ? profileStyle.nameTextDark : profileStyle.nameText
          }>
          {name}
        </Text>
      </View>
      <View style={profileStyle.emailTextContainer}>
        <Text
          style={
            isDarkMode ? profileStyle.emailTextDark : profileStyle.emailText
          }>
          {email}
        </Text>
      </View>
      <View style={profileStyle.tentangKamiContainer}></View>
      <View style={profileStyle.logoutButtonContainer}>
        <TouchableOpacity
          style={profileStyle.logoutButton}
          onPress={() => _handleLogout()}>
          <Text style={profileStyle.logoutButtonText}>Keluar</Text>
        </TouchableOpacity>
      </View>
      {_darkModeSwitcher()}
      <View style={profileStyle.tentangKamiContainer}>
        <Text style={profileStyle.tentangKamiText} onPress={() => _toAboutUs()}>
          Tentang Kami
        </Text>
      </View>
    </View>
  );
};
