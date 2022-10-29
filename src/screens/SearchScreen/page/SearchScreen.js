import React, {useState, useCallback, useContext} from 'react';
import {Page, Text, TextInputIcon, Button} from '../../../components';
import {View} from 'react-native';
import styles from '../styles/Styles';
import {Context} from '../../../context';
import {getData} from '../../../services/getData';

const SearchScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const {setPixabayResponse, setSearched} = useContext(Context);

  const handleSearch = useCallback(() => {
    setSearched(value);
    getData(value, 1).then(response => {
      if (response.status === 200) {
        setPixabayResponse(response.data?.hits);
        navigation.navigate('DataList', value);
      }
    });
  }, [value]);

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
