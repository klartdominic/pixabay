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

const App = () => {
  useEffect(() => {
    // uncomment below to hide the splash screen
    // SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
