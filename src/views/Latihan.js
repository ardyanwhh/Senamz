import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, AsyncStorage} from 'react-native';
import firebase from 'firebase';
import latihanItems from '../data/latihan_items';
import latihanUjianStyle from '../assets/css/latihanUjianStyle';

export default Latihan = ({navigation}) => {
  const [index, setIndex] = useState(0);

  const items = latihanItems[index];
  const ans = [];

  const [answers, setAnswers] = useState(ans);
  const [correctCount, setCorrectCount] = useState(0);
  const [question, setQuestion] = useState('');
  const [answerSaved, setAnswerSaved] = useState('');
  const [answered, isAnswered] = useState(false);

  const _getQuizData = () => {
    setQuestion(items.question);

    for (let indexAns = 0; indexAns < items.answer.length; indexAns++) {
      ans.push(items.answer[indexAns].text);
    }
  };

  const _ifFinished = async () => {
    if (index == latihanItems.length-1) {
      const email = await AsyncStorage.getItem('email');
      const username = email.split('@');
      
      firebase
        .database()
        .ref()
        .child(`users/${username[0]}`)
        .set({
          score: correctCount
        });
      
      navigation.navigate('Finish');
    } else {
      setIndex(index + 1);
    }
  };

  const _nextPressed = () => {
    _ifFinished();
    setAnswers(ans);
    isAnswered(false);
  };

  const _checkAnswer = data => {
    data == items.answer[1].text 
      ? setCorrectCount(correctCount + 1)
      : false;
    setAnswerSaved(data);
    isAnswered(true);
  };

  useEffect(() => {
    _getQuizData();
  });

  return (
    <SafeAreaView style={latihanUjianStyle.container}>
      <View style={latihanUjianStyle.questionContainer}>
        <Text style={latihanUjianStyle.questionText}>{question}</Text>
      </View>
      <View style={latihanUjianStyle.answerButtonContainer}>
        {answers.map(data => (
          <View style={latihanUjianStyle.perButton}>
            <TouchableOpacity
              style={
                data == answerSaved
                  ? latihanUjianStyle.answerButtonPressed
                  : latihanUjianStyle.answerButton
              }
              onPress={() => _checkAnswer(data)}
              disabled={answered}>
              <Text
                style={
                  data == answerSaved
                    ? latihanUjianStyle.answerButtonTextPressed
                    : latihanUjianStyle.answerButtonText
                }>
                {data}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {answered == true ? (
        <View style={latihanUjianStyle.nextButtonContainer}>
          <TouchableOpacity 
            style={latihanUjianStyle.nextButton}
            onPress={() => _nextPressed()}
          >
            <Text 
              style={latihanUjianStyle.nextButtonText}
            >
              Selanjutnya
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        false
      )}
    </SafeAreaView>
  );
};
