import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import Login2 from '../Login2';
import Register from '../Register';
import Homescreen from '../Homescreen';
import Poster from '../Poster';
import Home from '../Home';
import google from '../Google';
import Demo from '../Demo';
import Bai1 from '../Bai1';
import Regular from '../Regular';
import Panse from '../Panse';
import Cart from '../Cart';
import Search from '../Search';
import Thanhtoan from '../Thanhtoan';
import Profile from '../Profile';
import Chinhsua from '../Chinhsua';
import Lichsu from '../Lichsu';
import QA from '../QA';
import dki from '../dki';
import dnhap from '../dnhap';
import {authSelector} from '../redux/reducers/authReducer';
import {useSelector} from 'react-redux';

const Router = () => {
  const auth = useSelector(authSelector);
  console.log(auth);

  return auth.accesstoken ? <HomeStack /> : <AuthStack />;
};

export default Router;

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='Demo' component={Demo} />
      <Stack.Screen name='Bai1' component={Bai1} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Regular" component={Regular} />
      <Stack.Screen name="Panse" component={Panse} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Thanhtoan" component={Thanhtoan} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chinhsua" component={Chinhsua} />
      <Stack.Screen name="Lichsu" component={Lichsu} />
      <Stack.Screen name="QA" component={QA} />

      {/* <Stack.Screen name='dki' component={dki} />
      <Stack.Screen name='dnhap' component={dnhap} /> */}

      {/* <Stack.Screen name='Google' component={google} /> */}
      {/* <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Homescreen' component={Homescreen} />
      <Stack.Screen name='Poster' component={Poster} /> */}
    </Stack.Navigator>
  );
};
const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login2" component={Login2} />
    </Stack.Navigator>
  );
};
