import React from 'react';
import {View} from 'react-native';
import Home from './pages/Home/Home';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App: any = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <View style={{backgroundColor: 'pink', flex: 1}}>
          <Home />
        </View>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
