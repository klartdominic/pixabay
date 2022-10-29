/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Navigator
import AppNavigation from './src/navigation/AppNavigation';
import {NativeBaseProvider} from 'native-base';
import {ContextProvider} from './src/context';

const App = () => {
  return (
    <NativeBaseProvider>
      <ContextProvider>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </ContextProvider>
    </NativeBaseProvider>
  );
};

export default App;
