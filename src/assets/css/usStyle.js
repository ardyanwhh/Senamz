import { StyleSheet, Dimensions } from "react-native";

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
    alignItems: "center",
  },
  containerDark: {
    display: 'flex',
    padding: square / 18.55,
    backgroundColor: 'black',
    width: screenWidth,
    height: screenHeight,
  },
  profilePicContainer: {
    paddingTop: square/12,
    paddingBottom: square/9
  },
  profilePic: {
    borderRadius: square,
    width: square/1.5,
    height: square/1.5
  },
  nameTextContainer: {
    paddingBottom: square/60
  },
  nameText: {
    fontWeight: "bold",
    fontSize: square/17
  },
  emailTextContainer: {
    paddingTop: square/10
  },
  emailText: {
    color: 'rgba(0,0,0,0.5)'
  }
});