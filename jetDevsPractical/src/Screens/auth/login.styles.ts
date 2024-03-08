import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  loginContainer: {
    height: height,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    padding: 40,
    backgroundColor: colors.white,
    minHeight: 300,
    borderRadius: 10,
    height: '80%',
    marginTop: 60,
  },
  topCircleContainer: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    top: -40,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  logoIcon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 100,
    alignSelf: 'center',
  },
  button: {
    marginTop: 50,
  },
  error: {
    color: colors.red,
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex',
  },
});

export default styles;
