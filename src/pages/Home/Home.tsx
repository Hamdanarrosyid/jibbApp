import React from 'react';

import {View} from 'react-native';
import TopNav from '../../components/templates/TopNav/TopNav';
// import BottomNav from '../../components/templates/BottomNav/BottomNav';
import News from '../../components/templates/News/News';

// import styles from './styles';

const Home = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <View style={{flex: 1}}>
        <TopNav />
        <News />
      </View>
    </View>
  );
};

export default Home;
