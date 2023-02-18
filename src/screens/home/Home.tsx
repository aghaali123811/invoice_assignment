import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,TextInput } from 'react-native';

// Local Imports
import styles from './styles';
import Colors from '../../common/colors/Colors';
import Constants from '../../common/constants/Constants';
import SimpleButton from '../../components/buttons/simpleButton/SimpleButton';
import ShowList from '../../components/FlatlistComponents/ShowList';

export interface NavigationProps {
  navigation: any;
  route: any;
}

function Home(props: NavigationProps) {
  const { navigation, route } = props;
  const [search,setSearch]= useState('')
  const [data,setData]= useState([{
    id:1,
    description:'This is description',
    price:'2',
    quantity:'2'
  }, 
  {
    id:2,
    description:'hello',
    price:'3',
    quantity:'3'
  },
  {
    id:2,
    description:'This is description',
    price:'3',
    quantity:'3'
  },
])
  const [filterData, setFilterData] = useState([]);


  const handleSearch = e => {
    let temp : any[] = [];

    if(search.length > 0){
      let filteredData = data.filter(function (item) {
        return item.description.toLowerCase().includes(search.toLowerCase());
      });
      setFilterData(filteredData);
    }else{
      setFilterData([]);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text allowFontScaling={false} style={styles.heading}>Invoice</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddItemScreen')}>
            <Text allowFontScaling={false} style={styles.add}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input1}
            placeholder={"Search"}
            value={search}
            onChangeText={e => setSearch(e) || handleSearch()}
          />
          <TouchableOpacity style={styles.btn} onPress={()=>handleSearch()}>
            <Text style={styles.txt1}>Search</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
            <Text allowFontScaling={false} style={styles.date}>Quantity</Text>
            <Text allowFontScaling={false} style={styles.description}>Description</Text>
            <Text allowFontScaling={false} style={styles.amount} >Price</Text>
        </View>

        <FlatList
          data={filterData.length === 0 ? data : filterData}
          renderItem={({ item, index }) => (
            <ShowList item={item} />
          )}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  ); 
}

export default Home;
