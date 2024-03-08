import {Platform, StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: colors.lightBlue,
    minHeight: 300,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    marginTop: 10,
  },
  topCircleContainer: {
    backgroundColor: colors.white,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: Platform.OS === 'android' ? 10 : 50,
  },
  logoIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  itemSaperator: {
    marginBottom: 10,
  },
});

export default styles;
