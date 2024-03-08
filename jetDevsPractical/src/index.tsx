import React from 'react';

import {Provider} from 'react-redux';
import {Routes} from './routes/Routes';
import {store} from './redux/store';
import {View} from 'react-native';

const JetDevsPractical = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
};

export default JetDevsPractical;
