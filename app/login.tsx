import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials for testing purposes
    const correctEmail = 'frashid274@gmail.com';
    const correctPassword = 'password';

    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (email === correctEmail && password === correctPassword) {
      router.push('/home');
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={100} color="#045484" style={styles.icon} />
      
      <Text style={styles.headerText}>Login to Your Account</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#333" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#333" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => router.push('/signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#045484', // Venice Blue
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#045484', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    fontSize: 16,
    color: '#045484',
  },
});
