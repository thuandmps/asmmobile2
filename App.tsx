
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/Login';
import Router from './src/authen/Router';
import Login2 from './src/Login2';
import Home from './src/Home';
import google from './src/Google';
import Regular from './src/Regular';
import Panse from './src/Panse';
import Cart from './src/Cart';
import Search from './src/Search';
import Thanhtoan from './src/Thanhtoan';
import Profile from './src/Profile';
import Chinhsua from './src/Chinhsua';
import Lichsu from './src/Lichsu';
import QA from './src/QA';
import dki from './src/dki';
import dnhap from './src/dnhap';

//lab1
import Bai1 from './src/Bai1';
import Bai2 from './src/Bai2';
import Demo from './src/Demo';
import HeaderCustom from './src/HeaderCustom';
import SectionView from './src/SectionView';

//demo
import Poster from './src/Poster';
import Register from './src/Register';
import Homescreen from './src/Homescreen';

import Bai01 from './src/Bai01';
// import Bai1Lab4 from './src/Bai1Lab4]';
// import Bai2Lab4 from './src/Bai2Lab4';
// import Bai3Lab4 from './src/Bai3Lab4';


const App = () =>{
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({

  
});

export default App;
