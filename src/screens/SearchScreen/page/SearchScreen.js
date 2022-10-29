import React, {useState, useCallback, useContext} from 'react';
import {Page, Text, TextInputIcon, Button} from '../../../components';
import {View} from 'react-native';
import styles from '../styles/Styles';
import {Context} from '../../../context';
import {getData} from '../../../services/getData';

const SearchScreen = ({navigation}) => {
  const {setPixabayResponse, searched, setSearched} = useContext(Context);

  const handleSearch = useCallback(() => {
    getData(searched, 1).then(response => {
      if (response.status === 200) {
        setPixabayResponse(response.data?.hits);
        navigation.navigate('DataList', searched);
      }
    });
  }, [searched]);

  return (
    <Page style={styles.container}>
      <Text type="h1">Pixabay Search Image</Text>

      <View style={styles.textInputContainer}>
        <TextInputIcon
          value={searched}
          setValue={setSearched}
          iconFamily="FA"
          iconName="search"
          iconSize={30}
          placeholder="Mountains"
        />
      </View>
      <View style={[styles.width, styles.padding]}>
        <Button onPress={handleSearch}>Search</Button>
      </View>
    </Page>
  );
};

export default SearchScreen;
