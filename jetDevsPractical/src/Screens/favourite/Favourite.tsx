import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getFavUser} from '../../redux/selectors/authSelectors';
import icons from '../../assets/icons';
import * as sagaActions from '../../constants/actionNames';
import ListItem from '../../components/listItem/ListItem';
import styles from './favourite.styles';

const Favourite = () => {
  const dispatch = useDispatch();
  //selectors to get data from redux state
  const favUser = useSelector(getFavUser);
  const [favUserList, setFavUserList] = useState(favUser);

  useEffect(() => {
    setFavUserList(favUser);
  }, [favUser]);

  // add/remove favourite user
  const addFavourite = (item: any) => {
    dispatch({
      type: sagaActions.FAV_USER_SAGA,
      payload: item,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCircleContainer}>
        <Image style={styles.logoIcon} source={icons.logo} />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={favUserList}
          showsVerticalScrollIndicator={false}
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
                isFav={true}
              />
            );
          }}
          keyExtractor={item => item?.registered?.date?.toString()}
          ItemSeparatorComponent={() => <View style={styles.itemSaperator} />}
        />
      </View>
      <Text
        style={[
          styles.viewAbs,
          {display: favUserList.length > 0 ? 'none' : 'flex'},
        ]}>
        Please add favorite from home section
      </Text>
    </View>
  );
};

export default Favourite;
