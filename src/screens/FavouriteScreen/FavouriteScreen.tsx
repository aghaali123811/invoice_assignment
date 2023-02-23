import MovieLists from '../../components/Lists/MovieLists';
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import styles from './styles';

export interface NavigationProps {
    navigation: any;
    route?: any;
  }
  
  export default function FavouriteScreen(props:NavigationProps) {
    const {navigation} = props;

    const [favouriteItems, setFavouriteItems] = useState<any>(props.route.params.latestList);
  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>

        <Text style={{alignSelf:'center',fontSize:22,color:Colors.black}}>Favourite Screen</Text>

        <FlatList
                  data={favouriteItems}
                  horizontal
                  style={{padding:20}}
                  renderItem={({ item, index }) => {
                    if (item.isFavourite) {
                        return (
                            <MovieLists
                            item={item}
                            onPress={() =>
                              navigation.navigate('DetailPage', {
                                id: item.id,
                              })
                            }
                            onPressDot={() => console.log('Dot clicked')}
                          />
                        )
                    }
                }
                }
               
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                />
    </View>
  );
}