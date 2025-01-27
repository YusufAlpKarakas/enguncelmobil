import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    fetch('http://192.168.56.1:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ full_name: fullName, username, email, password }),
    })
      .then((response) => response.text())
      .then((message) => {
        Alert.alert('Bilgi', message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
