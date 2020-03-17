import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const square = (screenHeight * screenWidth) / 1000;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: square / 18.55,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    padding: square / 18.55,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  thumbnailContainer: {
    paddingBottom: square / 25,
    alignItems: 'center',
  },
  thumbnail: {
    borderRadius: 0,
    width: square / 1.61,
    height: square / 1.63,
  },
  logoTextContainer: {
    paddingBottom: square / 25,
    alignItems: 'center',
  },
  logoText: {
    color: 'rgba(230,71,74,1)',
    fontWeight: 'bold',
    fontSize: square / 11,
  },
  formContainer: {
    paddingBottom: square / 13,
  },
  inputContainer: {
    borderBottomColor: 'transparent',
    paddingBottom: square / 24,
  },
  input: {
    borderWidth: 1.5,
    borderColor: 'rgba(230,71,74,1)',
    borderRadius: square / 37.1,
    paddingLeft: square / 37.1,
    height: square / 6.3,
    fontSize: square / 20,
    width: square,
  },
  inputDark: {
    borderWidth: 1.5,
    borderColor: 'rgba(230,71,74,1)',
    borderRadius: square / 37.1,
    paddingLeft: square / 37.1,
    height: square / 6.3,
    color: 'white',
    fontSize: square / 20,
    width: square,
  },
  masukButtonContainer: {
    alignItems: 'center',
    paddingBottom: square / 64.2,
  },
  masukButton: {
    backgroundColor: 'rgba(230,71,74,1)',
    borderRadius: square / 37.1,
    height: square / 7,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width: square / 1.2,
  },
  masukButtonText: {
    color: 'white',
    fontSize: square / 20,
  },
  toRegisterTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toRegisterKetText: {
    paddingEnd: square / 74.2,
    fontSize: square / 20,
    color: 'rgba(0,0,0,0.8)',
  },
  toRegisterKetTextDark: {
    paddingEnd: square / 74.2,
    fontSize: square / 20,
    color: 'rgba(255,255,255,0.8)',
  },
  toRegisterText: {
    fontSize: square / 20,
    color: 'rgba(230,71,74,1)',
  },
});
