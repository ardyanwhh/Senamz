import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export default useAndroidDeclare = darkMode => {
  let mode;

  const _getAndroidTheme = async () => {
    mode = Boolean(await AsyncStorage.getItem('darkMode'));
  };

  const _setAndroidTheme = async () => {
    await AsyncStorage.setItem('darkMode', toString(darkMode));
  };

  useEffect(() => {
    _getAndroidTheme();
    _setAndroidTheme();
  }, [darkMode]);

  return mode;
};