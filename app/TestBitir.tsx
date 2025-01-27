import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TestBitir = () => {
    return (
        <ScrollView>
          <SafeAreaView>
            <View style={{}}>
              <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
              <View style={{width:"95%",borderWidth: 2,borderColor:"#F0E7E7",shadowRadius: 4 ,borderRadius:10,padding:10}}>
                <Text style={{fontSize:21}}>TYT Matematik Soru Bankası</Text>
                <Text>Nükleik Asitlerin Keşfi ve Önemi Testleri 1</Text> 
              </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
              <View style={{width:"95%",borderWidth: 2,borderColor:"#F0E7E7",shadowRadius: 4 ,borderRadius:10,padding:10}}>
                <Text style={{fontSize:21,padding:10}}>Kazanımlar</Text>
                <Text style={{marginVertical:4}}>Nükleik asitlerin keşif sürecini özetler</Text>
                <Text style={{marginVertical:4}}>Nükleik asitlerin Çeşitlerini ve görevlerini açıklar</Text>
                <Text style={{marginVertical:4}}>Nükleik asitlerin keşif sürecini özetler</Text>
                <Text style={{marginVertical:4}}>DNA'nın kendini eşlemesini açıklar</Text>
              </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
              <View style={{width:"95%",borderWidth: 2,borderColor:"#F0E7E7",shadowRadius: 4 ,borderRadius:10,padding:10}}>
                 <Text style={{fontSize:21,padding:10}}>İstatistik</Text>
                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{width:"40%"}}>
                       <Text>Sizin</Text>
                       <View style={{flexDirection:"row"}}><Text>Not</Text><Text>:%85</Text></View>
                       <View style={{flexDirection:"row"}}><Text>Doğru</Text><Text>:%85</Text></View>
                       <View style={{flexDirection:"row"}}><Text>Yanlış</Text><Text>:%85</Text></View> 
                    </View>
                    <View style={{width:"40%"}}>
                       <Text>Genel</Text>
                       <View style={{flexDirection:"row"}}><Text>Not</Text><Text>:%85</Text></View>
                       <View style={{flexDirection:"row"}}><Text>Doğru</Text><Text>:%85</Text></View>
                       <View style={{flexDirection:"row"}}><Text>Yanlış</Text><Text>:%85</Text></View> 
                    </View>
                 </View>
              </View>
              </View>
                 <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
                    <View style={{width:"95%",borderWidth: 2,borderColor:"#F0E7E7",shadowRadius: 4 ,borderRadius:10,padding:10}}>
                    <Text style={{fontSize:21,padding:10}}>Sorular</Text>
                       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginVertical:4}}><Text>1. Nükleik Asit</Text><Text style={{color:"green",backgroundColor:'rgba(0, 255, 0, 0.1)',padding:4,}}>Doğru</Text></View>
                       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginVertical:4}}><Text>2. RNA Yapısı</Text><Text style={{color:"green",backgroundColor:'rgba(0, 255, 0, 0.1)',padding:4,}}>Doğru</Text></View>
                       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginVertical:4}}><Text>3. DNA Yapısı</Text><Text style={{color:"red",backgroundColor:'rgba(255, 0, 0, 0.1)',padding:4,}}>Yanlış</Text></View>
                       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginVertical:4}}><Text>4. Nukleik Asit</Text><Text style={{color:"green",backgroundColor:'rgba(0, 255, 0, 0.1)',padding:4,}}>Doğru</Text></View> 
                       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginVertical:4}}><Text>5. RNA Yapısı</Text><Text style={{color:"green",backgroundColor:'rgba(0, 255, 0, 0.1)',padding:4,}}>Doğru</Text></View> 
                       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",marginVertical:4}}><Text>6. DNA Yapısı</Text><Text style={{color:"green",backgroundColor:'rgba(0, 255, 0, 0.1)',padding:4,}}>Doğru</Text></View>  
                    </View>
                 </View>
                 <Text style={{backgroundColor:"green",padding:10,fontSize:18,color:"#fff",textAlign:"center",marginVertical:6}}>Bitir</Text>
            </View>
          </SafeAreaView>
        </ScrollView>
    )
  }
export default TestBitir;