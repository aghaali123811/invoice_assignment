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
import CustomTab from '../../components/Tab/CustomTab';
import styles from './Styles';
import MovieLists from '../../components/Lists/MovieLists';
import Constants from '../../common/contant/Constants';
import MoviesListPlay from '../../components/Lists/MoviesListPlay';
import Axios from 'axios';

export interface NavigationProps {
  navigation: any;
  route?: any;
}

export default function Home(props:NavigationProps) {
  const [tab, setTab] = useState<any>(Constants.latest);
  const [loading, setLoading] = useState<boolean>(false);
  const [popularList, setPopularList] = useState<any[]>([]);
  const [latestList, setLatestList] = useState<any>(null);
  const [trendingList, setTrendingList] = useState<any>(null);
  const [favouriteItems, setFavouriteItems] = useState<any>(null);

  const {navigation} = props;

  useEffect(() => {
    getLatestList();
    getPopularList();
    getTrailerList();
  }, []);

  const getPopularList = async () => {
    setLoading(true);
    try {
      let response = await Axios({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=02594f17504d1a82ec172f4a3de468ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        method: 'GET',
      });
      var temp: any[] = []
      response?.data?.results.forEach((item:any) => {
        temp.push({...item, isFavourite: false})
      });
      setPopularList(temp);
      setLoading(false);
    } catch (error) {
      console.log('Error getting Data ', {error});
      setLoading(false);
    }
  };

  const getLatestList = async () => {
    setLoading(true);
    try {
      let response = await Axios({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=02594f17504d1a82ec172f4a3de468ea&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        method: 'GET',
      });
      var temp: any[] = []
      response?.data?.results.forEach((item:any) => {
        temp.push({...item, isFavourite: false})
      });
      setLatestList(temp);
      setLoading(false);
    } catch (error) {
      console.log('Error getting Data ', error);
      setLoading(false);
    }
  };

  const getTrailerList = async () => {
    setLoading(true);
    try {
      let response = await Axios({
        url: `https://api.themoviedb.org/3/trending/all/day?api_key=02594f17504d1a82ec172f4a3de468ea`,
        method: 'GET',
      });
      setTrendingList(response?.data?.results);
      setLoading(false);
    } catch (error) {
      console.log('Error getting TrailerList ', error);
      setLoading(false);
    }
  };

  const handleFavourite = (item: any) => {
    let filteredList: any[] = []
    latestList.forEach((element:any) => {
      if(element.id === item.id){
        filteredList.push({...element, isFavourite: !element.isFavourite})
      }
      else{
        filteredList.push(element)
      }
    });
    setLatestList(filteredList)
  }

  return (
      <View style={{width:'100%',padding:20,height:'100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <CustomTab selectedTab={tab} onPress={(e:any) => setTab(e)} />
        <TouchableOpacity onPress={()=>props.navigation.navigate('FavouritePage',{latestList})}>
        <Text style={{color:Colors.black}}>Go to Favourites</Text>
        </TouchableOpacity>
        {!loading ? (
          <>
            {tab === Constants.latest ? (
              <>
                <Text style={styles.txt}>{Constants.whatPopular}</Text>
                <FlatList
                  data={latestList}
                  horizontal
                  renderItem={({item, index}) => (
                    <MovieLists
                      item={item}
                      favourite={true}
                      onPressFavourite={() => handleFavourite(item)}
                      onPress={() =>
                        navigation.navigate('DetailPage', {
                          id: item.id,
                        })
                      }
                      onPressDot={() => console.log('Dot clicked')}
                    />
                  )}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                />
                <ImageBackground
                  source={ImagePath.bannerBackground}
                  style={styles.background}>
                  <Text style={[styles.txt, {color: Colors.white}]}>
                    {Constants.latestTrailer}
                  </Text>
                  <FlatList
                    data={trendingList}
                    horizontal
                    renderItem={({item, index}) => (
                      <MoviesListPlay
                        item={item}
                        onPress={() => console.log('clicked')}
                      />
                    )}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => item.productId}
                    showsHorizontalScrollIndicator={false}
                  />
                </ImageBackground>

                <Text style={styles.txt}>{Constants.trending}</Text>
                <FlatList
                  data={popularList}
                  horizontal
                  renderItem={({item, index}) => (
                    <MovieLists
                      item={item}
                      onPress={() =>
                        navigation.navigate('DetailPage', {
                          id: item?.id,
                        })
                      }
                      onPressDot={() => console.log('Dot clicked')}
                    />
                  )}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            ) : (
              <View>
                <Text style={styles.txt}>{Constants.whatPopular}</Text>
                <FlatList
                  data={popularList}
                  horizontal
                  renderItem={({item, index}) => (
                    <MovieLists
                      item={item}
                      onPress={() =>
                        navigation.navigate('DetailPage', {
                          id: item.id,
                        })
                      }
                      onPressDot={() => console.log('Dot clicked')}
                    />
                  )}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
          </>
        ) : (
          <ActivityIndicator color={Colors.darkBlue} size={'small'} />
        )}
      </ScrollView>
      </View>
  )
}
