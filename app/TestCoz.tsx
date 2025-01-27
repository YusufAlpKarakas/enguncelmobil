import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TestCoz = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.section1Box}>
            <Text style={{ fontSize: 23, paddingHorizontal: 10, paddingVertical: 20 }}>
              TYT Matematik Soru Bankası
            </Text>
            <Text style={styles.text}>Nükleik Asitlerin Keşfi ve Önemi Testleri 1</Text>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.section2Box}>
            <Text style={{ fontSize: 23, paddingHorizontal: 10, paddingVertical: 20 }}>
              İstatistikler
            </Text>
            <View style={styles.section2Middle}>
              <View style={{ flexDirection: 'row', width: '80%' }}>
                <View style={{ flexDirection: 'row', width: '45%' }}>
                  <Text style={styles.text}>Testi Çözen</Text>
                </View>
                <Text style={styles.text}>: 10000</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '80%' }}>
                <View style={{ flexDirection: 'row', width: '45%' }}>
                  <Text style={styles.text}>Doğruluk Oranı</Text>
                </View>
                <Text style={styles.text}>: %86</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '80%' }}>
                <View style={{ flexDirection: 'row', width: '45%' }}>
                  <Text style={styles.text}>Yanlışları Çözme</Text>
                </View>
                <Text style={styles.text}>: 2432</Text>
              </View>
            </View>
            <Text style={{ paddingVertical: 15, fontSize: 15, color: '#333', opacity: 0.8 }}>
              Beğenen: 8856
            </Text>
          </View>
        </View>
        <View style={styles.section3}>
          <View style={styles.section3Box}>
            <Text style={{ fontSize: 23, paddingHorizontal: 10, paddingVertical: 20 }}>
              Kazanımlar
            </Text>
            <Text style={styles.text}>Nükleik asitlerin keşif sürecini özetler</Text>
            <Text style={styles.text}>Nükleik asitlerin çeşitlerini ve görevlerini açıklar</Text>
            <Text style={styles.text}>Nükleik asitlerin keşif sürecini özetler</Text>
            <Text style={styles.text}>DNA'nın kendini eşlemesini açıklar</Text>
          </View>
        </View>
        <Text style={{backgroundColor:"green",padding:10,fontSize:18,color:"#fff",textAlign:"center",marginVertical:10}}>Başla</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    padding: 10,
    flexDirection: 'row',
  },
  section1Box: {
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F0E7E7',
    padding: 10,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  section2: {
    padding: 10,
    flexDirection: 'row',
  },
  section2Box: {
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F0E7E7',
    padding: 10,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  section3: {
    padding: 10,
    flexDirection: 'row',
  },
  section3Box: {
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F0E7E7',
    padding: 10,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 15,
    color: '#333',
    opacity: 0.8,
  },
  section2Middle: {},
});

export default TestCoz;
