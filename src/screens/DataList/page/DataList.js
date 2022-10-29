import React, {useContext, useCallback, useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import {Page} from '../../../components';
import {Context} from '../../../context';
import {getData} from '../../../services/getData';
import styles from '../styles/Styles';

const DataList = ({navigation}) => {
  const {pixabayResponse, setPixabayResponse, page, setPage, searched} =
    useContext(Context);
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = useCallback(
    ({item}) => (
      <TouchableOpacity
        key={item.id}
        style={styles.items}
        onPress={() => handleOnPress(item)}>
        <Image source={item.previewURL} />
        <Text>{item.user}</Text>
        <Text>{item.tags}</Text>
        <Text>{item.views}</Text>
        <Text>{item.downloads}</Text>
        <Text>{item.likes}</Text>
        <Text>{item.comments}</Text>
      </TouchableOpacity>
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  const handleOnRefresh = () => {
    setRefreshing(true);
    setPage(1);
    getData(searched, 1).then(response => {
      if (response.status === 200) {
        setPixabayResponse(response?.data?.hits);
        setRefreshing(false);
      }
    });
  };

  const getNextData = () => {
    getData(searched, page + 1).then(response => {
      if (response.status === 200) {
        setPixabayResponse(value => [...value, ...response.data?.hits]);
      }
    });
  };

  const handleOnPress = data => {
    navigation.navigate('ItemDetails', data);
  };

  return (
    <Page>
      <FlatList
        extraData={pixabayResponse}
        data={pixabayResponse}
        initialNumToRender={20}
        style={styles.container}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={() => {
          getNextData();
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.7}
        onRefresh={handleOnRefresh}
        refreshing={refreshing}
      />
    </Page>
  );
};

export default DataList;
