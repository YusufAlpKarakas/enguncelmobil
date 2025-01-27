import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Header } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import TestCoz from '../TestCoz';
import TestSayfasi from '../TestSayfasi';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const storedUserName = await AsyncStorage.getItem('username');
      const token = await AsyncStorage.getItem('userToken');
  
      if (storedUserName && token) {
        setUserName(storedUserName);  // Kullanıcı adı varsa state'e ekle
        setIsLoggedIn(true);          // Kullanıcı giriş yapmışsa login durumunu true yap
      } else {
        setIsLoggedIn(false);         // Veriler yoksa, kullanıcıyı çıkış yapmış olarak göster
      }
    };
  
    getUserData();
  }, []);  // Ekran her render olduğunda sadece ilk kez çalışacak
    // Ekran her render olduğunda sadece ilk kez çalışacak

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('username');
    setUserName(''); // Kullanıcı adını sıfırla
    setIsLoggedIn(false); // Login durumunu false yap
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.topMenu}>
            {userName ? (
              <Text style={styles.welcomeText}>Hoşgeldin, {userName}!</Text>
            ) : (
              <Text style={styles.welcomeText}>Hoşgeldiniz!</Text>
            )}
            {userName && (
              <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Çıkış Yap</Text>
              </TouchableOpacity>
            )}
            <View style={styles.topMenuRightBox}>
              <Icon name="shopping-cart" size={25} color="#000" style={styles.icon1} />
              <Icon name="user-o" size={22} color="#000" style={styles.icon2} />
            </View>
          </View>

          <View style={styles.personView}>
            <View style={styles.personViewLeft}>
              <View style={styles.imageBox}>
                <Image 
                  source={require('../../assets/images/yalp.jpeg')} // Yerel resmin yolu
                  style={styles.image}
                />
              </View>
              <View style={styles.personText}>
                <Text style={{ color: '#333', fontSize: 18 }}>Ahmet Aktaş</Text>
                <Text style={{ color: '#333', fontSize: 12 }}>Bronz Ligi Çekmeköy</Text>
              </View>
            </View>
            <View style={styles.personText}>
              <Text style={{ color: '#333', fontSize: 15, opacity: 0.5 }}>526</Text>
            </View>
          </View>

          <View style={styles.section3}>
            <Text style={{ color: '#333', fontSize: 20 }}>Ödüllü Seri</Text>
            <View style={styles.section3Box}>
              <View style={styles.section3FirstBox}>
                <View>
                  <Text>Günlük Çözüm</Text>
                  <Text style={{ color: '#333', fontSize: 15, opacity: 0.5 }}>5 günlük seri</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('TestCoz')}>
                  <Text style={styles.sectionButon1}>Çöz</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.section3SecondBox}>
                <View>
                  <Text>Haftalık Çözüm</Text>
                  <Text style={{ color: '#333', fontSize: 15, opacity: 0.5 }}>Soru 56</Text>
                </View>
                <Text style={styles.sectionButon2}>Tamamlandı</Text>
              </View>
            </View>
          </View>

          <View style={styles.section4}>
            <View style={styles.section4ImageBox}>
              <Image 
                source={require('../../assets/images/trbayrak.webp')} // Yerel resmin yolu
                style={styles.image2}
              />
              <Text style={{ color: '#333', fontSize: 20 }}>Türkiye Geneli Deneme</Text>
            </View>
            <View style={styles.section4Box}>
              <View style={styles.section4FirstBox}>
                <View>
                  <Text>20.08.2022 Pazar 09.30</Text>
                  <Text style={{ color: '#333', fontSize: 15, opacity: 0.5 }}>5546 Katılımcı</Text>
                </View>
                <Text style={styles.sectionButon1}>Katıl</Text>
              </View>
              <View style={styles.section4SecondBox}>
                <View>
                  <Text>Bir Önceki Deneme</Text>
                  <Text style={{ color: '#333', fontSize: 15, opacity: 0.5 }}>Net: 96.50</Text>
                </View>
              </View>
            </View>
            <View style={styles.section4lastBox}>
              <View>
                <Text>Yanlışları Çöz</Text>
                <Text style={{ color: '#333', fontSize: 15, opacity: 0.5 }}>Günlük Çözüm</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('TestSayfasi')}>
                <Text style={styles.sectionButon1}>Çöz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text:{
    color:"#333",
    margin:2,   
  },
  topMenuRightBox:{
    flexDirection:"row"
  },
  personView:{
    paddingVertical:15,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor: '#fff',
    borderRadius: 10,  // Kenarlıkların yuvarlatılması
    borderWidth: 2,   // Kenarlık genişliği
    borderColor:"#F0E7E7", // Kenarlık rengi,
    elevation:1,
    shadowOpacity: 0.1,  // Gölgenin şeffaflık (opacity)
    shadowRadius: 4,     // Gölgenin yayılma alanı
    marginHorizontal:8,    
  },
  personViewLeft:{
    flexDirection:"row"
  },
  imageBox:
  {
    width:45,
    height:45,
    objectFit:"cover",
    alignItems:"center",
    justifyContent:"center"
  },
  image: {
    width: "100%",   // Resmin genişliği
    height: "100%",  // Resmin yüksekliği
    resizeMode: 'contain',  // Resmin boyutunu koruyarak kapsar
    borderRadius:50
  },
  image2:{
    width: 40,   // Resmin genişliği
    height: 40,  // Resmin yüksekliği
    resizeMode: 'contain',  // Resmin boyutunu koruyarak kapsar
    borderRadius:50
  },
  section4ImageBox:{
    alignItems:"center",
    flexDirection:"row"
  },
  personText:{
     color:"#333",
     marginHorizontal:10,
  },
  section3:{
    padding:15,
    marginHorizontal:8,
    marginVertical:4
  },
  section3Box:{
 
  },
  section3FirstBox:{
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   marginVertical:10
  },
  section3SecondBox:{
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   marginVertical:10
  },




  section4:{
    padding:15,
    marginHorizontal:8,
    marginVertical:4
  },
  section4Box:{
 
  },
  section4FirstBox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:10,
    borderRadius: 10,  // Kenarlıkların yuvarlatılması
    borderWidth: 0.1,   // Kenarlık genişliği
    borderColor:"#F0E7E7",
    elevation:0.8,
    shadowOpacity: 0.1,  // Gölgenin şeffaflık (opacity)
    shadowRadius: 4,
    padding:10
  },
  section4SecondBox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:10,
    borderRadius: 10,  // Kenarlıkların yuvarlatılması
    borderWidth: 0.1,   // Kenarlık genişliği
    borderColor:"#F0E7E7",
    elevation:0.8,
    shadowOpacity: 0.1,  // Gölgenin şeffaflık (opacity)
    shadowRadius: 4,
    padding:10
  },
  section4lastBox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:10,
    borderRadius: 10,  // Kenarlıkların yuvarlatılması
    borderWidth: 0.1,   // Kenarlık genişliği
    borderColor:"#F0E7E7",
    elevation:0.8,
    shadowOpacity: 0.1,  // Gölgenin şeffaflık (opacity)
    shadowRadius: 4,
    padding:10
  },
  sectionButon1:{
   backgroundColor:'rgba(0, 255, 0, 0.1)',
   width:100,
   padding:5,
   textAlign:"center",
   color:"green"
  },
  sectionButon2:{
    backgroundColor:'rgba(255, 165, 0, 0.1)',
   width:100,
   padding:5,
   textAlign:"center",
   color:"orange"
  },
  icon1: {
    marginRight: 15,
  },
  icon2: {
    marginRight: 15,
  },
});
