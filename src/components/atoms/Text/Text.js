import React from 'react';
import {Text} from 'react-native';
import styles from './Styles';

const TextComponent = ({type = 'primary', children}) => {
  return <Text style={[styles[type]]}>{children}</Text>;
};

export default TextComponent;
