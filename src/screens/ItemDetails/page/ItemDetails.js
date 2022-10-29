import React, {useCallback, useContext} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';
import {Button} from '../../../components';
import {Context} from '../../../context';

const ItemDetails = ({navigation, route}) => {
  const {data} = route.params;
  const itemTags = data?.tags ? data?.tags?.split(',') : null;
  const {setSearched} = useContext(Context);

  const handeRenderItem = useCallback(({item, index}) => {
    return (
      <View style={{height: 100, padding: 5}}>
        <Button key={index} type="tag" onPress={() => handleOnPress(item)}>
          {item}
        </Button>
      </View>
    );
  }, []);

  const handleOnPress = item => {
    setSearched(item);
    navigation.navigate('SearchScreen');
  };

  return (
    <View>
      <Image source={{uri: data?.largeImageURL}} style={styles.image} />
      <Text>Author: {data?.user}</Text>

      <FlatList horizontal data={itemTags} renderItem={handeRenderItem} />
    </View>
  );
};

export default ItemDetails;
