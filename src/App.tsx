import React from 'react';
import {Text} from 'react-native';
import Home from './pages/Home/Home';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const About = () => <Text>About</Text>;

const App: any = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Tab.Navigator
          initialRouteName="HOME"
          tabBarOptions={{activeTintColor: '#e91e63'}}>
          <Tab.Screen
            name="HOME"
            component={Home}
            options={{
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="ABOUT"
            component={About}
            options={{
              tabBarLabel: 'About',
            }}
          />
        </Tab.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
