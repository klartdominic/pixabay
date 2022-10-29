import React, {useState} from 'react';
import {Page, Text, TextInputIcon, Button} from '../../../components';
import {View} from 'react-native';
import styles from '../styles/Styles';

const SearchScreen = () => {
  const [value, setValue] = useState(null);
  return (
    <Page style={styles.container}>
      <Text type="h1">Pixabay Search Image</Text>

      <View style={styles.textInputContainer}>
        <TextInputIcon
          value={value}
          setValue={setValue}
          iconFamily="FA"
          iconName="search"
          iconSize={30}
        />
      </View>
      <View style={[styles.width, styles.padding]}>
        <Button>Search</Button>
      </View>
    </Page>
  );
};

export default SearchScreen;
