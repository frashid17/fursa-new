import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const mockAppliedJobs = [
  { id: '1', title: 'Software Developer', company: 'Tech Co.', location: 'Mombasa', status: 'Pending' },
  { id: '2', title: 'Graphic Designer', company: 'Design Hub', location: 'Nairobi', status: 'Accepted' },
  { id: '3', title: 'Data Analyst', company: 'DataTech', location: 'Mombasa', status: 'Rejected' },
];

export default function HomePage() {
  const [appliedJobs, setAppliedJobs] = useState(mockAppliedJobs);
  
  // Handle Profile Settings button press
  const handleProfileSettings = () => {
    // For example, navigate to profile settings
    Alert.alert('Profile Settings', 'Navigating to Profile Settings...');
  };

  // Handle Apply to Jobs button press
  const handleApplyToJobs = () => {
    // Navigate to job listings page
    Alert.alert('Apply to Jobs', 'Navigating to job listings...');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/fursa.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>

      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>frashid274@gmail.com</Text>
      </View>

      {/* Applied Jobs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jobs You Have Applied To</Text>
        {appliedJobs.length > 0 ? (
          appliedJobs.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <Text style={[styles.jobStatus, getStatusStyle(job.status)]}>
                {job.status}
              </Text>
            </View>
          ))
        ) : (
          <Text>No jobs applied yet. Apply for jobs today!</Text>
        )}
      </View>

      {/* Profile Settings Section */}
      <Pressable style={styles.button} onPress={handleProfileSettings}>
        <Ionicons name="settings" size={24} color="white" />
        <Text style={styles.buttonText}>Profile Settings</Text>
      </Pressable>

      {/* Apply to Jobs Section */}
      <Pressable style={styles.button} onPress={handleApplyToJobs}>
        <FontAwesome name="briefcase" size={24} color="white" />
        <Text style={styles.buttonText}>Apply to Jobs</Text>
      </Pressable>
    </ScrollView>
  );
}

// Helper function to get status styles
const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Pending':
      return { color: 'orange' };
    case 'Accepted':
      return { color: 'green' };
    case 'Rejected':
      return { color: 'red' };
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    paddingBottom: 40,  // Ensure there's enough space at the bottom for scrolling
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#045484',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#045484',
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#045484',
    marginBottom: 10,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#045484',
  },
  jobCompany: {
    fontSize: 14,
    color: '#555',
  },
  jobLocation: {
    fontSize: 14,
    color: '#74C850',
  },
  jobStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#045484',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    marginLeft: 10,
  },
});
