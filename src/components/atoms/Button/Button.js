import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Text} from 'react-native';

const ButtonComponent = ({type = 'primary', children, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[type]]}
      onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
