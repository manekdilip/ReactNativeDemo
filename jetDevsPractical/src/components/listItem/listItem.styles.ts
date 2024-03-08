import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '97%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  avatar: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
  },
  avatarContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: -28,
    marginRight: 20,
  },
  name: {
    width: '75%',
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: colors.grey,
  },
  location: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: '400',
    marginBottom: 5,
  },
  hobbyContainer: {
    padding: 4,

    borderRadius: 3,
    marginRight: 5,
  },
  hobbyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  hobbyText: {
    fontSize: 12,
    color: colors.grey,
    fontWeight: '300',
    textTransform: 'capitalize',
  },
  starIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: colors.pink,
  },
  favBtn: {
    alignSelf: 'flex-start',
    right: 0,
  },
});

export default styles;
