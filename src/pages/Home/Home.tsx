import React from 'react';

import {View} from 'react-native';
import TopNav from '../../components/TopNav/TopNav';
import BottomNav from '../../components/BottomNav/BottomNav';
import News from '../../components/News/News';

// import styles from './styles';

const Home = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <View style={{flex: 1}}>
        <TopNav />
        <News />
      </View>
      <BottomNav />
    </View>
  );
};

export default Home;