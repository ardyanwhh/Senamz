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

  Platform.OS === 'android' ? (isDarkMode = darkMode) : false;

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

  useEffect(() => {
    _getUser();

    return () => {
      func = async () => {
        !darkMode
          ? await AsyncStorage.setItem('darkMode', '')
          : await AsyncStorage.setItem('darkMode', toString(darkMode));
      };
      func();
    };
  }, [darkMode]);

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
      <View>
        <Switch onValueChange={() => setDarkMode(!darkMode)} value={darkMode}/>
      </View>
      <View style={profileStyle.tentangKamiContainer}>
        <Text style={profileStyle.tentangKamiText} onPress={() => _toAboutUs()}>
          Tentang Kami
        </Text>
      </View>
    </View>
  );
};
