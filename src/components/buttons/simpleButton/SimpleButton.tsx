import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../common/colors/Colors';

export interface ButtonProps {
  title: string;
  onPress: any;
  style:any;
  titleStyle:any;
}

export default function SimpleButton(props: ButtonProps) {
  return (
    <TouchableOpacity style={{...styles.container,...props.style}} onPress={props.onPress}>
      <Text style={{...styles.title,...props.titleStyle}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.black,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
  },
  title: {
    color: Colors.white,
    alignSelf: 'center',
    marginTop: 17,
    fontWeight: '600',
  },
});
