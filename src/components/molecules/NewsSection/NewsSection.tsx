import React from 'react';

import {Image, Text, View} from 'react-native';
import styles from './styles';
import moment from 'moment';

const NewsSection = (data: any) => {
  const createdAt = moment(data.data.createdAt);
  const diferent = moment().diff(createdAt);

  const days = moment.duration(diferent).asDays();
  const hours = days * 24;
  const minutes = (hours * 60) % 60;
  const seconds = (minutes * 60) % 60;

  const duration =
    days > 1
      ? Math.floor(days) + ' hari'
      : hours > 1
      ? Math.floor(hours) + ' jam'
      : minutes > 1
      ? Math.floor(minutes) + ' menit'
      : seconds > 1
      ? Math.floor(seconds) + ' detik'
      : '';

  return (
    <View style={styles.newsWrapper}>
      <View style={styles.newsContent}>
        <View style={styles.newsTitleContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tagNews}>{data.data.createdBy.firstName}</Text>
            <Text style={styles.timeNews}>{duration} yang lalu</Text>
          </View>
          <View>
            <Text style={{fontSize: 16}}>{data.data.title}</Text>
          </View>
        </View>
        <View style={{width: 80}}>
          <Image
            source={{
              uri: data.data.image,
            }}
            style={styles.newsImage}
          />
        </View>
      </View>
    </View>
  );
};

export default NewsSection;
