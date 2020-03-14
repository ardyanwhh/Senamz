import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const square = (screenWidth * screenHeight) / 1000;

export default StyleSheet.create({
  container: {
    display: 'flex',
    padding: square / 18.55,
    paddingTop: square / 18.55,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'white',
  },
  containerDark: {
    display: 'flex',
    padding: square / 18.55,
    paddingTop: square / 18.55,
    backgroundColor: 'black',
    width: screenWidth,
    height: screenHeight,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: square / 18.55,
    paddingBottom: square / 13.55,
  },
  image: {
    width: square / 1.32,
    height: square / 1.83,
  },
  nameTextContainer: {
    alignItems: 'center',
    paddingBottom: square / 26,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: square / 17,
    color: 'black',
  },
  nameTextDark: {
    fontWeight: 'bold',
    fontSize: square / 17,
    color: 'white',
  },
  emailTextContainer: {
    alignItems: 'center',
    paddingBottom: square / 5,
  },
  emailText: {
    fontSize: square / 25,
    color: 'rgba(0,0,0,0.8)',
  },
  emailTextDark: {
    fontSize: square / 25,
    color: 'rgba(255,255,255,0.8)',
  },
  tentangKamiContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    bottom: 185,
    position: "absolute",
    width: screenWidth,
  },
  tentangKamiText: {
    color: 'tomato'
  },
  logoutButtonContainer: {
    alignItems: 'center',
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    width: square / 1.9,
    height: square / 7,
    borderRadius: square / 37.1,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: square / 23.5,
  },
});
