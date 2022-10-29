import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import PropTypes from 'prop-types';
import styles from './Styles';

// Font Awesome Icon Buttons
const Icon = ({iconFamily = 'II', name = 'help-outline', size = 18}) => {
  const Family = getIconFamily(iconFamily);

  return (
    <Family
      name={name}
      style={[
        styles.container,
        {
          fontSize: size,
        },
      ]}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;

const getIconFamily = family => {
  switch (family) {
    case 'AD':
      return AntDesign;
    case 'EO':
      return Entypo;
    case 'EI':
      return EvilIcons;
    case 'FR':
      return Feather;
    case 'FA':
      return FontAwesome;
    case 'FA5':
      return FontAwesome5;
    case 'FO':
      return Fontisto;
    case 'FN':
      return Foundation;
    case 'II':
      return Ionicons;
    case 'MCI':
      return MaterialCommunityIcons;
    case 'MI':
      return MaterialIcons;
    case 'OS':
      return Octicons;
    case 'SLI':
      return SimpleLineIcons;
    case 'ZL':
      return Zocial;
    default:
      return Ionicons;
  }
};
