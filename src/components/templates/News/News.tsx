import React from 'react';

import {FlatList, SafeAreaView, Text} from 'react-native';

import styles from '../../molecules/NewsSection/styles';
import {useQuery} from '@apollo/client';
import NewsSection from '../../molecules/NewsSection/NewsSection';
import {ARTICLES_QUERY} from '../../../graphql/queries/queries';

interface ArticlesInventory {
  id: number;
  title: string;
}
interface ArticlesInventoryData {
  articles: ArticlesInventory;
}
const News = () => {
  const {loading, error, data} = useQuery<ArticlesInventoryData>(
    ARTICLES_QUERY,
    {},
  );
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
