import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TestSayfasi = () => {

  const navigation = useNavigation();

    return (
        <ScrollView>
          <SafeAreaView>
            <View style={{}}>
              <View style={{margin:10}}>
                <View style={{padding:10}}>
                  <Text style={{fontSize:20}}>1.SORU</Text>
                  <Text style={{fontSize:16}}>Nukleik asitlerle ilgili aşağıdaki ifadelerden hangisi yanlıştır?</Text>
                </View>
                <View style={{marginTop:10}}>
                  <Text style={{fontSize:17,padding:8,borderRadius:8}}>A) Polimer yapılı büyük organik moleküllerdir</Text>
                  <Text style={{fontSize:17,padding:8,borderRadius:8}}>B) İçerdikleri şeker ve baza göre isimlendirilir</Text>
                  <Text style={{fontSize:17,padding:8,borderRadius:8}}>C) Nukleik adı verilen birimlerden oluşur</Text>
                  <Text style={{fontSize:17,padding:8,borderRadius:8}}>D) Yapılarında C,H,O,N ve P elementleri bulunur</Text>
                  <Text style={{fontSize:17,padding:8,borderRadius:8}}>E) Molekülün yapısında sadece fosfodiester bağları bulunur
                  </Text>
                </View> 
              </View>
                <TouchableOpacity onPress={() => navigation.navigate('TestBitir')}>
                <Text style={{backgroundColor:"green",padding:10,fontSize:18,color:"#fff",textAlign:"center"}}>Testi Bitir</Text>
                </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
    )
  }
export default TestSayfasi;