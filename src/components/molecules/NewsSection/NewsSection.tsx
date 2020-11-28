import React from 'react';

import {Image, Text, View} from 'react-native';
import styles from './styles';

const NewsSection = (data: any) => {
  return (
    <View style={styles.newsWrapper}>
      <View style={styles.newsContent}>
        <View style={styles.newsTitleContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tagNews}>Berita Pilihan</Text>
            <Text style={styles.timeNews}>2 menit yang lalu</Text>
          </View>
          <View>
            <Text style={{fontSize: 16}}>{data.data.title}</Text>
          </View>
        </View>
        <View style={{width: 80}}>
          <Image
            source={require('../../../assets/image/agto.jpg')}
            style={styles.newsImage}
          />
        </View>
      </View>
    </View>
  );
};

export default NewsSection;
