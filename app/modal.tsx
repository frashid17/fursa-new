import React from "react";
import { ScrollView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Fursa is a platform dedicated to connecting job seekers in Mombasa with great career opportunities. We aim to create a bridge between local businesses and talented individuals looking for work in various industries.
      </Text>

      <Text style={styles.subheader}>Our Mission</Text>
      <Text style={styles.paragraph}>
        Our mission is to empower the youth of Mombasa by providing access to meaningful job opportunities that foster personal growth and economic stability.
      </Text>

      <Text style={styles.subheader}>Our Values</Text>
      <Text style={styles.paragraph}>
        We believe in integrity, inclusivity, and community. By connecting employers and job seekers in a respectful and supportive environment, we aim to build a stronger local workforce.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9", // Light background for the container
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#045484", // Venice Blue
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
  paragraph: {
    fontSize: 16,
    color: "#74c850", // Mantis
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#045484", // Venice Blue
  },
});
