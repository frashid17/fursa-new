import { StyleSheet, Pressable, Image, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Text } from '@/components/Themed';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'; // Import Swiper
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function TabOneScreen() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<string | null>(null);

  // Random jobs data to be updated when backend is connected
  const jobsData = [
    { id: '1', title: 'Software Developer', company: 'Tech Co.', location: 'Mombasa', description: 'Develop web applications.', type: 'Full-Time', postedDate: '2024-11-22' },
    { id: '2', title: 'Graphic Designer', company: 'Design Hub', location: 'Nairobi', description: 'Create designs for marketing.', type: 'Part-Time', postedDate: '2024-11-21' },
    { id: '3', title: 'Data Analyst', company: 'DataTech', location: 'Mombasa', description: 'Analyze business data for insights.', type: 'Full-Time', postedDate: '2024-11-20' },
    { id: '4', title: 'Project Manager', company: 'Build Co.', location: 'Mombasa', description: 'Manage projects from start to finish.', type: 'Part-Time', postedDate: '2024-11-19' },
    { id: '5', title: 'Content Writer', company: 'MediaPro', location: 'Nairobi', description: 'Write engaging content.', type: 'Remote', postedDate: '2024-11-18' },
  ];

  // Apply filters and search query
  const filteredJobs = jobsData.filter((job) => {
    const matchesType = selectedFilter ? job.type === selectedFilter : true;
    const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
    const matchesDate = dateFilter ? job.postedDate === dateFilter : true;
    const matchesSearch = searchQuery
      ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesType && matchesLocation && matchesDate && matchesSearch;
  });

  const renderHeader = () => (
    <>
      {/* Welcome Section */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/fursa.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to Fursa</Text>
        <Text style={styles.subtitle}>Your gateway to new job opportunities</Text>
      </View>

      {/* Filters Section */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersHeader}>Filters</Text>
        <View style={styles.filters}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'Part-Time' && styles.selectedFilterButton,
            ]}
            onPress={() => setSelectedFilter(selectedFilter === 'Part-Time' ? null : 'Part-Time')}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'Part-Time' && styles.selectedFilterText,
              ]}
            >
              Part-Time
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedFilter === 'Full-Time' && styles.selectedFilterButton,
            ]}
            onPress={() => setSelectedFilter(selectedFilter === 'Full-Time' ? null : 'Full-Time')}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === 'Full-Time' && styles.selectedFilterText,
              ]}
            >
              Full-Time
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedLocation === 'Mombasa' && styles.selectedFilterButton,
            ]}
            onPress={() =>
              setSelectedLocation(selectedLocation === 'Mombasa' ? null : 'Mombasa')
            }
          >
            <Text
              style={[
                styles.filterText,
                selectedLocation === 'Mombasa' && styles.selectedFilterText,
              ]}
            >
              Mombasa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              dateFilter === '2024-11-22' && styles.selectedFilterButton,
            ]}
            onPress={() => setDateFilter(dateFilter === '2024-11-22' ? null : '2024-11-22')}
          >
            <Text
              style={[
                styles.filterText,
                dateFilter === '2024-11-22' && styles.selectedFilterText,
              ]}
            >
              Today
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for jobs..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Featured Jobs Section */}
      <View style={styles.carouselContainer}>
        <Text style={styles.carouselHeader}>Featured Jobs</Text>
        <Swiper style={styles.swiper} showsPagination={true} loop={true} autoplay={false}>
          {jobsData.slice(0, 3).map((job) => (
            <View style={styles.carouselItem} key={job.id}>
              <Text style={styles.carouselTitle}>{job.title}</Text>
              <Text style={styles.carouselCompany}>{job.company}</Text>
              <Text style={styles.carouselLocation}>{job.location}</Text>
              <Text style={styles.carouselDescription}>{job.description}</Text>
            </View>
          ))}
        </Swiper>
      </View>

      {/* All Jobs Header */}
      <Text style={styles.allJobsHeader}>All Jobs</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredJobs}
        keyExtractor={(job) => job.id}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <Text style={styles.jobLocation}>{item.location}</Text>
            <Text style={styles.jobPostedDate}>Posted on: {item.postedDate}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>Made with ❤️ by Team Fursa</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#045484', 
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  filtersContainer: {
    width: '100%',
    marginBottom: 20,
  },
  filtersHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#045484',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedFilterButton: {
    backgroundColor: '#045484',
    borderColor: '#045484',
  },
  filterText: {
    fontSize: 14,
    color: '#045484',
  },
  selectedFilterText: {
    color: '#fff',
  },
  searchBar: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  carouselContainer: {
    width: '100%',
    marginBottom: 30,
  },
  carouselHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#045484', 
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  swiper: {
    height: 200,
  },
  carouselItem: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#045484',
  },
  carouselCompany: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  carouselLocation: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  carouselDescription: {
    fontSize: 14,
    color: '#333',
  },
  allJobsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  allJobsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#045484',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  jobItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#045484',
  },
  jobCompany: {
    fontSize: 14,
    color: '#555',
  },
  jobLocation: {
    fontSize: 14,
    color: '#777',
  },
  jobPostedDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#777',
  },
});
