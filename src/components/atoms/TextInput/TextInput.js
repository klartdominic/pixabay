import React from 'react';
import {TextInput} from 'react-native';
import styles from './Styles';

const TextInputComponent = ({
  type = 'primary',
  value,
  setValue,
  placeholder = '',
}) => {
  return (
    <TextInput
      style={[styles.common, styles[type]]}
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
    />
  );
};

export default TextInputComponent;
