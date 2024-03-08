import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import colors from '../../themes/colors';
import {ListItemProps} from './ListItem.model';
import icons from '../../assets/icons';
import {Text} from 'react-native-paper';
import styles from './listItem.styles';

const ListItem = (props: ListItemProps) => {
  const {name, photo, location, phone, gender, onFav, isFav} = props;

  return (
    <View style={styles.container}>
      <View style={[styles.row, {flex: 1}]}>
        <View style={styles.avatarContainer}>
          <Image source={{uri: photo}} style={styles.avatar} />
        </View>
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.row}>
            <Image source={icons.location} style={styles.locationIcon} />
            <Text style={styles.location}>{location}</Text>
          </View>
          <View style={styles.hobbyRow}>
            <View style={[styles.hobbyContainer, styles.row]}>
              <Image source={icons.phone} style={styles.locationIcon} />
              <Text style={[styles.hobbyText, {color: colors.green}]}>
                {phone}
              </Text>
            </View>
            <View style={[styles.hobbyContainer, styles.row]}>
              <Image source={icons.gender} style={styles.locationIcon} />
              <Text style={[styles.hobbyText, {color: colors.pink}]}>
                {gender}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.favBtn} onPress={onFav}>
        <Image
          source={isFav ? icons.fillstar : icons.star}
          style={styles.starIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ListItem);

