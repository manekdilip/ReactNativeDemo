/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/home/Home';
import {Image, Platform, Text} from 'react-native';
import icons from '../assets/icons';
import colors from '../themes/colors';
import Favourite from '../Screens/favourite/Favourite';

const Tab = createBottomTabNavigator();

const LabelComponent = ({focused, label}: any) => {
  return (
    <Text
      style={{
        fontWeight: focused ? 'bold' : 'normal',
        color: colors.pink,
      }}>
      {label}
    </Text>
  );
};

const IconComponent = ({icon}: any) => {
  return (
    <Image
      source={icon}
      style={{height: 25, width: 25, tintColor: colors.pink}}
    />
  );
};

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: ({focused}) => (
            <LabelComponent label="Home" focused={focused} />
          ),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconComponent icon={focused ? icons.fillHome : icons.home} />
          ),
          tabBarLabelStyle: {
            color: colors.pink,
          },
          tabBarStyle: {
            paddingBottom: 10,
            height: Platform.OS === 'android' ? 65 : 80,
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Favourite"
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <LabelComponent label="Favourite" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <IconComponent
              icon={focused ? icons.fillstar : icons.star}
              focused={focused}
            />
          ),
          tabBarLabelStyle: {
            color: colors.pink,
          },
          tabBarStyle: {
            paddingBottom: 10,
            height: Platform.OS === 'android' ? 65 : 80,
          },
        }}
        component={Favourite}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
