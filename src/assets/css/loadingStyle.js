import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const square = (screenWidth * screenHeight) / 1000;

export default StyleSheet.create({
  parentContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: screenWidth,
    height: screenHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  container: {
    padding: square / 18.55,
    width: square/2,
    height: square/3,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: square/37.1
  },
  containerDark: {
    padding: square / 18.55,
    backgroundColor: 'black',
    width: square/2,
    height: square/3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: square/37.1
  },
});
