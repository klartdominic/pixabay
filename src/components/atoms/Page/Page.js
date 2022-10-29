import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './Styles';

const Page = ({style, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerStyle, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Page;
