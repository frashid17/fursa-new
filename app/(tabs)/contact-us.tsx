import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity, Text, View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ContactUsScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      Alert.alert('Thank You!', 'Your message has been sent.');
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    }, 1500); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/images/fursa.png')} style={styles.headerImage} />
      </View>

      <Text style={styles.description}>
        We would love to hear from you! Please fill in the form below and let us know your queries or feedback.
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#045484" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#045484" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="chatbubble-outline" size={20} color="#045484" style={styles.icon} />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send Message</Text>
        )}
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>You can also reach us via email:</Text>
        <Text style={styles.emailText}>info@fursa.or.ke</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#8CC41C', // Lima
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#045484', // Venice Blue
  },
});
