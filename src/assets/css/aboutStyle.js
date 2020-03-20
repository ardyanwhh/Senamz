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
    alignItems: "center",
    paddingTop: square/8,
    backgroundColor: 'white',
  },
  containerDark: {
    display: 'flex',
    padding: square / 18.55,
    backgroundColor: 'black',
    width: screenWidth,
    paddingTop: square/8,
    alignItems: "center",
    height: screenHeight,
  },
  logoTextContainer: {
    paddingBottom: square / 15,
    alignItems: 'center',
  },
  logoText: {
    color: 'rgba(230,71,74,1)',
    fontWeight: 'bold',
    fontSize: square / 11,
  },
  logoImageContainer: {
    paddingBottom: square/25
  },
  logoImage: {

  },
  profilePicContainer: {
    display: 'flex',
    flexDirection: "row",
  },
  profilePicButton: {
    paddingLeft: square/28,
    paddingRight: square/28
  },
  profilePic: {
    width: square/4,
    height: square/4,
    borderRadius: square
  },
  logoTSContainer: {

  },
  logoTS: {

  }
});
