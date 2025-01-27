import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native'; // useRoute kullanarak parametreyi alıyoruz.

const Sepet = () => {
  const route = useRoute(); // route hook'unu kullanıyoruz.
  const { userName } = route.params || {}; // params'dan userName'i alıyoruz, varsa.

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
           <View style={styles.topMenu}>
              <Text>Sınavv </Text>
              <Text style={styles.text}>{`Hoşgeldiniz, ${userName || 'Kullanıcı'}`}</Text>
           </View>
           <View style={{width:"100%",height:"90%",flexDirection:"column",justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",height:"auto",margin:10}}>
                <View style={{borderWidth:1,borderRadius:10,borderColor:"grey",paddingVertical:15,flex:1,alignItems:"center"}}>
                <Image source={require('../assets/images/kitap.png')} style={styles.productImage} /> 
                </View> 
                <View style={{width:"70%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}> 
                  <View style={{width:"50%"}}>
                  <Text>Üç Dört Beş</Text>
                     <Text>TYT Matematik Soru Bankası</Text>
                     </View>
                     <Text style={{width:"20%"}}> 100 TL</Text>               
                     <Text style={{flexDirection:"row",alignItems:"center",paddingHorizontal:4,borderRadius:15,justifyContent:"center",color:"#fff",fontSize:16,backgroundColor:"red"}}>X</Text>               
                </View>               
              </View>
              <View style={{borderTopWidth:2,borderColor:"grey"}}>
                 <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <Text style={{opacity:0.5}}>Kupon Kullan</Text>
                  <Text style={{fontSize:20}}>Toplam: 100 TL</Text>
                 </View>
                 <Text style={{backgroundColor:"green",color:"#fff",padding:"10",fontSize:21,marginTop:10,borderRadius:8}}>Ödemeye Geç</Text>
              </View>
           </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:700,
    flex:1
  },
  topMenu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding:10
  },
  productImage:{
    objectFit:"contain",
    height:120
  }
});

export default Sepet;
