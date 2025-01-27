import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://192.168.56.1:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Giriş başarılı!') {
          AsyncStorage.setItem('userToken', data.token);
          AsyncStorage.setItem('username', username); // username verisini AsyncStorage'a kaydediyoruz

          Alert.alert('Başarı', 'Giriş başarılı!');
          // Burada doğrudan yönlendirme yapmıyoruz, sadece AsyncStorage'da veriyi kaydediyoruz.
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
