import 'react-native-url-polyfill/auto';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/App.store';
import { Wrapper } from './src/components';
import MainNavigation from './src/navigation/navigation';
import { supabase } from './supabase/supabase';

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <MainNavigation />
      </Wrapper>
    </Provider>
  );
}
