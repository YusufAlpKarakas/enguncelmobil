import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './(tabs)/index';
import TestCoz from './TestCoz';
import UrunDetay from './UrunDetay';
import UrunDetayKitap from './UrunDetayKitap';
import Sepet from './Sepet';
import TestSayfasi from './TestSayfasi';
import TestBitir from './TestBitir';
import store from './depo/store';
import { Provider } from 'react-redux';
import SignUp from './(tabs)/singin';
import Login from './(tabs)/login';
import Kutuphane from './(tabs)/kutuphane';  // Burada Kutuphane ekranını ekliyoruz
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="TestCoz" component={TestCoz} options={{ title: 'Test Çöz' }} />
          <Stack.Screen name="UrunDetay" component={UrunDetay} options={{ title: 'Ürün Detay' }} />
          <Stack.Screen name="UrunDetayKitap" component={UrunDetayKitap} options={{ title: 'Detay Kitap' }} />
          <Stack.Screen name="Sepet" component={Sepet} />
          <Stack.Screen name="TestSayfasi" component={TestSayfasi} />
          <Stack.Screen name="TestBitir" component={TestBitir} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'HomeScreen') {
                iconName = 'home';
              } else if (route.name === 'Kutuphane') {
                iconName = 'book';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
          <Tab.Screen name="Kutuphane" component={Kutuphane} options={{ title: 'Kütüphane' }} />
          <Tab.Screen name="SingUp" component={SignUp} options={{ title: 'Kayıt' }} />
          <Tab.Screen name="Login" component={Login} options={{ title: 'Giriş' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
