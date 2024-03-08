import React from 'react';
import 'react-native-gesture-handler';
import {I18nManager} from 'react-native';
import JetDevsPractical from './src';

// handle some dynamic arabic word handle there direction put always left-to-right
I18nManager.forceRTL(false);

const App = () => {
  return <JetDevsPractical />;
};

export default App;
