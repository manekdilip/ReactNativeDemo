import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './home.styles';
import * as sagaActions from '../../constants/actionNames';
import {
  getRandomUser,
  getFavUser,
  getLoader,
} from '../../redux/selectors/authSelectors';
import icons from '../../assets/icons';
import ListItem from '../../components/listItem/ListItem';
import { Loader } from '../../components';

const Home = () => {
  const dispatch = useDispatch();

  //selectors to get data from redux state
  const isLoading = useSelector(getLoader);
  const data = useSelector(getRandomUser);
  const FData = useSelector(getFavUser);
  const [page, setPage] = useState(0);
  const [userList, setUserList] = useState(data);

  //this will trigger the saga action with api call
  const getUserList = (values: number) => {
    dispatch({
      type: sagaActions.GET_USER_LIST,
      payload: {page: values},
    });
  };

  useEffect(() => {
    setUserList(data);
  }, [data]);

  useEffect(() => {
    getUserList(page);
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, []);

  // loadMore call when scroll end
  const LoadMore = () => {
    setPage(page + 1);
  };

  const addFavourite = (item: any) => {
    dispatch({
      type: sagaActions.FAV_USER_SAGA,
      payload: item,
    });
  };

  const refreshData = () => {
    setPage(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCircleContainer}>
        <Image style={styles.logoIcon} source={icons.logo} />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={userList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.registered.date}
          renderItem={({item, index}) => {
            return (
              <ListItem
                key={index}
                photo={item.picture.medium}
                name={`${item.name.first} ${item.name.last}`}
                location={item.location.city}
                phone={item.phone}
                gender={item.gender}
                onFav={() => addFavourite(item)}
                isFav={new Set(FData).has(item)}
              />
            );
          }}
          onEndReached={LoadMore}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={() => <View style={styles.itemSaperator} />}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refreshData} />
          }
          ListFooterComponent={() => <Loader isLoading={isLoading} />}
        />
      </View>
    </View>
  );
};

export default Home;
