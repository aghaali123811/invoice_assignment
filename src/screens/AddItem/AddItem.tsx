import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,TextInput } from 'react-native';

// Local Imports
import styles from './styles';
import Colors from '../../common/colors/Colors';

export interface NavigationProps {
  navigation: any;
  route: any;
}

function AddItem(props: NavigationProps) {
  const { navigation, route } = props;
  const [search,setSearch]= useState('')
  const [filterData, setFilterData] = useState([]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text allowFontScaling={false} style={styles.heading}>Add Screen</Text>
      
      <Text style={{color:'black',marginLeft:'3.5%',marginTop:10}}>Name</Text>
          <TextInput
            style={styles.input1}
            placeholder={"Search"}
            value={search}
            onChangeText={e => console.log('Hello')}
          />

<Text style={{color:'black',marginLeft:'3.5%',marginTop:10}}>Name</Text>
<TextInput
            style={styles.input1}
            placeholder={"Search"}
            value={search}
            onChangeText={e => console.log('Hello')}
          />

<Text style={{color:'black',marginLeft:'3.5%',marginTop:10}}>Name</Text>
<TextInput
            style={styles.input1}
            placeholder={"Search"}
            value={search}
            onChangeText={e => console.log('Hello')}
          />
        </View>

      </View>
    </>
  ); 
}

export default AddItem;
