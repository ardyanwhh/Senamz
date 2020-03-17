import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import firebase from 'firebase';
import {useDarkMode} from 'react-native-dark-mode';
import registerStyle from '../assets/css/registerStyle';

export default Register = ({navigation}) => {
  let isDarkMode = useDarkMode();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const _handleRegister = async () => {
    const username = email.split('@');

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        firebase
          .database()
          .ref()
          .child(`users/${username[0]}`)
          .set({
            name: name,
            username: username[0]
          })
          .then(async () => {
            await navigation.navigate('Login');
            Alert.alert('Berhasil', 'Ayo masuk!');
          });
      })
      .catch(error => {
        Alert.alert(error.code, error.message);
      });
  };

  const _toLogin = async () => {
    await navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      <View
        style={
          isDarkMode ? registerStyle.containerDark : registerStyle.container
        }>
        <View style={registerStyle.thumbnailContainer}>
          <Image
            style={registerStyle.thumbnail}
            source={require('../assets/img/login-register.png')}
          />
        </View>
        <View style={registerStyle.logoTextContainer}>
          <Text style={registerStyle.logoText}>Senamz</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={registerStyle.formContainer}>
          <View style={registerStyle.inputContainer}>
            <TextInput
              style={isDarkMode ? registerStyle.inputDark : registerStyle.input}
              placeholder="Nama Lengkap"
              placeholderTextColor={
                isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
              }
              onChangeText={name => setName(name)}
              value={name}
              onSubmitEditing={() => _handleRegister()}
            />
          </View>
          <View style={registerStyle.inputContainer}>
            <TextInput
              style={isDarkMode ? registerStyle.inputDark : registerStyle.input}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor={
                isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
              }
              onChangeText={email => setEmail(email)}
              value={email}
              onSubmitEditing={() => _handleRegister()}
            />
          </View>
          <View style={registerStyle.inputContainer}>
            <TextInput
              style={isDarkMode ? registerStyle.inputDark : registerStyle.input}
              placeholder="Kata Sandi"
              autoCapitalize="none"
              secureTextEntry
              placeholderTextColor={
                isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
              }
              onChangeText={password => setPassword(password)}
              value={password}
              onSubmitEditing={() => _handleRegister()}
            />
          </View>
          <View style={registerStyle.inputContainer}>
            <TextInput
              style={isDarkMode ? registerStyle.inputDark : registerStyle.input}
              placeholder="Ulangi Kata Sandi"
              autoCapitalize="none"
              secureTextEntry
              placeholderTextColor={
                isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
              }
              onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
              value={repeatPassword}
              onSubmitEditing={() => _handleRegister()}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={registerStyle.masukButtonContainer}>
          <TouchableOpacity
            style={registerStyle.masukButton}
            onPress={() => _handleRegister()}>
            <Text style={registerStyle.masukButtonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <View style={registerStyle.toLoginTextContainer}>
          <Text
            style={
              isDarkMode
                ? registerStyle.toLoginKetTextDark
                : registerStyle.toLoginKetText
            }>
            Sudah punya akun?
          </Text>
          <Text style={registerStyle.toLoginText} onPress={() => _toLogin()}>
            Masuk disini.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
