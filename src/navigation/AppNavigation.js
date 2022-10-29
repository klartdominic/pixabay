import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen, DataList, ItemDetails} from '../screens';

const Stack = createNativeStackNavigator();

// listen if the tab bottom buttons are pressed
const tabBarListensers = ({navigation, route}) => ({
  tabPress: () => navigation.navigate(route.name),
});

export default () => {
  return (
    // The NavigationContainer is responsible for managing your app
    // state and linking your top-level navigator to the app environment.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DataList" component={DataList} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
