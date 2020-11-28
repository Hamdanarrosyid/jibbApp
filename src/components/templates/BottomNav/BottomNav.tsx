import React from 'react';

import {Image, View} from 'react-native';

// import styles from './styles';

const BottomNav = () => (
  <View
    style={{
      backgroundColor: 'white',
      height: 61,
      flexDirection: 'row',
    }}>
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: 24,
          height: 24,
          marginTop: 20,
        }}>
        <Image source={require('../../../assets/icons/home-icon-active.png')} />
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: 24,
          height: 24,
          marginTop: 20,
        }}>
        <Image source={require('../../../assets/icons/news_24px.png')} />
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: 24,
          height: 24,
          marginTop: 20,
        }}>
        <Image source={require('../../../assets/icons/image_file_24px.png')} />
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: 24,
          height: 24,
          marginTop: 20,
        }}>
        <Image source={require('../../../assets/icons/event_24px.png')} />
      </View>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: 24,
          height: 24,
          marginTop: 20,
        }}>
        <Image source={require('../../../assets/icons/user_24px.png')} />
      </View>
    </View>
  </View>
);

export default BottomNav;
