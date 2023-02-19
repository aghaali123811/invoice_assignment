import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,TextInput } from 'react-native';

// Local Imports
import styles from './styles';
import Constants from '../../common/constants/Constants';
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
    name:'Book1',
    description:'This is description',
    price:'2',
    quantity:'2'
  }, 
  {
    id:2,
    name:'Book1',
    description:'hello',
    price:'3',
    quantity:'3'
  },
  {
    id:3,
    name:'Book1',
    description:'This is description',
    price:'3',
    quantity:'3'
  },
])
  const [filterData, setFilterData] = useState([]);


  const handleSearch = () => {
    if(search.length > 0){
      let filteredData: any = data.filter(function (item) {
        return item.description.toLowerCase().includes(search.toLowerCase());
      });
      setFilterData(filteredData);
    }else{
      setFilterData([]);
    }
  };

  const handleAddNew = (e:any) =>{
    setData((data) => [
      ...data,
      e,
    ]);
  }

  const handleDelete  = (id:any) => {
    const arr = data.filter((e)=> e.id != id)
    setData(arr)
  }

  const handleEdit = (item:any) =>{
    let temp : any[] = [];
    data.forEach((e)=>{
      e.id === item.id ? temp.push(item) : temp.push(e)
    })
    setData(temp)
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text allowFontScaling={false} style={styles.heading}>Invoice</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddItemScreen',{handleAddNew :(e:any) => handleAddNew(e)})}>
            <Text allowFontScaling={false} style={styles.add}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input1}
            placeholder={Constants.search}
            value={search}
            onChangeText={e => setSearch(e) || handleSearch()}
          />
        </View>



        <View style={styles.row}>
            <Text allowFontScaling={false} style={styles.name}>{Constants.name}</Text>
            <Text allowFontScaling={false} style={styles.date}>{Constants.quantity}</Text>
            <Text allowFontScaling={false} style={styles.description}>{Constants.description}</Text>
            <Text allowFontScaling={false} style={styles.amount} >{Constants.price}</Text>
        </View>

        <FlatList
          data={filterData.length === 0 ? data : filterData}
          renderItem={({ item, index }) => (
            <ShowList 
              item={item} 
              onPress={()=> navigation.navigate('AddItemScreen',{edit:true,item:item, handleEdit :(e:any) => handleEdit(e), handleDelete :()=>handleDelete(item.id)})}/>
          )}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  ); 
}

export default Home;
