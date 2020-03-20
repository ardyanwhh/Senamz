import React, {useState, useEffect} from 'react';
import {View, Text, AsyncStorage, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export default Finish = ({navigation}) => {
  const [score, setScore] = useState(0);

  const _getScore = async () => {
    const email = await AsyncStorage.getItem('email');
    const username = email.split('@');

    firebase
      .database()
      .ref(`users/${username[0]}/score`)
      .on('value', snap => {
        setScore(snap.val());
      });
  };

  useEffect(() => {
    _getScore();
  });

  return (
    <View>
      <View>
        <Text>Skor Anda</Text>
      </View>
      <View>
        <Text>{score}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text>kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
