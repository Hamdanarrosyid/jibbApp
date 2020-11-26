import React from 'react';

import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

// import styles from './styles';

const News = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={{paddingHorizontal: 15}}>
      <View
        style={{
          paddingVertical: 15,
          borderBottomColor: '707070',
          borderBottomWidth: 0.5,
        }}>
        <View
          style={{
            height: 80,
            alignSelf: 'center',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              paddingRight: 13,
              paddingBottom: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#450BBB',
                  fontWeight: 'bold',
                }}>
                Berita Pilihan
              </Text>
              <Text style={{fontSize: 12, color: '#707070', marginLeft: 10}}>
                2 menit yang lalu
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>
                Lorem ipsum dolor sit amet, consokdf adipisicing.
              </Text>
            </View>
          </View>
          <View style={{width: 80}}>
            <Image
              source={require('../../assets/image/agto.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 8,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default News;
