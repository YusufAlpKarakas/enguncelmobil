import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const UrunDetay = () => {
  const navigation = useNavigation();

  // Her bir başlık için görünürlük durumlarını ayrı ayrı tutan state
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
          <View style={{ width: "85%" }}>
            <View style={styles.topMenu}>
              <Text style={styles.text}>Sınavv</Text>
              <View style={styles.topMenuRightBox}>
                <TouchableOpacity onPress={() => navigation.navigate('UrunDetayKitap')}>
                  <Icon name="shopping-cart" size={25} color="#000" style={styles.icon1} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 40, color: '#333' }}>TYT Matematik Soru Bankası</Text>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ borderWidth: 1, borderColor: "grey", paddingVertical: 20, borderRadius: 10, width: "45%" }}>
                  <Image source={require('../assets/images/kitap.png')} style={styles.productImage} />
                </View>
                <View style={{ width: "50%", flexDirection: "column", justifyContent: "space-around" }}>
                  <Text style={{ lineHeight: 23 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore minus praesentium beatae voluptatibus aliquid qui unde maiores dolorum.
                  </Text>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Text style={{ opacity: 0.5 }}> Soru Sayısı: </Text><Text>443</Text>
                  </View>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Text style={{ opacity: 0.5 }}> Tamamlanma Yüzdesi: </Text><Text>83%</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "center" }}>
              <View style={{ width: "90%" }}>
                {/* Örnek Testler */}
                <TouchableOpacity onPress={() => toggleSection('ornekTestler')}>
                  <Text style={styles.sectionHeader}>A) Örnek Testler</Text>
                </TouchableOpacity>
                {visibility.ornekTestler && (
                  <View style={styles.hiddenSection}>
                    <Text style={{color:"green"}}>* Deneme Testi</Text>
                    <Text>* Deneme Testi 2</Text>
                  </View>
                )}

                {/* Canlıların Ortak Özellikleri */}
                <TouchableOpacity onPress={() => toggleSection('canlilarOrt')}>
                  <Text style={styles.sectionHeader}>B) Canlıların Ortak Özellikleri</Text>
                </TouchableOpacity>
                {visibility.canlilarOrt && (
                  <View style={styles.hiddenSection}>
                    <Text>* Deneme Testi</Text>
                    <Text style={{color:"green"}}>* Deneme Testi 2</Text>
                    <Text>* Deneme Testi 3</Text>
                  </View>
                )}

                {/* Canlıların Temel Özellikleri */}
                <TouchableOpacity onPress={() => toggleSection('canlilarTemel')}>
                  <Text style={styles.sectionHeader}>C) Canlıların Temel Özellikleri</Text>
                </TouchableOpacity>
                {visibility.canlilarTemel && (
                  <View style={styles.hiddenSection}>
                    <Text>* Deneme Testi</Text>
                    <Text>* Deneme Testi 2</Text>
                    <Text style={{color:"green"}}>* Deneme Testi 3</Text>
                  </View>
                )}
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
    justifyContent: "center",
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

export default UrunDetay;
