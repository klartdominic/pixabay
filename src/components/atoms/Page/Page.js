import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import styles from './Styles';

const Page = ({style, children}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={[styles.containerStyle, style]}
        style={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
