import React from 'react';

import {Image, Text, View} from 'react-native';

// import styles from './styles';

const TopNav = () => {
  return (
    <View style={{backgroundColor: '#450BBB'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          marginHorizontal: 20,
          zIndex: 1,
          height: 40,
        }}>
        <Image
          source={require('../../../assets/icons/bar-icon.png')}
          style={{marginTop: 5}}
        />
        <Text style={{fontSize: 28, marginTop: -6, color: 'white'}}>Jibb</Text>
        <Image source={require('../../../assets/icons/search-icon.png')} />
      </View>
    </View>
  );
};

export default TopNav;
