import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Rota parametreleri tipi
type RootStackParamList = {
  Sepet: undefined;
  UrunDetayKitap: undefined;
};

// Navigation prop tipi
type UrunDetayKitapNavigationProp = StackNavigationProp<RootStackParamList, 'UrunDetayKitap'>;

const UrunDetayKitap = () => {
  const navigation = useNavigation<UrunDetayKitapNavigationProp>();

    const [visibility, setVisibility] = useState({
      ornekTestler: false,
      canlilarOrt: false,
      canlilarTemel: false,
    });

    const toggleSection = (section: keyof typeof visibility) => {
      setVisibility(prev => ({
        ...prev,
        [section]: !prev[section], // Sadece tıklanan başlığın görünürlük durumunu değiştir
      }));
    };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
         <View style={{width:"85%"}}>
         <View style={styles.topMenu}>
            <Text style={styles.text}>Sınavv</Text>
            <View style={styles.topMenuRightBox}>
              {/* Sepet sayfasına yönlendirme */}
              <TouchableOpacity onPress={() => navigation.navigate('Sepet')}>
                <Icon1 name="shopping-cart" size={25} color="#000" style={styles.icon1} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 40, color: '#333' }}>TYT Matematik Soru Bankası</Text>
            <View>
             <View style={{borderWidth:1,borderColor:"grey",paddingVertical:20,borderRadius:10}}>
              <Image source={require('../assets/images/kitap.png')} style={styles.productImage} /> 
             </View> 
              <View>
                <View style={{flexDirection:"row",justifyContent:"space-around",paddingVertical:10}}>
                <Text>Soru Sayısı: 443</Text>
                <Text>Toplam Satış Adedi: 8531</Text>
                </View>
                <Text style={{lineHeight:24}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus sed pariatur nemo doloremque suscipit, corporis a? Unde, rerum alias?</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop:30}}>
          <View style={{ width: "100%" }}>
                <TouchableOpacity onPress={() => toggleSection('canlilarTemel')}>
                  <Text style={styles.sectionHeader}>A) Canlıların Temel Özellikleri</Text>
                </TouchableOpacity>
                {visibility.canlilarTemel && (
                  <View style={styles.hiddenSection}>
                    <Text>* Deneme Testi</Text>
                    <Text>* Deneme Testi 2</Text>
                    <Text style={{color:"green"}}>* Deneme Testi 3</Text>
                  </View>
                )}
          </View>
          <View style={{ backgroundColor: "green", width: "100%",marginTop:10 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 22 }}>100TL</Text>
            <Text style={{ color: "#fff", textAlign: "center" }}>Sepete Ekle</Text>
          </View> 
          </View> 
         </View> 
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  topMenuRightBox: {
    flexDirection: 'row',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  sectionHeader: {
    marginLeft: 30,
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  hiddenSection: {
    marginLeft: 30,
    marginTop: 5,
  },
});

export default UrunDetayKitap;
