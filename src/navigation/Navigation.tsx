import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splashScreen/Splash';
import Home from '../screens/home/Home';
import AddItem from '../screens/AddItem/AddItem';

const MainStack = createNativeStackNavigator();
export const screenDimensions = Dimensions.get('screen');

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator headerMode="none">
          <MainStack.Screen
            name="SplashScreen"
            component={Splash}
            options={{headerShown: false}}
          />
           <MainStack.Screen
            name="HomeScreen"
            component={Home}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="AddItemScreen"
            component={AddItem}
            options={{headerShown: false}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
