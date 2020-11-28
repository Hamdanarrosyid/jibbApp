import React from 'react';
import {View} from 'react-native';
import Home from './pages/Home/Home';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql';

const App: any = () => {
  return (
    <ApolloProvider client={client}>
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Home />
      </View>
    </ApolloProvider>
  );
};

export default App;
