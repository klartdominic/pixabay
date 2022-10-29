import React, {useState, useCallback, useContext} from 'react';
import {Page, Text, TextInputIcon, Button} from '../../../components';
import {View} from 'react-native';
import styles from '../styles/Styles';
import Http from '../../../utils/Http';
import {Context} from '../../../context';

const SearchScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const {setPixabayResponse} = useContext(Context);

  const handleSearch = useCallback(() => {
    Http.get(
      `https://pixabay.com/api/?key=30941299-4f34efe2998493180809f3c77&q=${value.toLowerCase()}&image_type=photo`,
    )
      .then(response => {
        if (response.status === 200) {
          setPixabayResponse(response.data);
          navigation.navigate('DataList');
        }
      })
      .catch(error => {
        console.warn('error', error);
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
