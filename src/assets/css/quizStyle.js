import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const square = (screenWidth * screenHeight) / 1000;

export default StyleSheet.create({
  container: {
    display: 'flex',
    padding: square / 18.55,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'white',
  },
  containerDark: {
    display: 'flex',
    padding: square / 18.55,
    backgroundColor: 'black',
    width: screenWidth,
    height: screenHeight,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    paddingTop: square/23,
    paddingBottom: square/27,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: square/30,
    width: square/2.5,
    height: square/3,
    marginLeft: square/20,
    marginRight: square/20,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  buttonDark: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: square/30,
    width: square/2.5,
    height: square/3,
    marginLeft: square/20,
    marginRight: square/20,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  buttonText: {
    fontSize: square/25,
    color: 'rgba(0,0,0,0.9)'
  },
  buttonTextDark: {
    fontSize: square/25,
    color: 'rgba(255,255,255,0.9)'
  },
  buttonImage: {
    width: square/5,
    height: square/5,
  },
  buttonTextContainer: {},
  buttonImageContainer: {
    paddingBottom: square/60
  }
});
