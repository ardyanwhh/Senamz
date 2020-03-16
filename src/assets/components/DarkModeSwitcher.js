import React from 'react';
import { Platform } from 'react-native';
import { Switch, View } from 'react-native';

export default DarkModeSwitcher = (value, setValue) => {
  return (
    <View>
      {Platform !== 'android'
        ? <Switch
          onValueChange={setValue}
          value={value}
        />
        : false
      }
    </View>
  );
};