import React from 'react';
import {View, StyleSheet} from 'react-native';

export interface NavigationProps {
  navigation: any;
  route: any;
}

function Splash(props: NavigationProps) {
  const {navigation, route} = props;
  setTimeout(() => {
    navigation.navigate('HomeScreen');
  }, 2000);
  return (
    <>
      <View style={styles.container}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: 'green'},
});

export default Splash;
