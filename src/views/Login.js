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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import {useDarkMode} from 'react-native-dark-mode';
import firebase from 'firebase';
import loginStyle from '../assets/css/loginStyle';

export default Login = ({navigation}) => {
  let isDarkMode = useDarkMode();

  const [darkMode, setDarkMode] = useState(false);

  const _setDarkMode = async () => {
    setDarkMode(Boolean(await AsyncStorage.getItem('darkMode')))
  };

  _setDarkMode();

  Platform.OS !== 'android' ? (isDarkMode = darkMode) : false;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handleLogin = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        await AsyncStorage.setItem('email', email);
        await navigation.navigate('Main');
      })
      .catch(error => {
        Alert.alert(error.code, error.message);
      });
  };

  const _ifUserExist = async () => {
    const user = await AsyncStorage.getItem('email');
    user ? navigation.navigate('Main') : false;
  };

  const _toRegister = async () => {
    await navigation.navigate('Register');
  };

  useEffect(() => {
    _ifUserExist();
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      <View
        style={isDarkMode ? loginStyle.containerDark : loginStyle.container}>
        <View style={loginStyle.thumbnailContainer}>
          <Image
            style={loginStyle.thumbnail}
            source={require('../assets/img/login-register.png')}
          />
        </View>
        <View style={loginStyle.logoTextContainer}>
          <Text style={loginStyle.logoText}>Senamz</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={loginStyle.formContainer}>
          <View style={loginStyle.inputContainer}>
            <TextInput
              style={isDarkMode ? loginStyle.inputDark : loginStyle.input}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor={
                isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
              }
              onChangeText={email => setEmail(email)}
              value={email}
              onSubmitEditing={() => _handleLogin()}
            />
          </View>
          <View style={loginStyle.inputContainer}>
            <TextInput
              style={isDarkMode ? loginStyle.inputDark : loginStyle.input}
              placeholder="Kata Sandi"
              autoCapitalize="none"
              secureTextEntry
              placeholderTextColor={
                isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
              }
              onChangeText={password => setPassword(password)}
              value={password}
              onSubmitEditing={() => _handleLogin()}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={loginStyle.masukButtonContainer}>
          <TouchableOpacity
            style={loginStyle.masukButton}
            onPress={() => _handleLogin()}>
            <Text style={loginStyle.masukButtonText}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyle.toRegisterTextContainer}>
          <Text
            style={
              isDarkMode
                ? loginStyle.toRegisterKetTextDark
                : loginStyle.toRegisterKetText
            }>
            Belum punya akun?
          </Text>
          <Text style={loginStyle.toRegisterText} onPress={() => _toRegister()}>
            Daftar disini.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
