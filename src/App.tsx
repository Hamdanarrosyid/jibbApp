/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text, StatusBar,Image} from 'react-native';
// import icon from './assets/icons/icon feather-home.png';

const App: any = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <View style={{backgroundColor: 'blue', flex: 1}}>
            <View style={{backgroundColor:'white',height:50,alignItems:'center'}}>
                <Text style={{fontSize:24,marginTop:5}}>Jbb App</Text>
            </View>
      </View>
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
            <Image source={require('./assets/icons/home_24px.png')} />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
            <View
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 20,
                }}>
                <Image source={require('./assets/icons/news_24px.png')} />
            </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
            <View
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 20,
                }}>
                <Image source={require('./assets/icons/image_file_24px.png')} />
            </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
            <View
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 20,
                }}>
                <Image source={require('./assets/icons/event_24px.png')} />
            </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
            <View
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 20,
                }}>
                <Image source={require('./assets/icons/settings_24px.png')} />
            </View>
        </View>
      </View>
    </View>
  );
};

export default App;
