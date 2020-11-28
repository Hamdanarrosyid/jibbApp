import React from 'react';

import {FlatList, SafeAreaView, Text} from 'react-native';

import styles from '../../molecules/NewsSection/styles';
import {gql, useQuery} from '@apollo/client';
import NewsSection from '../../molecules/NewsSection/NewsSection';

const myQuery = gql`
  query {
    articles {
      id
      title
    }
  }
`;
const News = () => {
  const {loading, error, data} = useQuery<any>(myQuery);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error Boss</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.articles}
        renderItem={({item}) => <NewsSection data={item} />}
      />
    </SafeAreaView>
  );
};
export default News;
