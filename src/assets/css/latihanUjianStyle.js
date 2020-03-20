import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const square = (screenWidth * screenHeight) / 1000;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: screenWidth,
    height: screenHeight,
    justifyContent: "center",
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    padding: square / 18.55,
    backgroundColor: 'black',
    width: screenWidth,
    height: screenHeight,
  },
  questionContainer: {
    alignItems: "center",
    paddingBottom: square/8,
  },
  questionText: {
    fontSize: square/17,
    fontWeight: "bold",
    width: square
  },
  answerButtonContainer: {
    paddingBottom: square/18,
    alignItems: "center"
  },
  answerButton: {
    borderColor: 'rgba(230,71,74,1)',
    borderWidth: 2,
    borderRadius: square / 37.1,
    height: square / 7,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: square / 1.2,
  },
  answerButtonPressed: {
    borderColor: 'rgba(230,71,74,1)',
    backgroundColor: 'rgba(230,71,74,1)',
    borderWidth: 2,
    borderRadius: square / 37.1,
    height: square / 7,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: square / 1.2,
  },
  answerButtonPressedCorrect: {
    borderColor: 'rgba(230,71,74,1)',
    backgroundColor: 'green',
    borderWidth: 2,
    borderRadius: square / 37.1,
    height: square / 7,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: square / 1.2,
  },
  answerButtonText: {
    fontSize: square/25
  },
  answerButtonTextPressed: {
    fontSize: square/25,
    color: 'white'
  },
  perButton: {
    paddingBottom: square/37
  },
  nextButtonContainer: {
    alignItems: "center"
  },
  nextButton: {
    borderColor: 'rgba(230,71,74,1)',
    backgroundColor: 'rgba(230,71,74,1)',
    borderWidth: 2,
    borderRadius: square / 37.1,
    height: square / 7,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: square / 1.2,
  },
  nextButtonText: {
    fontSize: square/25,
    color: 'white'
  }
});
