import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions'; // Redux action'ı içe aktar

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    fetch('http://192.168.56.1:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (data.message === 'Giriş başarılı!') {
          await AsyncStorage.setItem('userToken', data.token);
          await AsyncStorage.setItem('username', username);
  
          dispatch(setUser(username)); // Redux'a kullanıcıyı ekle
  
          Alert.alert('Başarı', 'Giriş başarılı!', [
            { 
              text: 'Tamam', 
              onPress: () => {
                setUsername('');
                setPassword('');
                navigation.navigate('index');
              } 
            }
          ]);
        } else {
          Alert.alert('Hata', data.message || 'Bilinmeyen hata');
        }
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  input: { width: '100%', height: 50, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, backgroundColor: '#fff', fontSize: 16 },
  button: { width: '100%', height: 50, backgroundColor: '#4caf50', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
