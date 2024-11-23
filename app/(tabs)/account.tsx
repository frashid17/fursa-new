import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AccountScreen() {
  const router = useRouter();

  const handleLoginPress = () => {
    // Navigate to the login page
    router.push('/login');
  };

  const handleSignupPress = () => {
    // Navigate to the signup page
    router.push('/signup');
  };

  return (
    <View style={styles.container}>
      {/* Image at the top */}
      <Image source={require('@/assets/images/fursa.png')} style={styles.logo} />

      {/* Header */}
      <Text style={styles.headerText}>Welcome to Fursa</Text>
      <Text style={styles.subHeaderText}>Please choose an option below</Text>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* Login Button */}
        <Pressable style={styles.button} onPress={handleLoginPress}>
          <Ionicons name="log-in" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        {/* Signup Button */}
        <Pressable style={[styles.button, styles.signupButton]} onPress={handleSignupPress}>
          <FontAwesome5 name="user-plus" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#045484', // Venice Blue
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#045484', // Venice Blue
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  signupButton: {
    backgroundColor: '#74C850', // Light Green
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});
