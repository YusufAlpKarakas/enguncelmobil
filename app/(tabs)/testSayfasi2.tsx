import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const testSayfasi2 = () => {

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
                <View style={{marginTop:10,flexWrap:"wrap",width:"95%",flexDirection:"row"}}>

                <View style={{flexDirection:"row",margin:5,flexWrap:"wrap",width:"45%"}}>
                <Text>A)</Text>
                  <View>
                    <Text> Polimer yapılı büyük organik moleküllerdir</Text>
                    <Image source={require('../../assets/images/kitap.png')}style={{width:"100%",height:"150",objectFit:"contain"}}/>
                  </View>
                </View>

                <View style={{flexDirection:"row",margin:5,flexWrap:"wrap",width:"45%"}}>
                  <Text>B)</Text>
                  <View>
                    <Text> Polimer yapılı büyük organik moleküllerdir</Text>
                    <Image source={require('../../assets/images/kitap.png')}style={{width:"100%",height:"150",objectFit:"contain"}}/>                  </View>
                </View>

                <View style={{flexDirection:"row",margin:5,flexWrap:"wrap",width:"45%"}}>
                <Text>C)</Text>
                  <View>
                    <Text> Polimer yapılı büyük organik moleküllerdir</Text>
                    <Image source={require('../../assets/images/kitap.png')}style={{width:"100%",height:"150",objectFit:"contain"}}/>                  </View>
                </View>

                <View style={{flexDirection:"row",margin:5,flexWrap:"wrap",width:"45%"}}>
                <Text style={{}}>D)</Text>
                  <View style={{}}>
                    <Text> Polimer yapılı büyük organik moleküllerdir</Text>
                    <Image source={require('../../assets/images/kitap.png')}style={{width:"100%",height:"150",objectFit:"contain"}}/>                  </View>
                </View>

                <View style={{flexDirection:"row",margin:5,flexWrap:"wrap",width:"45%"}}>
                <Text>E)</Text>
                  <View>
                    <Text> Polimer yapılı büyük organik moleküllerdir</Text>
                    <Image source={require('../../assets/images/kitap.png')}style={{width:"100%",height:"150",objectFit:"contain"}}/>                  </View>
                </View>

                </View> 
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
    )
  }
export default testSayfasi2;