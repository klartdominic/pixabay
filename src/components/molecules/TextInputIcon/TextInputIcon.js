import React from 'react';
import {View} from 'react-native';
import {Icon, TextInput} from '../../atoms';
import styles from './Styles';

const TextInputIcon = ({control, name, iconFamily, iconName, placeholder}) => {
  return (
    <View
      style={[styles.container, styles.paddingHorizontal, styles.alignment]}>
      <View style={[styles.textInputContainer, styles.alignment]}>
        <TextInput
          control={control}
          name={name}
          type="plain"
          placeholder={placeholder}
        />
      </View>
      <View style={styles.padding}>
        <Icon
          name={iconName}
          color={'orange'}
          fontSize={20}
          iconFamily={iconFamily}
        />
      </View>
    </View>
  );
};

export default TextInputIcon;
